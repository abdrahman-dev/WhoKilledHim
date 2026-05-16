import { create } from 'zustand';
import type {
  Case,
  Accusation,
  GamePhase,
  GameResult,
  GameRole,
  DeductionFlags,
} from '../types/case.types';

type GameState = {
  caseData: Case | null;
  role: GameRole | null;
  phase: GamePhase;
  currentLocationId: string | null;
  discoveredEvidenceIds: string[];
  deductionFlags: DeductionFlags[];
  startTime: number | null;
  result: GameResult | null;
};

type GameActions = {
  initGame: (gameCase: Case, role: GameRole) => void;
  setLocation: (locationId: string) => void;
  discoverEvidence: (evidenceId: string) => void;
  setDeductionFlag: (flag: DeductionFlags) => void;
  accuse: (accusation: Accusation) => void;
  reset: () => void;
};

const initialState: GameState = {
  caseData: null,
  role: null,
  phase: 'role-select',
  currentLocationId: null,
  discoveredEvidenceIds: [],
  deductionFlags: [],
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

  setDeductionFlag: (flag) => {
    const { deductionFlags } = get();
    const existing = deductionFlags.findIndex(
      (f) => f.suspectId === flag.suspectId
    );
    if (existing === -1) {
      set({ deductionFlags: [...deductionFlags, flag] });
    } else {
      const updated = [...deductionFlags];
      updated[existing] = { ...updated[existing], ...flag };
      set({ deductionFlags: updated });
    }
  },

  accuse: (accusation) => {
    const { caseData, startTime } = get();
    if (!caseData) return;

    const { solution } = caseData;

    const culpritCorrect = accusation.suspectId === solution.culpritId;
    const summaryLower = accusation.evidenceSummary.toLowerCase();
    const keywordsMatched = solution.requiredKeywords.filter((kw) =>
      summaryLower.includes(kw.toLowerCase())
    );
    const correct =
      culpritCorrect &&
      keywordsMatched.length >= Math.ceil(solution.requiredKeywords.length / 2);

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