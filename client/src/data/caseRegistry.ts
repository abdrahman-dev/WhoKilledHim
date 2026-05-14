import type { Case } from '../types/game'
import { ravensGateCase } from './cases/case_ravens_gate'
import { tutorialCase } from './cases/case_tutorial'
import { sohoTheatreCase } from './cases/case_soho_theatre'

export const cases: Case[] = [
  tutorialCase,
  sohoTheatreCase,
  ravensGateCase,
]
