import { Component, type ReactNode, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useGameStore } from './store/gameStore'
import { useAudioStore } from './store/audioStore'
import UxContext from './ux/UxContext'
import Landing from './components/landing/Landing'
import CaseSelect from './components/shared/CaseSelect'
import CrimeScene from './components/investigator/CrimeScene'
import AnalystDashboard from './components/analyst/AnalystDashboard'
import ResultScreen from './components/shared/ResultScreen'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4" style={{ background: 'var(--desk)' }}>
          <div className="paper p-6 max-w-md w-full text-center">
            <h2 className="stamped text-lg mb-4" style={{ color: 'var(--red)' }}>
              FILE CORRUPTED
            </h2>
            <p className="serif text-sm mb-6" style={{ color: 'var(--ink)' }}>
              An error occurred in the case files.
            </p>
            <button
              onClick={() => {
                localStorage.removeItem('mq2_state')
                window.location.reload()
              }}
              className="stamp stamp-red cursor-pointer hover:opacity-100 transition-opacity"
              style={{ background: 'transparent' }}
            >
              CLEAR & RESTART
            </button>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

function TimerManager() {
  const timerActive = useGameStore(s => s.timerActive)
  const tickTimer = useGameStore(s => s.tickTimer)

  useEffect(() => {
    if (!timerActive) return
    const interval = setInterval(() => tickTimer(), 1000)
    return () => clearInterval(interval)
  }, [timerActive, tickTimer])

  return null
}

function InteractionHandler() {
  const startedRef = useRef(false)
  const startAmbient = useAudioStore(s => s.startAmbient)

  useEffect(() => {
    const handler = () => {
      if (startedRef.current) return
      startedRef.current = true
      startAmbient()
    }
    document.addEventListener('mousedown', handler, { once: true })
    document.addEventListener('keydown', handler, { once: true })
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('keydown', handler)
    }
  }, [startAmbient])

  return null
}

function FlowRouter() {
  const flowState = useGameStore(s => s.flowState)
  const selectedCase = useGameStore(s => s.selectedCase)
  const setFlowState = useGameStore(s => s.setFlowState)

  useEffect(() => {
    if ((flowState === 'INVESTIGATION' || flowState === 'ANALYSIS') && !selectedCase) {
      setFlowState('LANDING')
    }
  }, [flowState, selectedCase, setFlowState])

  const variants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={flowState}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.25 }}
      >
        {flowState === 'LANDING' && <Landing />}
        {flowState === 'CASE_SELECT' && <CaseSelect />}
        {flowState === 'INVESTIGATION' && <CrimeScene />}
        {flowState === 'ANALYSIS' && <AnalystDashboard />}
        {flowState === 'RESULT' && <ResultScreen />}
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  const locale = useGameStore(s => s.locale)
  const dir = locale === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.dir = dir
    document.documentElement.lang = locale
  }, [dir, locale])

  return (
    <ErrorBoundary>
      <TimerManager />
      <InteractionHandler />
      <div className="min-h-screen" style={{ background: 'var(--desk)' }}>
        <UxContext />
        <FlowRouter />
      </div>
    </ErrorBoundary>
  )
}
