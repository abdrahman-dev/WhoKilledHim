import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '../../store/gameStore'
import { useAudioStore } from '../../store/audioStore'
import { useTranslation } from '../../i18n/useTranslation'
import Stamp from '../ui/Stamp'
import PaperCard from '../ui/PaperCard'
import Button from '../ui/Button'
import AccusationScreen from '../shared/AccusationScreen'
import type { Room } from '../../types/game'

type View = 'map' | 'clues' | 'examine' | 'character'

export default function CrimeScene() {
  const { t, locale, dir } = useTranslation()
  const selectedCase = useGameStore(s => s.selectedCase)
  const currentRoomId = useGameStore(s => s.currentRoomId)
  const examinedClues = useGameStore(s => s.examinedClues)
  const approachedCharacters = useGameStore(s => s.approachedCharacters)
  const notes = useGameStore(s => s.notes)
  const flowState = useGameStore(s => s.flowState)
  const enterRoom = useGameStore(s => s.enterRoom)
  const examineClue = useGameStore(s => s.examineClue)
  const approachCharacter = useGameStore(s => s.approachCharacter)
  const updateNotes = useGameStore(s => s.updateNotes)
  const setFlowState = useGameStore(s => s.setFlowState)
  const playStep = useAudioStore(s => s.playStep)
  const playDiscover = useAudioStore(s => s.playDiscover)

  const [view, setView] = useState<View>('map')
  const [selectedClueId, setSelectedClueId] = useState<string | null>(null)
  const [selectedCharId, setSelectedCharId] = useState<string | null>(null)
  const [noteDraft, setNoteDraft] = useState(notes)
  const [showNotepad, setShowNotepad] = useState(false)

  const noteTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleNoteChange = useCallback((val: string) => {
    setNoteDraft(val)
    if (noteTimer.current) clearTimeout(noteTimer.current)
    noteTimer.current = setTimeout(() => updateNotes(val), 300)
  }, [updateNotes])

  const allRooms = selectedCase?.rooms ?? []
  const currentRoom = allRooms.find(r => r.id === currentRoomId)
  const allClues = allRooms.flatMap(r => r.clues)

  const isRoomAccessible = (room: Room): boolean => {
    if (!room.isLocked) return true
    if (!room.unlockedBy) return false
    return examinedClues.includes(room.unlockedBy)
  }

  const totalClues = allClues.length
  const examinedCount = examinedClues.length

  const handleEnterRoom = (roomId: string) => {
    const room = allRooms.find(r => r.id === roomId)
    if (!room || !isRoomAccessible(room)) return
    enterRoom(roomId)
    setView('map')
    playStep()
  }

  const handleExamineClue = (clueId: string) => {
    examineClue(clueId)
    setSelectedClueId(clueId)
    setView('examine')
    playDiscover()
  }

  const handleApproach = (charId: string) => {
    approachCharacter(charId)
    setSelectedCharId(charId)
    setView('character')
  }

  const canAccuse = examinedClues.length >= 3

  const renderMap = () => {
    const room = currentRoom ?? allRooms[0]
    if (!room) return null

    return (
      <div className="space-y-4">
        <PaperCard key={room.id} clip className="p-4">
          <Stamp text={t('active_duty_stamp')} variant="green" rotate={-4} />
          <h3 className={`${locale === 'ar' ? 'arabic' : 'serif'} text-xl font-bold mt-2`} style={{ color: 'var(--ink)' }}>
            {locale === 'en' ? room.name : room.nameAr}
          </h3>
          <p className="hand text-sm mt-2 leading-relaxed" style={{ color: 'var(--ink2)' }}>
            {locale === 'en' ? room.atmosphere : room.atmosphereAr}
          </p>
        </PaperCard>

        <div>
          <div className="stamped text-xs mb-2" style={{ color: 'var(--ink3)' }}>
            {t('connected_areas')}
          </div>
          <div className="flex flex-wrap gap-2">
            {room.connectedTo.map(connId => {
              const connRoom = allRooms.find(r => r.id === connId)
              if (!connRoom) return null
              const accessible = isRoomAccessible(connRoom)
              return (
                <button
                  key={connId}
                  onClick={() => accessible && handleEnterRoom(connId)}
                  className={`paper px-3 py-2 text-left transition-all ${accessible ? 'cursor-pointer hover:shadow-lg' : 'opacity-50 cursor-not-allowed'}`}
                  style={{ minWidth: 120 }}
                >
                  <div className={`${locale === 'ar' ? 'arabic' : 'serif'} text-sm font-bold`} style={{ color: accessible ? 'var(--ink)' : 'var(--ink3)' }}>
                    {locale === 'en' ? connRoom.name : connRoom.nameAr}
                  </div>
                  {!accessible && <Stamp text={t('room_locked')} variant="red" rotate={0} />}
                  {accessible && (
                    <span className="mono text-xs" style={{ color: 'var(--green)' }}>
                      {t('enter_room')} →
                    </span>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {room.characters.length > 0 && (
          <div>
            <div className="stamped text-xs mb-2" style={{ color: 'var(--ink3)' }}>
              {t('characters_in_room')}
            </div>
            <div className="flex flex-wrap gap-2">
              {room.characters.map(ch => (
                <button
                  key={ch.id}
                  onClick={() => handleApproach(ch.id)}
                  className="paper px-3 py-2 cursor-pointer hover:shadow-lg transition-all"
                >
                  <div className={`${locale === 'ar' ? 'arabic' : 'serif'} text-sm font-bold`} style={{ color: 'var(--ink)' }}>
                    {locale === 'en' ? ch.name : ch.nameAr}
                  </div>
                  <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
                    {locale === 'en' ? ch.role : ch.roleAr}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        <div>
        <Button variant="paper" onClick={() => setView('clues')}>
          {t('examine_btn')} ({room.clues.length})
        </Button>
        </div>
      </div>
    )
  }

  const renderClues = () => {
    const room = currentRoom ?? allRooms[0]
    if (!room) return null

    return (
      <div>
        <Button variant="ghost" onClick={() => setView('map')} className="mb-3">
          {t('back_to_map')}
        </Button>

        <div className="stamped text-xs mb-3" style={{ color: 'var(--ink3)' }}>
          {t('current_room')} <span className={`${locale === 'ar' ? 'arabic' : 'serif'} font-bold`} style={{ color: 'var(--ink)' }}>
            {locale === 'en' ? room.name : room.nameAr}
          </span>
        </div>

        <div className="space-y-2">
          {room.clues.map(clue => {
            const blocked = clue.revealsAfter && !examinedClues.includes(clue.revealsAfter)
            const examined = examinedClues.includes(clue.id)

            if (blocked) {
              return (
                <div key={clue.id} className="paper-dark p-3 opacity-60">
                  <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
                    {clue.name}
                  </div>
                  <p className="hand text-xs mt-1">{t('not_yet_visible')}</p>
                </div>
              )
            }

            return (
              <button
                key={clue.id}
                onClick={() => !examined && handleExamineClue(clue.id)}
                className={`w-full text-left paper p-3 transition-all ${examined ? 'opacity-70' : 'cursor-pointer hover:shadow-lg'}`}
                disabled={examined}
              >
                <div className={`${locale === 'ar' ? 'arabic' : 'serif'} text-sm font-bold`} style={{ color: 'var(--ink)' }}>
                  {locale === 'en' ? clue.name : clue.nameAr}
                </div>
                {examined && (
                  <span className="stamp stamp-green mt-1" style={{ background: 'transparent', fontSize: '0.5rem' }}>
                    ✓
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </div>
    )
  }

  const renderExamine = () => {
    if (!selectedClueId) return null
    const room = currentRoom ?? allRooms[0]
    if (!room) return null
    const clue = room.clues.find(c => c.id === selectedClueId) ?? allClues.find(c => c.id === selectedClueId)
    if (!clue) return null

    const roomName = allRooms.find(r => r.clues.some(c => c.id === clue.id))?.name ?? room.name

    return (
      <div>
        <Button variant="ghost" onClick={() => setView('clues')} className="mb-3">
          {t('back_to_clues')}
        </Button>

        <PaperCard clip className="p-4">
          <h3 className={`${locale === 'ar' ? 'arabic' : 'serif'} text-xl font-bold mb-1`} style={{ color: 'var(--ink)' }}>
            {locale === 'en' ? clue.name : clue.nameAr}
          </h3>
          <div className="stamped text-xs mb-3" style={{ color: 'var(--ink3)' }}>
            {t('current_room')} {locale === 'en' ? roomName : (allRooms.find(r => r.clues.some(c => c.id === clue.id))?.nameAr ?? room.nameAr)}
          </div>

          <hr className="mb-3 opacity-30" style={{ borderColor: 'var(--ink3)' }} />

          <div className="stamped text-xs mb-1" style={{ color: 'var(--ink3)' }}>
            {t('observation_label')}
          </div>
          <p className={`${locale === 'ar' ? 'arabic' : 'serif'} text-sm leading-relaxed`} style={{ color: 'var(--ink)' }}>
            {locale === 'en' ? clue.observation : clue.observationAr}
          </p>

          <div
            className="p-3 mt-4 hand text-sm"
            style={{
              background: 'rgba(200,190,140,0.4)',
              transform: 'rotate(-2deg)',
              borderRadius: 2,
            }}
          >
            {locale === 'en'
              ? 'Tell your partner what you observe. Use your own words.'
              : 'صف لشريكك ما تلاحظه. استخدم كلماتك الخاصة.'}
          </div>
        </PaperCard>
      </div>
    )
  }

  const renderCharacter = () => {
    if (!selectedCharId) return null
    const ch = selectedCase?.characters.find(c => c.id === selectedCharId)
    if (!ch) return null

    return (
      <div>
        <Button variant="ghost" onClick={() => setView('map')} className="mb-3">
          {t('back_to_map')}
        </Button>

        <PaperCard className="p-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className={`${locale === 'ar' ? 'arabic' : 'serif'} text-xl font-bold`} style={{ color: 'var(--ink)' }}>
                {locale === 'en' ? ch.name : ch.nameAr}
              </h3>
              <span className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
                {locale === 'en' ? ch.role : ch.roleAr}
              </span>
            </div>
            <Stamp text={t('classified_stamp')} variant="red" rotate={6} />
          </div>

          <hr className="mb-3 opacity-30" style={{ borderColor: 'var(--ink3)' }} />

          <div className="stamped text-xs mb-1" style={{ color: 'var(--ink3)' }}>
            {t('observation_label')}
          </div>
          <p className={`${locale === 'ar' ? 'arabic' : 'serif'} text-sm mb-3 leading-relaxed`} style={{ color: 'var(--ink)' }}>
            {locale === 'en' ? ch.sceneObservation : ch.sceneObservationAr}
          </p>

          <div className="stamped text-xs mb-1" style={{ color: 'var(--ink3)' }}>
            {t('statement_label')}
          </div>
          <p className="hand text-sm italic leading-relaxed" style={{ color: 'var(--ink2)' }}>
            "{locale === 'en' ? ch.statement : ch.statementAr}"
          </p>
        </PaperCard>
      </div>
    )
  }

  const renderNotepad = () => (
    <div className="legal-pad h-full p-3 md:p-4" style={{ minHeight: '200px' }}>
      <h3 className="stamped text-xs mb-2" style={{ color: 'var(--red)', borderTop: '2px solid var(--red)', paddingTop: 4 }}>
        {t('notes_label')}
      </h3>
      <textarea
        value={noteDraft}
        onChange={e => handleNoteChange(e.target.value)}
        className="w-full bg-transparent outline-none resize-none hand text-sm"
        style={{
          minHeight: 120,
          color: 'var(--ink)',
          lineHeight: '27px',
        }}
        placeholder={t('notes_placeholder')}
      />
      <hr className="my-3 opacity-20" style={{ borderColor: 'var(--ink3)' }} />
      <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
        {t('examined_count')} {examinedCount} / {totalClues}
      </div>
      <div className="stamped text-xs mt-1" style={{ color: 'var(--ink3)' }}>
        CHARACTERS: {approachedCharacters.length}
      </div>
    </div>
  )

  return (
    <div dir={dir} className="flex flex-col md:flex-row" style={{ background: 'var(--desk)', minHeight: 'calc(100vh - 48px)' }}>
      <div className="flex-1 p-3 md:p-4 overflow-y-auto">
        <div className="flex items-center gap-2 mb-3">
          <Stamp text={t('active_duty_stamp')} variant="red" rotate={-2} />
          {currentRoom && (
            <span className={`${locale === 'ar' ? 'arabic' : 'serif'} text-sm truncate`} style={{ color: 'var(--paper2)' }}>
              — {locale === 'en' ? currentRoom.name : currentRoom.nameAr}
            </span>
          )}

          {canAccuse && (
            <button
              onClick={() => setFlowState('ACCUSATION')}
              className="stamp stamp-red ml-auto cursor-pointer hover:opacity-100 transition-opacity min-h-[44px]"
              style={{ background: 'transparent' }}
            >
              {t('warrant_header')}
            </button>
          )}

          <button
            onClick={() => setShowNotepad(!showNotepad)}
            className="stamp md:hidden cursor-pointer hover:opacity-100 transition-opacity"
            style={{ background: 'transparent', borderColor: 'var(--ink4)', color: 'var(--ink4)' }}
          >
            {showNotepad ? '✕' : t('notes_label')}
          </button>
        </div>

        <AnimatePresence mode="wait">
          {view === 'map' && <motion.div key="map" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{renderMap()}</motion.div>}
          {view === 'clues' && <motion.div key="clues" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{renderClues()}</motion.div>}
          {view === 'examine' && <motion.div key="examine" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{renderExamine()}</motion.div>}
          {view === 'character' && <motion.div key="character" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>{renderCharacter()}</motion.div>}
        </AnimatePresence>
      </div>

      <div
        className={`md:w-[35%] md:block ${showNotepad ? 'block' : 'hidden'} md:border-l`}
        style={{ borderColor: 'var(--ink2)' }}
      >
        {renderNotepad()}
      </div>

      {flowState === 'ACCUSATION' && <AccusationScreen />}
    </div>
  )
}
