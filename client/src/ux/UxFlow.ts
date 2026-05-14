import type { FlowState } from '../types/game'

const VALID_TRANSITIONS: Record<FlowState, FlowState[]> = {
  LANDING: ['CASE_SELECT'],
  CASE_SELECT: ['BRIEF', 'LANDING'],
  BRIEF: ['INVESTIGATION', 'ANALYSIS', 'CASE_SELECT'],
  INVESTIGATION: ['ACCUSATION', 'CASE_SELECT'],
  ANALYSIS: ['ACCUSATION', 'CASE_SELECT'],
  ACCUSATION: ['RESULT', 'INVESTIGATION', 'ANALYSIS'],
  RESULT: ['LANDING', 'CASE_SELECT'],
}

export function isValidTransition(from: FlowState, to: FlowState): boolean {
  return VALID_TRANSITIONS[from]?.includes(to) ?? false
}

export function safeTransition(from: FlowState, to: FlowState): FlowState {
  return isValidTransition(from, to) ? to : 'LANDING'
}
