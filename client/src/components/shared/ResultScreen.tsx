import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useGameStore } from '../../store/gameStore'
import { useAudioStore } from '../../store/audioStore'
import { useTranslation } from '../../i18n/useTranslation'

export default function ResultScreen() {
  const { t, locale, dir } = useTranslation()
  const isCorrect = useGameStore(s => s.isCorrect)
  const selectedCase = useGameStore(s => s.selectedCase)
  const accusedCharacterId = useGameStore(s => s.accusedCharacterId)
  const connections = useGameStore(s => s.connections)
  const setFlowState = useGameStore(s => s.setFlowState)
  const playSuccess = useAudioStore(s => s.playSuccess)
  const playFail = useAudioStore(s => s.playFail)
  const stopAmbient = useAudioStore(s => s.stopAmbient)

  const hasPlayed = useRef(false)

  useEffect(() => {
    if (hasPlayed.current) return
    hasPlayed.current = true
    if (isCorrect) playSuccess()
    else playFail()
  }, [isCorrect, playSuccess, playFail])

  const killer = selectedCase?.characters.find(c => c.id === selectedCase?.killerId)
  const accused = selectedCase?.characters.find(c => c.id === accusedCharacterId)

  return (
    <motion.div
      dir={dir}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center p-4 md:p-6 overflow-y-auto"
      style={{
        background: isCorrect
          ? 'linear-gradient(135deg, #0a1a0a, #0d0f0e)'
          : 'linear-gradient(135deg, #1a0a0a, #0d0f0e)',
      }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0, rotate: -5 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        className="paper p-5 md:p-8 max-w-2xl w-full relative"
        style={{
          boxShadow: isCorrect
            ? '0 0 40px rgba(26,58,42,0.4), var(--shadow-lg)'
            : '0 0 40px rgba(107,32,32,0.4), var(--shadow-lg)',
        }}
      >
        <div
          className="stamp text-center mb-5"
          style={{
            fontSize: '2rem',
            transform: 'rotate(-15deg)',
            color: isCorrect ? 'var(--green)' : 'var(--red)',
            borderColor: isCorrect ? 'var(--green)' : 'var(--red)',
            opacity: 0.85,
          }}
        >
          {isCorrect ? t('case_closed') : t('case_open')}
        </div>

        <div className="mb-5">
          <p className="stamped text-xs mb-1" style={{ color: 'var(--ink3)' }}>
            {t('killer_identified')}
          </p>
          <p className={`${locale === 'ar' ? 'arabic' : 'serif'} text-2xl font-bold`} style={{ color: 'var(--ink)' }}>
            {locale === 'en' ? killer?.name : killer?.nameAr}
          </p>
          {!isCorrect && accused && (
            <p className="hand mt-1" style={{ color: 'var(--red)' }}>
              You accused: {locale === 'en' ? accused.name : accused.nameAr}
            </p>
          )}
        </div>

        <hr className="mb-4 opacity-30" style={{ borderColor: 'var(--ink3)' }} />

        <div className="mb-5">
          <p className="stamped text-xs mb-2" style={{ color: 'var(--ink3)' }}>
            {t('solution_label')}
          </p>
          <p className={`${locale === 'ar' ? 'arabic' : 'serif'} text-sm leading-relaxed whitespace-pre-line`} style={{ color: 'var(--ink)' }}>
            {locale === 'en' ? selectedCase?.solution : selectedCase?.solutionAr}
          </p>
        </div>

        {connections.length > 0 && (
          <div className="paper-dark p-3 mb-5" style={{ borderRadius: 4 }}>
            <p className="stamped text-xs mb-1" style={{ color: 'var(--ink3)' }}>
              CONNECTIONS
            </p>
            {connections.map((c, idx) => {
              const item = selectedCase?.rooms.flatMap(r => r.clues).find(cl => cl.id === c.clueId)
              const ch = selectedCase?.characters.find(ch => ch.id === c.characterId)
              return (
                <div key={idx} className="mono text-xs" style={{ color: 'var(--ink)' }}>
                  {item ? (locale === 'en' ? item.name : item.nameAr) : c.clueId} → {ch ? (locale === 'en' ? ch.name : ch.nameAr) : c.characterId}
                </div>
              )
            })}
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => { stopAmbient(); setFlowState('LANDING') }}
            className="stamp stamp-red flex-1 min-h-[44px] text-center cursor-pointer hover:opacity-100 transition-opacity"
            style={{ background: 'transparent' }}
          >
            {t('return_menu')}
          </button>
          <button
            onClick={() => setFlowState('CASE_SELECT')}
            className="stamp stamp-blue flex-1 min-h-[44px] text-center cursor-pointer hover:opacity-100 transition-opacity"
            style={{ background: 'transparent' }}
          >
            {t('play_again')}
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
