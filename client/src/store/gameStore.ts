import { create } from 'zustand'
import type { GameState, FlowState, Role, Case, Connection } from '../types/game'
import { isValidTransition } from '../ux/UxFlow'

const STORAGE_KEY = 'mq2_state'

const defaultState: GameState = {
  flowState: 'LANDING',
  locale: 'en',
  playerName: '',
  role: null,
  selectedCase: null,
  currentRoomId: null,
  examinedClues: [],
  approachedCharacters: [],
  searchQuery: '',
  connections: [],
  notes: '',
  accusedCharacterId: null,
  accusationReasoning: '',
  isCorrect: null,
  timerSeconds: 1800,
  timerActive: false,
  timerExpired: false,
}

const validFlowStates: FlowState[] = ['LANDING', 'CASE_SELECT', 'INVESTIGATION', 'ANALYSIS', 'ACCUSATION', 'RESULT']

function validateSavedState(data: Record<string, unknown>): GameState | null {
  if (typeof data !== 'object' || data === null) return null
  if (!('flowState' in data) || !validFlowStates.includes(data.flowState as FlowState)) return null
  const flowState = data.flowState as FlowState
  if (['INVESTIGATION', 'ANALYSIS', 'ACCUSATION'].includes(flowState)) {
    const c = data.selectedCase as Record<string, unknown> | null
    if (!c || !Array.isArray(c.rooms) || c.rooms.length === 0) return null
  }
  return data as unknown as GameState
}

function loadState(): GameState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return { ...defaultState }
    const parsed = JSON.parse(raw) as Record<string, unknown>
    const validated = validateSavedState(parsed)
    if (validated) return validated
    localStorage.removeItem(STORAGE_KEY)
    return { ...defaultState }
  } catch {
    localStorage.removeItem(STORAGE_KEY)
    return { ...defaultState }
  }
}

let debounceTimer: ReturnType<typeof setTimeout> | null = null

function persistState(state: GameState) {
  if (debounceTimer) clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {
      // silently fail
    }
  }, 300)
}

interface GameActions {
  setFlowState: (state: FlowState) => void
  setLocale: (locale: 'en' | 'ar') => void
  setRole: (role: Role) => void
  setPlayerName: (name: string) => void
  selectCase: (c: Case) => void
  enterRoom: (roomId: string) => void
  examineClue: (clueId: string) => void
  approachCharacter: (charId: string) => void
  setSearchQuery: (q: string) => void
  addConnection: (c: Connection) => void
  removeConnection: (clueId: string, characterId: string) => void
  updateNotes: (text: string) => void
  submitAccusation: (characterId: string, reasoning: string) => void
  resetGame: () => void
  startTimer: () => void
  pauseTimer: () => void
  tickTimer: () => void
  expireTimer: () => void
}

export const useGameStore = create<GameState & GameActions>()((set, get) => ({
  ...loadState(),

  setFlowState: (to: FlowState) => {
    const { flowState: from } = get()
    if (isValidTransition(from, to)) {
      const s = { ...get(), flowState: to }
      set(s)
      persistState(s)
    }
  },

  setLocale: (locale: 'en' | 'ar') => {
    const s = { ...get(), locale }
    set(s)
    persistState(s)
  },

  setRole: (role: Role) => {
    const s = { ...get(), role }
    set(s)
    persistState(s)
  },

  setPlayerName: (name: string) => {
    const s = { ...get(), playerName: name }
    set(s)
    persistState(s)
  },

  selectCase: (c: Case) => {
    const s = {
      ...get(),
      selectedCase: c,
      currentRoomId: c.startingRoom,
      examinedClues: [],
      approachedCharacters: [],
      searchQuery: '',
      connections: [],
      notes: '',
      accusedCharacterId: null,
      accusationReasoning: '',
      isCorrect: null,
      timerSeconds: 1800,
      timerActive: false,
      timerExpired: false,
    }
    set(s)
    persistState(s)
  },

  enterRoom: (roomId: string) => {
    const s = { ...get(), currentRoomId: roomId }
    set(s)
    persistState(s)
  },

  examineClue: (clueId: string) => {
    const { examinedClues } = get()
    if (!examinedClues.includes(clueId)) {
      const s = { ...get(), examinedClues: [...examinedClues, clueId] }
      set(s)
      persistState(s)
    }
  },

  approachCharacter: (charId: string) => {
    const { approachedCharacters } = get()
    if (!approachedCharacters.includes(charId)) {
      const s = { ...get(), approachedCharacters: [...approachedCharacters, charId] }
      set(s)
      persistState(s)
    }
  },

  setSearchQuery: (q: string) => {
    const s = { ...get(), searchQuery: q }
    set(s)
    persistState(s)
  },

  addConnection: (c: Connection) => {
    const { connections } = get()
    const exists = connections.some(ex => ex.clueId === c.clueId && ex.characterId === c.characterId)
    if (!exists) {
      const s = { ...get(), connections: [...connections, c] }
      set(s)
      persistState(s)
    }
  },

  removeConnection: (clueId: string, characterId: string) => {
    const { connections } = get()
    const s = {
      ...get(),
      connections: connections.filter(c => c.clueId !== clueId || c.characterId !== characterId),
    }
    set(s)
    persistState(s)
  },

  updateNotes: (text: string) => {
    const s = { ...get(), notes: text }
    set(s)
    persistState(s)
  },

  submitAccusation: (characterId: string, reasoning: string) => {
    const { selectedCase } = get()
    const isCorrect = selectedCase?.killerId === characterId
    const s = {
      ...get(),
      accusedCharacterId: characterId,
      accusationReasoning: reasoning,
      isCorrect,
      flowState: 'RESULT' as FlowState,
    }
    set(s)
    persistState(s)
  },

  resetGame: () => {
    localStorage.removeItem(STORAGE_KEY)
    set({ ...defaultState })
  },

  startTimer: () => {
    const s = { ...get(), timerActive: true, timerExpired: false }
    set(s)
    persistState(s)
  },

  pauseTimer: () => {
    const s = { ...get(), timerActive: false }
    set(s)
    persistState(s)
  },

  tickTimer: () => {
    const { timerSeconds, timerActive } = get()
    if (!timerActive) return
    if (timerSeconds <= 1) {
      const s = { ...get(), timerSeconds: 0, timerActive: false, timerExpired: true }
      set(s)
      persistState(s)
    } else {
      const s = { ...get(), timerSeconds: timerSeconds - 1 }
      set(s)
      persistState(s)
    }
  },

  expireTimer: () => {
    const s = { ...get(), timerExpired: true, timerActive: false }
    set(s)
    persistState(s)
  },
}))
