import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGameStore } from '../../store/gameStore'
import { useAudioStore } from '../../store/audioStore'
import { useTranslation } from '../../i18n/useTranslation'
import Stamp from '../ui/Stamp'
import PaperCard from '../ui/PaperCard'
import Button from '../ui/Button'
import { cases } from '../../data/caseRegistry'
import type { Case } from '../../types/game'

export default function CaseSelect() {
  const { t, locale, dir } = useTranslation()
  const role = useGameStore(s => s.role)
  const setFlowState = useGameStore(s => s.setFlowState)
  const selectCase = useGameStore(s => s.selectCase)
  const playStamp = useAudioStore(s => s.playStamp)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const handleOpen = (c: Case) => {
    selectCase(c)
    playStamp()
    if (role === 'investigator') {
      setFlowState('INVESTIGATION')
    } else {
      setFlowState('ANALYSIS')
    }
  }

  const difficultyBadge = (c: Case) => {
    const dots = c.difficulty === 'easy' ? '●○○' : c.difficulty === 'medium' ? '●●○' : '●●●'
    const key = `difficulty_${c.difficulty}` as const
    return `${dots} ${t(key)}`
  }

  return (
    <div dir={dir} className="min-h-screen p-3 md:p-5 pt-10" style={{ background: 'var(--desk)' }}>
      <Button variant="ghost" onClick={() => setFlowState('LANDING')} className="mb-3">
        {t('back_to_menu')}
      </Button>

      <PaperCard className="p-3 md:p-4 mb-5 inline-block" clip>
        <h2 className={`${locale === 'ar' ? 'arabic' : 'serif'} text-lg font-bold`} style={{ color: 'var(--ink)' }}>
          {t('select_case')}
        </h2>
      </PaperCard>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cases.map(c => {
          const isSelected = selectedId === c.id
          return (
            <PaperCard
              key={c.id}
              tilt={2}
              className="p-4 cursor-pointer"
              style={{
                boxShadow: isSelected ? 'var(--shadow-lg)' : 'var(--shadow-md)',
                border: isSelected ? '2px solid var(--blue)' : '2px solid transparent',
              }}
            >
              <div
                className="flex items-start justify-between mb-2"
                onClick={() => setSelectedId(c.id)}
              >
                <span className="mono text-xs" style={{ color: 'var(--ink3)' }}>
                  CASE-{String(cases.indexOf(c) + 1).padStart(2, '0')}
                </span>
                <Stamp text={t('confidential_stamp')} variant="red" rotate={-8} />
              </div>

              <div onClick={() => setSelectedId(c.id)}>
                <h3
                  className={`${locale === 'ar' ? 'arabic' : 'serif'} text-lg font-bold mb-1`}
                  style={{ color: 'var(--ink)' }}
                >
                  {locale === 'en' ? c.title : c.titleAr}
                </h3>

                <div className="stamped text-xs mb-1" style={{ color: 'var(--blue)' }}>
                  {difficultyBadge(c)}
                </div>

                <div className="stamped text-xs mb-1" style={{ color: 'var(--ink3)' }}>
                  {locale === 'en' ? c.setting : c.settingAr}
                </div>

                <p className="hand text-sm line-clamp-2" style={{ color: 'var(--ink2)' }}>
                  {locale === 'en' ? c.subtitle : c.subtitleAr}
                </p>
              </div>

              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4"
                  >
                    <Button
                      variant="stamp-blue"
                      fullWidth
                      onClick={() => handleOpen(c)}
                    >
                      {t('select_this_case')}
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </PaperCard>
          )
        })}
      </div>
    </div>
  )
}
