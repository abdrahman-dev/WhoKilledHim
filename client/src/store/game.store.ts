import { create } from 'zustand';
import type {
  Case,
  Accusation,
  GamePhase,
  GameResult,
  GameRole,
} from '../types/case.types';

type GameState = {
  caseData: Case | null;
  role: GameRole | null;
  phase: GamePhase;
  currentLocationId: string | null;
  discoveredEvidenceIds: string[];
  startTime: number | null;
  result: GameResult | null;
};

type GameActions = {
  initGame: (gameCase: Case, role: GameRole) => void;
  setLocation: (locationId: string) => void;
  discoverEvidence: (evidenceId: string) => void;
  accuse: (accusation: Accusation) => void;
  reset: () => void;
};

const initialState: GameState = {
  caseData: null,
  role: null,
  phase: 'role-select',
  currentLocationId: null,
  discoveredEvidenceIds: [],
  startTime: null,
  result: null,
};

export const useGameStore = create<GameState & GameActions>((set, get) => ({
  ...initialState,

  initGame: (gameCase, role) => {
    set({
      caseData: gameCase,
      role,
      phase: 'playing',
      currentLocationId: gameCase.locations[0].id,
      startTime: Date.now(),
    });
  },

  setLocation: (locationId) => {
    set({ currentLocationId: locationId });
  },

  discoverEvidence: (evidenceId) => {
    const { discoveredEvidenceIds } = get();
    if (discoveredEvidenceIds.includes(evidenceId)) return;
    set({ discoveredEvidenceIds: [...discoveredEvidenceIds, evidenceId] });
  },

  accuse: (accusation) => {
    const { caseData, startTime } = get();
    if (!caseData) return;

    const { solution } = caseData;

    // matching بسيط — بندور على requiredKeywords في النص
    const culpritCorrect = accusation.suspectId === solution.culpritId;
    const summaryLower = accusation.evidenceSummary.toLowerCase();
    const keywordsMatched = solution.requiredKeywords.filter((kw) =>
      summaryLower.includes(kw.toLowerCase())
    );
    const correct = culpritCorrect && keywordsMatched.length >= Math.ceil(solution.requiredKeywords.length / 2);

    set({
      phase: 'result',
      result: {
        correct,
        accusation,
        solution,
        timeTaken: Date.now() - (startTime ?? Date.now()),
      },
    });
  },

  reset: () => set(initialState),
}));