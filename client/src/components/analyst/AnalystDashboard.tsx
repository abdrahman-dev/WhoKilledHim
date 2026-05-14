import { useState, useMemo } from 'react'
import { useGameStore } from '../../store/gameStore'
import { useTranslation } from '../../i18n/useTranslation'
import type { TranslationKey } from '../../i18n/translations'
import Stamp from '../ui/Stamp'
import PaperCard from '../ui/PaperCard'
import Button from '../ui/Button'
import AccusationScreen from '../shared/AccusationScreen'

type Tab = 'evidence' | 'archive' | 'dossiers' | 'documents' | 'board'

export default function AnalystDashboard() {
  const { t, locale, dir } = useTranslation()
  const selectedCase = useGameStore(s => s.selectedCase)
  const examinedClues = useGameStore(s => s.examinedClues)
  const searchQuery = useGameStore(s => s.searchQuery)
  const connections = useGameStore(s => s.connections)
  const flowState = useGameStore(s => s.flowState)
  const setSearchQuery = useGameStore(s => s.setSearchQuery)
  const addConnection = useGameStore(s => s.addConnection)
  const removeConnection = useGameStore(s => s.removeConnection)
  const setFlowState = useGameStore(s => s.setFlowState)

  const [tab, setTab] = useState<Tab>('evidence')
  const [selectedClueId, setSelectedClueId] = useState<string | null>(null)

  const allRooms = selectedCase?.rooms ?? []
  const allClues = allRooms.flatMap(r => r.clues)
  const allCharacters = selectedCase?.characters ?? []
  const archive = selectedCase?.archive ?? []
  const documents = selectedCase?.documents ?? []

  const tabLabel = (key: Tab): string => {
    const map: Record<Tab, TranslationKey> = {
      evidence: 'evidence_tab',
      archive: 'archive_tab',
      dossiers: 'dossiers_tab',
      documents: 'documents_tab',
      board: 'board_tab',
    }
    return t(map[key])
  }

  const archiveResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const words = searchQuery.toLowerCase().split(/\s+/).filter(Boolean)
    return archive.filter(entry =>
      words.some(w => entry.tags.some(t => t.toLowerCase().includes(w) || w.includes(t.toLowerCase())))
    )
  }, [searchQuery, archive])

  const documentResults = useMemo(() => {
    if (!searchQuery.trim()) return documents
    const words = searchQuery.toLowerCase().split(/\s+/).filter(Boolean)
    return documents.filter(doc =>
      words.some(w => doc.tags.some(t => t.toLowerCase().includes(w) || w.includes(t.toLowerCase())))
    )
  }, [searchQuery, documents])

  const examinedClueList = useMemo(
    () => examinedClues.map(id => allClues.find(c => c.id === id)).filter(Boolean),
    [examinedClues, allClues]
  )

  const handleClueClick = (clueId: string) => {
    setSelectedClueId(prev => prev === clueId ? null : clueId)
  }

  const handleCharacterClick = (charId: string) => {
    if (selectedClueId) {
      addConnection({ clueId: selectedClueId, characterId: charId })
      setSelectedClueId(null)
    }
  }

  const handleRemoveConnection = (clueId: string, charId: string) => {
    removeConnection(clueId, charId)
  }

  const canAccuse = connections.length >= 2

  const tabs: Tab[] = ['evidence', 'archive', 'dossiers', 'documents', 'board']

  return (
    <div dir={dir} className="flex flex-col" style={{ background: 'var(--desk)', minHeight: 'calc(100vh - 48px)' }}>
      <div
        className="flex overflow-x-auto no-wrap border-b sticky top-0 z-10"
        style={{ borderColor: 'var(--ink2)', background: 'var(--desk)' }}
      >
        {tabs.map(tabKey => (
          <button
            key={tabKey}
            onClick={() => setTab(tabKey)}
            className="flex-shrink-0 px-3 md:px-4 py-2 stamped text-xs uppercase tracking-wider transition-all whitespace-nowrap min-h-[44px]"
            style={{
              color: tab === tabKey ? 'var(--paper2)' : 'var(--ink3)',
              borderBottom: tab === tabKey ? '2px solid var(--paper2)' : '2px solid transparent',
              background: tab === tabKey ? 'var(--bg2)' : 'transparent',
            }}
          >
            {tabLabel(tabKey)}
          </button>
        ))}
        {canAccuse && (
          <button
            onClick={() => setFlowState('ACCUSATION')}
            className="stamp stamp-red ml-auto my-1 cursor-pointer hover:opacity-100 transition-opacity min-h-[44px]"
            style={{ background: 'transparent' }}
          >
            {t('warrant_header')}
          </button>
        )}
      </div>

      <div className="flex-1 p-3 md:p-4 overflow-y-auto">
        {tab === 'evidence' && (
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="stamped text-xs mb-2" style={{ color: 'var(--ink3)' }}>
                {t('search_label')}
              </div>
              <div className="flex gap-2 mb-3">
                <input
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent border-b outline-none mono text-xs pb-1"
                  style={{ borderColor: 'var(--ink4)', color: 'var(--paper2)' }}
                  placeholder={t('search_placeholder')}
                />
                <Button variant="stamp-blue">{t('search_btn')}</Button>
              </div>

              <div className="space-y-2 max-h-80 overflow-y-auto">
                {archiveResults.length === 0 && searchQuery.trim() && (
                  <p className="hand text-sm" style={{ color: 'var(--ink3)' }}>{t('no_results')}</p>
                )}
                {archiveResults.map(entry => (
                  <PaperCard key={entry.id} className="p-3">
                    <h4 className={`${locale === 'ar' ? 'arabic' : 'serif'} text-sm font-bold`} style={{ color: 'var(--ink)' }}>
                      {locale === 'en' ? entry.title : entry.titleAr}
                    </h4>
                    <pre className="mono text-xs mt-1 whitespace-pre-wrap leading-relaxed" style={{ color: 'var(--ink2)', fontSize: '0.6rem' }}>
                      {locale === 'en' ? entry.content : entry.contentAr}
                    </pre>
                    {entry.suggestedQuestions && entry.suggestedQuestions.length > 0 && (
                      <div className="mt-2 pt-2" style={{ borderTop: '1px dashed var(--ink4)' }}>
                        <div className="stamped text-xs mb-1" style={{ color: 'var(--green)' }}>
                          {t('suggested_questions')}
                        </div>
                        <div className="space-y-1">
                          {(locale === 'en' ? entry.suggestedQuestions : entry.suggestedQuestionsAr ?? entry.suggestedQuestions).map((q, qi) => (
                            <p key={qi} className="hand text-xs" style={{ color: 'var(--ink3)' }}>
                              • {q}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </PaperCard>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <div className="paper-dark p-2 mb-3" style={{ borderRadius: 4 }}>
                <div className="stamped text-xs mb-1" style={{ color: 'var(--ink3)' }}>
                  SCENE OVERVIEW
                </div>
                <div className="flex flex-wrap gap-1">
                  {allRooms.map(r => {
                    const examinedInRoom = r.clues.some(c => examinedClues.includes(c.id))
                    const totalInRoom = r.clues.length
                    const examinedCountInRoom = r.clues.filter(c => examinedClues.includes(c.id)).length
                    return (
                      <div
                        key={r.id}
                        className="px-2 py-0.5 mono text-xs"
                        style={{
                          background: examinedInRoom ? 'var(--gold)' : 'var(--ink3)',
                          color: examinedInRoom ? 'var(--ink)' : 'var(--paper3)',
                          borderRadius: 2,
                        }}
                      >
                        {locale === 'en' ? r.name : r.nameAr} ({examinedCountInRoom}/{totalInRoom})
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="stamped text-xs mb-2" style={{ color: 'var(--ink3)' }}>
                {t('examined_count')}
              </div>
              {examinedClueList.length === 0 && (
                <p className="hand text-sm" style={{ color: 'var(--ink3)' }}>
                  {locale === 'en'
                    ? 'Waiting for your partner to examine evidence...'
                    : 'في انتظار فحص شريكك للأدلة...'}
                </p>
              )}
              <div className="space-y-2">
                {examinedClueList.map(clue => {
                  if (!clue) return null
                  const room = allRooms.find(r => r.clues.some(c => c.id === clue.id))
                  return (
                    <PaperCard key={clue.id} className="p-3">
                      <div className={`${locale === 'ar' ? 'arabic' : 'serif'} text-sm font-bold`} style={{ color: 'var(--ink)' }}>
                        {locale === 'en' ? clue.name : clue.nameAr}
                      </div>
                      {room && (
                        <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
                          {locale === 'en' ? room.name : room.nameAr}
                        </div>
                      )}
                      <p className="hand text-xs mt-1" style={{ color: 'var(--ink4)' }}>
                        {locale === 'en'
                          ? 'Your partner has examined this. Ask them to describe it.'
                          : 'شريكك فحص هذا. اطلب منه وصفه.'}
                      </p>
                    </PaperCard>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        {tab === 'archive' && (
          <div>
            <div className="flex gap-2 mb-3">
              <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-b outline-none mono text-xs pb-1"
                style={{ borderColor: 'var(--ink4)', color: 'var(--paper2)' }}
                placeholder={t('search_placeholder')}
              />
              <Button variant="stamp-blue">{t('search_btn')}</Button>
            </div>
            <div className="space-y-2">
              {(searchQuery.trim() ? archiveResults : archive).map(entry => (
                <details key={entry.id} className="paper">
                  <summary className="p-3 cursor-pointer stamped text-xs" style={{ color: 'var(--ink)' }}>
                    {locale === 'en' ? entry.title : entry.titleAr}
                  </summary>
                  <div className="p-3 pt-0">
                    <pre className="mono text-xs whitespace-pre-wrap leading-relaxed" style={{ color: 'var(--ink2)', fontSize: '0.6rem' }}>
                      {locale === 'en' ? entry.content : entry.contentAr}
                    </pre>
                    {entry.suggestedQuestions && entry.suggestedQuestions.length > 0 && (
                      <div className="mt-2 pt-2" style={{ borderTop: '1px dashed var(--ink4)' }}>
                        <div className="stamped text-xs mb-1" style={{ color: 'var(--green)' }}>
                          {t('suggested_questions')}
                        </div>
                        <div className="space-y-1">
                          {(locale === 'en' ? entry.suggestedQuestions : entry.suggestedQuestionsAr ?? entry.suggestedQuestions).map((q, qi) => (
                            <p key={qi} className="hand text-xs" style={{ color: 'var(--ink3)' }}>
                              • {q}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
          </div>
        )}

        {tab === 'dossiers' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {allCharacters.map(ch => (
              <PaperCard key={ch.id} tilt={1} className="p-4">
                <div className="flex gap-3" style={{ flexDirection: locale === 'ar' ? 'row-reverse' : 'row' }}>
                  <div
                    className="w-20 h-24 flex-shrink-0 flex items-center justify-center stamped text-xs"
                    style={{ background: 'var(--paper3)', color: 'var(--ink3)', border: '1px solid var(--ink4)' }}
                  >
                    PHOTO
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className={`${locale === 'ar' ? 'arabic' : 'serif'} text-base font-bold`} style={{ color: 'var(--ink)' }}>
                          {locale === 'en' ? ch.name : ch.nameAr}
                        </h3>
                        <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
                          {locale === 'en' ? ch.role : ch.roleAr}
                        </div>
                      </div>
                      <Stamp text={t('classified_stamp')} variant="red" rotate={8} />
                    </div>

                    <div className="mt-2">
                      <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
                        {t('psych_profile')}
                      </div>
                      <p className="hand text-xs">{locale === 'en' ? ch.psychProfile : ch.psychProfileAr}</p>
                    </div>

                    <div className="mt-2">
                      <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
                        {t('background')}
                      </div>
                      <p className="mono text-xs">{locale === 'en' ? ch.secretBackground : ch.secretBackgroundAr}</p>
                    </div>

                    <div className="mt-2">
                      <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
                        {t('alibi_label')}
                      </div>
                      <p className="hand text-xs">{locale === 'en' ? ch.alibi : ch.alibiAr}</p>
                    </div>

                    <div className="mt-2">
                      <Stamp text={t('motive_redacted')} variant="blue" rotate={0} />
                    </div>
                  </div>
                </div>
              </PaperCard>
            ))}
          </div>
        )}

        {tab === 'documents' && (
          <div>
            <div className="flex gap-2 mb-3">
              <input
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent border-b outline-none mono text-xs pb-1"
                style={{ borderColor: 'var(--ink4)', color: 'var(--paper2)' }}
                placeholder={t('search_placeholder')}
              />
              <Button variant="stamp-blue">{t('search_btn')}</Button>
            </div>
            <div className="space-y-2">
              {(searchQuery.trim() ? documentResults : documents).map(doc => (
                <details key={doc.id} className="paper">
                  <summary className="p-3 cursor-pointer">
                    <div className="flex items-center gap-2">
                      <span className={`${locale === 'ar' ? 'arabic' : 'serif'} text-sm font-bold`} style={{ color: 'var(--ink)' }}>
                        {locale === 'en' ? doc.title : doc.titleAr}
                      </span>
                      <span className="stamped text-xs uppercase" style={{ color: 'var(--ink4)' }}>
                        [{doc.type}]
                      </span>
                    </div>
                  </summary>
                  <pre className="p-3 pt-0 mono text-xs whitespace-pre-wrap leading-relaxed" style={{ color: 'var(--ink2)', fontSize: '0.6rem' }}>
                    {locale === 'en' ? doc.content : doc.contentAr}
                  </pre>
                </details>
              ))}
            </div>
          </div>
        )}

        {tab === 'board' && (
          <div className="corkboard p-4 md:p-6 rounded min-h-[300px] md:min-h-[400px] relative">
            <p className="stamped text-xs mb-4" style={{ color: 'var(--manila)' }}>
              {locale === 'en'
                ? 'Click a clue, then click a character to connect them.'
                : 'انقر على دليل، ثم انقر على مشتبه به للربط.'}
            </p>

            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div>
                <div className="stamped text-xs mb-2" style={{ color: 'var(--manila)' }}>
                  {t('evidence_tab')}
                </div>
                <div className="space-y-2">
                  {examinedClueList.map(clue => {
                    if (!clue) return null
                    return (
                      <button
                        key={clue.id}
                        onClick={() => handleClueClick(clue.id)}
                        className="paper px-3 py-1.5 mono text-xs cursor-pointer transition-all block text-left"
                        style={{
                          filter: selectedClueId === clue.id ? 'brightness(1.3)' : undefined,
                          border: selectedClueId === clue.id ? '2px solid var(--red)' : '2px solid transparent',
                        }}
                      >
                        {locale === 'en' ? clue.name : clue.nameAr}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div>
                <div className="stamped text-xs mb-2" style={{ color: 'var(--manila)' }}>
                  {t('dossiers_tab')}
                </div>
                <div className="space-y-2">
                  {allCharacters.map(ch => (
                    <button
                      key={ch.id}
                      onClick={() => handleCharacterClick(ch.id)}
                      className="paper-dark px-3 py-1.5 mono text-xs cursor-pointer transition-all block hover:brightness-125"
                      style={{ color: 'var(--paper2)' }}
                    >
                      {locale === 'en' ? ch.name : ch.nameAr}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {connections.length > 0 && (
              <div className="mt-4">
                <div className="stamped text-xs mb-2" style={{ color: 'var(--manila)' }}>
                  {t('connections_hint')} ({connections.length})
                </div>
                <div className="space-y-1">
                  {connections.map((c, idx) => {
                    const clue = allClues.find(cl => cl.id === c.clueId)
                    const ch = allCharacters.find(cr => cr.id === c.characterId)
                    return (
                      <button
                        key={idx}
                        onClick={() => handleRemoveConnection(c.clueId, c.characterId)}
                        className="block mono text-xs cursor-pointer hover:opacity-60 transition-opacity"
                        style={{ color: 'var(--red)' }}
                      >
                        {clue ? (locale === 'en' ? clue.name : clue.nameAr) : c.clueId} → {ch ? (locale === 'en' ? ch.name : ch.nameAr) : c.characterId} ✕
                      </button>
                    )
                  })}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {flowState === 'ACCUSATION' && <AccusationScreen />}
    </div>
  )
}
