import type { Case } from '../types/case.types';
import { trainingCase } from './training-case';
import { museumCase } from './golden-thief';
import { drRamzyCase } from './ramzy-disapperance'

export const availableCases: Case[] = [
  trainingCase,
  museumCase,
  drRamzyCase
];