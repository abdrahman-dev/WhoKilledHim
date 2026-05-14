import { useState } from 'react'
import { motion } from 'framer-motion'
import { useGameStore } from '../../store/gameStore'
import { useAudioStore } from '../../store/audioStore'
import { useTranslation } from '../../i18n/useTranslation'
import Stamp from '../ui/Stamp'
import Button from '../ui/Button'

export default function Landing() {
  const { t, locale, dir } = useTranslation()
  const setLocale = useGameStore(s => s.setLocale)
  const setPlayerName = useGameStore(s => s.setPlayerName)
  const setRole = useGameStore(s => s.setRole)
  const setFlowState = useGameStore(s => s.setFlowState)
  const playStamp = useAudioStore(s => s.playStamp)
  const startAmbient = useAudioStore(s => s.startAmbient)

  const [name, setName] = useState('')
  const [selectedRole, setSelectedRole] = useState<'investigator' | 'analyst' | null>(null)

  const canSubmit = name.trim().length > 0 && selectedRole !== null

  const handleSubmit = () => {
    if (!canSubmit || !selectedRole) return
    setPlayerName(name.trim())
    setRole(selectedRole)
    setFlowState('CASE_SELECT')
    playStamp()
    startAmbient()
  }

  return (
    <div
      dir={dir}
      className="min-h-screen flex items-center justify-center p-4 md:p-6"
      style={{ background: 'var(--desk)' }}
    >
      <button
        onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
        className="stamp absolute top-3 right-3 cursor-pointer hover:opacity-100 transition-opacity"
        style={{
          background: 'transparent',
          borderColor: 'var(--ink4)',
          color: 'var(--ink4)',
        }}
      >
        {t('language_toggle')}
      </button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="paper tilt-2 p-5 md:p-8 w-full max-w-md mx-auto"
        style={{ boxShadow: 'var(--shadow-lg)' }}
      >
        <div
          className="text-center mb-1 stamped tracking-widest text-xs"
          style={{ color: 'var(--ink3)' }}
        >
          {t('division_header')}
        </div>

        <h1
          className={`${locale === 'ar' ? 'arabic' : 'serif'} text-3xl md:text-4xl text-center mb-4 blink-cursor`}
          style={{ color: 'var(--ink)' }}
        >
          {t('game_title')}
        </h1>

        <hr className="mb-5 opacity-30" style={{ borderColor: 'var(--ink3)' }} />

        <label className="stamped text-xs block mb-1" style={{ color: 'var(--ink3)' }}>
          {t('enter_codename')}
        </label>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full bg-transparent border-b py-1 outline-none serif text-lg mb-5"
          style={{ borderColor: 'var(--ink2)', color: 'var(--ink)' }}
        />

        <div className="text-center stamped text-xs mb-3" style={{ color: 'var(--ink3)' }}>
          {t('choose_role')}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          {(['investigator', 'analyst'] as const).map(role => {
            const isSelected = selectedRole === role
            return (
              <motion.button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`flex-1 paper p-4 text-left cursor-pointer transition-all ${
                  isSelected ? 'ring-2 ring-[var(--red)]' : ''
                }`}
                style={{
                  boxShadow: isSelected ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                  border: isSelected ? '2px solid var(--red)' : '2px solid transparent',
                }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`${locale === 'ar' ? 'arabic' : 'serif'} text-base font-bold`} style={{ color: 'var(--ink)' }}>
                    {t(role)}
                  </span>
                  <Stamp
                    text={isSelected ? t('active_duty_stamp') : t('classified_stamp')}
                    variant={isSelected ? 'green' : 'red'}
                    rotate={-4}
                  />
                </div>
                <p className="hand text-sm" style={{ color: 'var(--ink3)' }}>
                  {t(`${role}_desc`)}
                </p>
              </motion.button>
            )
          })}
        </div>

        <Button
          variant="stamp-red"
          fullWidth
          disabled={!canSubmit}
          onClick={handleSubmit}
          style={{ background: canSubmit ? 'transparent' : undefined }}
        >
          {t('start_investigation')}
        </Button>
      </motion.div>
    </div>
  )
}
