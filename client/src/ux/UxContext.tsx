import { useEffect } from 'react'
import { useGameStore } from '../store/gameStore'
import { useAudioStore } from '../store/audioStore'
import { useTranslation } from '../i18n/useTranslation'
import Stamp from '../components/ui/Stamp'

export default function UxContext() {
  const { t, locale, dir } = useTranslation()
  const flowState = useGameStore(s => s.flowState)
  const role = useGameStore(s => s.role)
  const selectedCase = useGameStore(s => s.selectedCase)
  const playerName = useGameStore(s => s.playerName)
  const examinedClues = useGameStore(s => s.examinedClues)
  const connections = useGameStore(s => s.connections)
  const timerSeconds = useGameStore(s => s.timerSeconds)
  const timerActive = useGameStore(s => s.timerActive)
  const timerExpired = useGameStore(s => s.timerExpired)
  const setFlowState = useGameStore(s => s.setFlowState)
  const setLocale = useGameStore(s => s.setLocale)
  const startTimer = useGameStore(s => s.startTimer)
  const isMuted = useAudioStore(s => s.isMuted)
  const toggleMute = useAudioStore(s => s.toggleMute)

  useEffect(() => {
    document.documentElement.dir = dir
    document.documentElement.lang = locale
  }, [dir, locale])

  if (flowState === 'LANDING') return null

  const allClues = selectedCase?.rooms.flatMap(r => r.clues) ?? []
  const totalClues = allClues.filter(c => c.isSignificant).length
  const examinedCount = examinedClues.filter(id =>
    allClues.some(c => c.id === id && c.isSignificant)
  ).length
  const connectionsCount = connections.length

  const minutes = Math.floor(timerSeconds / 60)
  const secs = timerSeconds % 60
  const timerStr = `${minutes}:${secs.toString().padStart(2, '0')}`
  const urgent = timerSeconds <= 60 && timerActive

  const isActive = flowState === 'INVESTIGATION' || flowState === 'ANALYSIS'

  return (
    <div
      dir={dir}
      className="w-full sticky top-0 z-40"
      style={{ background: '#0f1210', borderBottom: '1px solid #2a2c28' }}
    >
      <div className="flex flex-wrap items-center gap-1 px-2 py-1 text-xs stamped">
        {isActive && (
          <button
            onClick={() => setFlowState('CASE_SELECT')}
            className="stamp stamp-red cursor-pointer hover:opacity-100 transition-opacity"
            style={{ background: 'transparent' }}
          >
            {t('back_to_cases')}
          </button>
        )}

        <span className="ml-1 truncate max-w-[120px] sm:max-w-[200px]" style={{ color: 'var(--paper2)', fontWeight: 600 }}>
          {selectedCase
            ? (locale === 'en' ? selectedCase.title : selectedCase.titleAr)
            : ''}
        </span>

        <span className="hidden sm:inline ml-auto">
          {role && (
            <span className={`stamp ${role === 'investigator' ? 'stamp-green' : 'stamp-blue'}`}>
              {role === 'investigator' ? t('active_duty_stamp') : t('dossier_header')}
            </span>
          )}
        </span>

        {isActive && (
          <span className="flex gap-0.5 items-center ml-1">
            {Array.from({ length: totalClues }).map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-2 rounded-full inline-block"
                style={{
                  background: i < examinedCount ? 'var(--green)' : 'var(--ink3)',
                }}
              />
            ))}
            <span className="ml-0.5" style={{ color: 'var(--ink4)', fontSize: '0.5rem' }}>
              {role === 'investigator' ? `${examinedCount}/${totalClues}` : `${connectionsCount}`}
            </span>
          </span>
        )}

        <span className="hidden sm:inline ml-1 truncate max-w-[100px]" style={{ color: 'var(--ink4)' }}>
          {t('agent_label')} {playerName}
        </span>

        {!timerActive && !timerExpired && (
          <button
            onClick={startTimer}
            className="stamp stamp-blue cursor-pointer hover:opacity-100 transition-opacity"
            style={{ background: 'transparent' }}
          >
            {t('start_timer')}
          </button>
        )}

        {timerActive && (
          <span
            className="mono text-xs"
            style={{ color: urgent ? 'var(--red)' : 'var(--paper2)' }}
          >
            ⏱ {timerStr}
          </span>
        )}

        {timerExpired && (
          <Stamp text={t('time_expired')} variant="red" rotate={0} />
        )}

        <button
          onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
          className="stamp cursor-pointer hover:opacity-100 transition-opacity"
          style={{
            background: 'transparent',
            border: '2px solid var(--ink4)',
            color: 'var(--ink4)',
          }}
        >
          {t('language_toggle')}
        </button>

        <button
          onClick={toggleMute}
          className="stamp cursor-pointer hover:opacity-100 transition-opacity"
          style={{
            background: 'transparent',
            border: '2px solid var(--ink4)',
            color: 'var(--ink4)',
          }}
        >
          {isMuted ? t('unmute') : t('mute')}
        </button>
      </div>

      {timerExpired && (
        <div className="w-full text-center py-2" style={{ background: 'rgba(107,32,32,0.15)' }}>
          <Stamp text={t('time_expired')} variant="red" rotate={0} />
        </div>
      )}
    </div>
  )
}
