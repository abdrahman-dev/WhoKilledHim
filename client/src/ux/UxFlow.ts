import type { FlowState } from '../types/game'

const VALID_TRANSITIONS: Record<FlowState, FlowState[]> = {
  LANDING: ['CASE_SELECT'],
  CASE_SELECT: ['INVESTIGATION', 'ANALYSIS', 'LANDING'],
  INVESTIGATION: ['ACCUSATION', 'CASE_SELECT'],
  ANALYSIS: ['ACCUSATION', 'CASE_SELECT'],
  ACCUSATION: ['RESULT'],
  RESULT: ['LANDING', 'CASE_SELECT'],
}

export function isValidTransition(from: FlowState, to: FlowState): boolean {
  return VALID_TRANSITIONS[from]?.includes(to) ?? false
}

export function safeTransition(from: FlowState, to: FlowState): FlowState {
  return isValidTransition(from, to) ? to : 'LANDING'
}
