export type Role = 'investigator' | 'analyst'
export type Difficulty = 'easy' | 'medium' | 'hard'
export type FlowState =
  | 'LANDING'
  | 'CASE_SELECT'
  | 'BRIEF'
  | 'INVESTIGATION'
  | 'ANALYSIS'
  | 'ACCUSATION'
  | 'RESULT'

export interface Clue {
  id: string
  name: string
  nameAr: string
  digest: string
  digestAr: string
  observation: string
  observationAr: string
  revealsAfter?: string
}

export interface Character {
  id: string
  name: string
  nameAr: string
  role: string
  roleAr: string
  sceneObservation: string
  sceneObservationAr: string
  statement: string
  statementAr: string
  isLying?: boolean
  trueStatement?: string
  trueStatementAr?: string
  psychProfile: string
  psychProfileAr: string
  secretBackground: string
  secretBackgroundAr: string
  motive: string
  motiveAr: string
  alibi: string
  alibiAr: string
  isKiller: boolean
}

export interface Room {
  id: string
  name: string
  nameAr: string
  atmosphere: string
  atmosphereAr: string
  clues: Clue[]
  characters: Character[]
  connectedTo: string[]
  isLocked?: boolean
  unlockedBy?: string
}

export interface ArchiveEntry {
  id: string
  title: string
  titleAr: string
  tags: string[]
  content: string
  contentAr: string
  suggestedQuestions?: string[]
  suggestedQuestionsAr?: string[]
  isRedHerring?: boolean
}

export interface Document {
  id: string
  title: string
  titleAr: string
  type: 'letter' | 'record' | 'clipping' | 'report'
  content: string
  contentAr: string
  tags: string[]
}

export interface Connection {
  clueId: string
  characterId: string
}

export interface CaseTimelineEvent {
  id: string
  time: string
  timeAr: string
  description: string
  descriptionAr: string
}

export interface Case {
  id: string
  title: string
  titleAr: string
  subtitle: string
  subtitleAr: string
  brief: string
  briefAr: string
  setting: string
  settingAr: string
  difficulty: Difficulty
  victim: string
  victimAr: string
  killerId: string
  startingRoom: string
  rooms: Room[]
  characters: Character[]
  archive: ArchiveEntry[]
  documents: Document[]
  timeline: CaseTimelineEvent[]
  solution: string
  solutionAr: string
}

export interface GameState {
  flowState: FlowState
  locale: 'en' | 'ar'
  playerName: string
  role: Role | null
  selectedCase: Case | null
  currentRoomId: string | null
  examinedClues: string[]
  approachedCharacters: string[]
  searchQuery: string
  connections: Connection[]
  notes: string
  accusedCharacterId: string | null
  accusationReasoning: string
  isCorrect: boolean | null
  briefViewed: boolean
  timerSeconds: number
  timerActive: boolean
  timerExpired: boolean
}
