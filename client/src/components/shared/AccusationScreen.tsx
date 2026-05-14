import { useState } from 'react'
import { motion } from 'framer-motion'
import { useGameStore } from '../../store/gameStore'
import { useAudioStore } from '../../store/audioStore'
import { useTranslation } from '../../i18n/useTranslation'
import Stamp from '../ui/Stamp'

type Phase = 'review' | 'accuse'

export default function AccusationScreen() {
  const { t, locale, dir } = useTranslation()
  const selectedCase = useGameStore(s => s.selectedCase)
  const role = useGameStore(s => s.role)
  const examinedClues = useGameStore(s => s.examinedClues)
  const connections = useGameStore(s => s.connections)
  const approachedCharacters = useGameStore(s => s.approachedCharacters)
  const setFlowState = useGameStore(s => s.setFlowState)
  const submitAccusation = useGameStore(s => s.submitAccusation)
  const playStamp = useAudioStore(s => s.playStamp)

  const [phase, setPhase] = useState<Phase>('review')
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [reasoning, setReasoning] = useState('')

  const characters = selectedCase?.characters ?? []
  const allClues = selectedCase?.rooms.flatMap(r => r.clues) ?? []

  const handleConfirm = () => {
    if (!selectedId || !reasoning.trim()) return
    submitAccusation(selectedId, reasoning.trim())
    playStamp()
  }

  const handleCancel = () => {
    setFlowState(role === 'investigator' ? 'INVESTIGATION' : 'ANALYSIS')
  }

  return (
    <motion.div
      dir={dir}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-0 md:p-4"
      style={{ background: 'rgba(0,0,0,0.85)' }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        className="paper w-full max-w-lg max-h-screen overflow-y-auto md:rounded"
        style={{ minHeight: '100dvh', borderRadius: 0 }}
      >
        <div className="p-4 md:p-6">
          {phase === 'review' && (
            <>
              <div className="flex flex-col items-center gap-2 mb-5">
                <div
                  className="w-16 h-16 rounded-full border-2 flex items-center justify-center stamped text-xs"
                  style={{ borderColor: 'var(--blue)', color: 'var(--blue)' }}
                >
                  SEAL
                </div>
                <Stamp text={t('deliberation_header')} variant="blue" rotate={-4} />
              </div>

              <p className="hand text-sm text-center mb-4" style={{ color: 'var(--ink3)' }}>
                {t('deliberation_desc')}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="paper-dark p-3 text-center" style={{ borderRadius: 4 }}>
                  <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
                    {t('examined_count').replace(':', '')}
                  </div>
                  <div className={`${locale === 'ar' ? 'arabic' : 'serif'} text-lg font-bold`} style={{ color: 'var(--ink)' }}>
                    {examinedClues.length}
                  </div>
                </div>
                <div className="paper-dark p-3 text-center" style={{ borderRadius: 4 }}>
                  <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
                    {t('connections_made')}
                  </div>
                  <div className={`${locale === 'ar' ? 'arabic' : 'serif'} text-lg font-bold`} style={{ color: 'var(--ink)' }}>
                    {connections.length}
                  </div>
                </div>
                <div className="paper-dark p-3 text-center" style={{ borderRadius: 4 }}>
                  <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
                    {t('characters_in_room').replace(':', '')}
                  </div>
                  <div className={`${locale === 'ar' ? 'arabic' : 'serif'} text-lg font-bold`} style={{ color: 'var(--ink)' }}>
                    {approachedCharacters.length}
                  </div>
                </div>
                <div className="paper-dark p-3 text-center" style={{ borderRadius: 4 }}>
                  <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
                    {t('dossiers_tab')}
                  </div>
                  <div className={`${locale === 'ar' ? 'arabic' : 'serif'} text-lg font-bold`} style={{ color: 'var(--ink)' }}>
                    {characters.length}
                  </div>
                </div>
              </div>

              {examinedClues.length > 0 && (
                <div className="paper-dark p-3 mb-4" style={{ borderRadius: 4 }}>
                  <div className="stamped text-xs mb-1" style={{ color: 'var(--ink3)' }}>
                    {t('items_in_room').replace(':', '')}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {examinedClues.map(id => {
                      const clue = allClues.find(c => c.id === id)
                      if (!clue) return null
                      return (
                        <span key={id} className="mono text-xs px-2 py-0.5" style={{ background: 'var(--gold)', color: 'var(--ink)', borderRadius: 2 }}>
                          {locale === 'en' ? clue.name : clue.nameAr}
                        </span>
                      )
                    })}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setPhase('accuse')}
                  className="stamp stamp-red flex-1 min-h-[44px] text-center cursor-pointer hover:opacity-100 transition-opacity"
                  style={{ background: 'transparent' }}
                >
                  {t('submit_accusation')}
                </button>
                <button
                  onClick={handleCancel}
                  className="stamp flex-1 min-h-[44px] text-center cursor-pointer hover:opacity-100 transition-opacity"
                  style={{ background: 'transparent', borderColor: 'var(--ink3)', color: 'var(--ink3)' }}
                >
                  {t('cancel_btn')}
                </button>
              </div>
            </>
          )}

          {phase === 'accuse' && (
            <>
              <div className="flex flex-col items-center gap-2 mb-5">
                <div
                  className="w-16 h-16 rounded-full border-2 flex items-center justify-center stamped text-xs"
                  style={{ borderColor: 'var(--blue)', color: 'var(--blue)' }}
                >
                  SEAL
                </div>
                <Stamp text={t('warrant_header')} variant="blue" rotate={-4} />
              </div>

              <label className="stamped text-xs block mb-2" style={{ color: 'var(--ink3)' }}>
                {t('accuse_label')}
              </label>

              <div className="space-y-2 mb-4">
                {characters.map(ch => {
                  const isSelected = selectedId === ch.id
                  return (
                    <button
                      key={ch.id}
                      onClick={() => setSelectedId(ch.id)}
                      className="w-full text-left paper p-3 cursor-pointer transition-all"
                      style={{
                        border: isSelected ? '2px solid var(--red)' : '2px solid transparent',
                        boxShadow: isSelected ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                      }}
                    >
                      <div className={`${locale === 'ar' ? 'arabic' : 'serif'} font-bold`} style={{ color: 'var(--ink)' }}>
                        {locale === 'en' ? ch.name : ch.nameAr}
                      </div>
                      <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
                        {locale === 'en' ? ch.role : ch.roleAr}
                      </div>
                    </button>
                  )
                })}
              </div>

              <label className="stamped text-xs block mb-1" style={{ color: 'var(--ink3)' }}>
                {t('reasoning_label')}
              </label>
              <textarea
                value={reasoning}
                onChange={e => setReasoning(e.target.value)}
                className="w-full legal-pad p-3 hand text-sm outline-none resize-none mb-5"
                style={{ minHeight: 100, color: 'var(--ink)' }}
                placeholder={t('reasoning_placeholder')}
              />

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleConfirm}
                  disabled={!selectedId || !reasoning.trim()}
                  className="stamp stamp-red flex-1 min-h-[44px] text-center cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed hover:opacity-100 transition-opacity"
                  style={{ background: 'transparent' }}
                >
                  {t('submit_accusation')}
                </button>
                <button
                  onClick={() => setPhase('review')}
                  className="stamp flex-1 min-h-[44px] text-center cursor-pointer hover:opacity-100 transition-opacity"
                  style={{ background: 'transparent', borderColor: 'var(--ink3)', color: 'var(--ink3)' }}
                >
                  {t('cancel_btn')}
                </button>
              </div>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}
