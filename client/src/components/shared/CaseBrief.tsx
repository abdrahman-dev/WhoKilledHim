import { motion } from 'framer-motion'
import { useGameStore } from '../../store/gameStore'
import { useTranslation } from '../../i18n/useTranslation'
import Stamp from '../ui/Stamp'

export default function CaseBrief() {
  const { t, locale, dir } = useTranslation()
  const selectedCase = useGameStore(s => s.selectedCase)
  const role = useGameStore(s => s.role)
  const setFlowState = useGameStore(s => s.setFlowState)

  if (!selectedCase) return null

  const handleStart = () => {
    setFlowState(role === 'investigator' ? 'INVESTIGATION' : 'ANALYSIS')
  }

  const handleBack = () => {
    setFlowState('CASE_SELECT')
  }

  return (
    <motion.div
      dir={dir}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center p-3 md:p-6"
      style={{ background: 'var(--desk)' }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15 }}
        className="paper p-5 md:p-8 max-w-2xl w-full"
        style={{ boxShadow: 'var(--shadow-lg)' }}
      >
        <div className="flex items-center gap-3 mb-5">
          <span className="text-2xl">📋</span>
          <div>
            <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
              {t('case_brief')}
            </div>
            <h2 className={`${locale === 'ar' ? 'arabic' : 'serif'} text-xl font-bold`} style={{ color: 'var(--ink)' }}>
              {locale === 'en' ? selectedCase.title : selectedCase.titleAr}
            </h2>
          </div>
          <span className="ml-auto">
            <Stamp
              text={t(selectedCase.difficulty === 'easy' ? 'difficulty_easy' : selectedCase.difficulty === 'medium' ? 'difficulty_medium' : 'difficulty_hard')}
              variant="blue"
              rotate={-3}
            />
          </span>
        </div>

        <div className="paper-dark p-4 mb-4" style={{ borderRadius: 4 }}>
          <div className="stamped text-xs mb-1" style={{ color: 'var(--ink3)' }}>
            {t('current_room')} {locale === 'en' ? selectedCase.setting : selectedCase.settingAr}
          </div>
          <p className={`${locale === 'ar' ? 'arabic' : 'serif'} text-sm leading-relaxed`} style={{ color: 'var(--ink)' }}>
            {locale === 'en' ? selectedCase.brief : selectedCase.briefAr}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="paper p-3 text-center">
            <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
              {t('current_room').replace(':', '')}
            </div>
            <div className={`${locale === 'ar' ? 'arabic' : 'serif'} text-sm font-bold mt-1`} style={{ color: 'var(--ink)' }}>
              {selectedCase.rooms.length}
            </div>
          </div>
          <div className="paper p-3 text-center">
            <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
              {t('items_in_room').replace(':', '')}
            </div>
            <div className={`${locale === 'ar' ? 'arabic' : 'serif'} text-sm font-bold mt-1`} style={{ color: 'var(--ink)' }}>
              {selectedCase.rooms.reduce((s, r) => s + r.clues.length, 0)}
            </div>
          </div>
          <div className="paper p-3 text-center">
            <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
              {t('dossiers_tab')}
            </div>
            <div className={`${locale === 'ar' ? 'arabic' : 'serif'} text-sm font-bold mt-1`} style={{ color: 'var(--ink)' }}>
              {selectedCase.characters.length}
            </div>
          </div>
          <div className="paper p-3 text-center">
            <div className="stamped text-xs" style={{ color: 'var(--ink3)' }}>
              {t('archive_tab')}
            </div>
            <div className={`${locale === 'ar' ? 'arabic' : 'serif'} text-sm font-bold mt-1`} style={{ color: 'var(--ink)' }}>
              {selectedCase.archive.length} + {selectedCase.documents.length}
            </div>
          </div>
        </div>

        {role && (
          <div className="paper-dark p-3 mb-5" style={{ borderRadius: 4 }}>
            <div className="flex items-center gap-2">
              <Stamp
                text={role === 'investigator' ? t('active_duty_stamp') : t('dossier_header')}
                variant={role === 'investigator' ? 'green' : 'blue'}
                rotate={-2}
              />
              <span className={`${locale === 'ar' ? 'arabic' : 'serif'} text-sm font-bold`} style={{ color: 'var(--ink)' }}>
                {t(role)}
              </span>
            </div>
            <p className="hand text-sm mt-1" style={{ color: 'var(--ink3)' }}>
              {t(`${role}_desc`)}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleStart}
            className="stamp stamp-green flex-1 min-h-[44px] text-center cursor-pointer hover:opacity-100 transition-opacity"
            style={{ background: 'transparent', fontSize: '0.7rem' }}
          >
            {t('brief_start')}
          </button>
          <button
            onClick={handleBack}
            className="stamp flex-1 min-h-[44px] text-center cursor-pointer hover:opacity-100 transition-opacity"
            style={{
              background: 'transparent',
              borderColor: 'var(--ink3)',
              color: 'var(--ink3)',
            }}
          >
            {t('brief_skip')}
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
