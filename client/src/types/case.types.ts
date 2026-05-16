export type Difficulty = 'tutorial' | 'easy' | 'medium' | 'hard';
export type Language = 'ar' | 'en';

// ==============================
// INTERROGATION
// ==============================

export interface InterrogationQuestion {
  id: string;
  question: string;
  answer: string;
  isDeceptive: boolean;
}

// ==============================
// CHARACTERS
// ==============================

export interface Character {
  id: string;
  name: string;
  role: 'victim' | 'suspect' | 'witness';
  description: string;
  alibi?: string;
  questions?: InterrogationQuestion[];
}

export interface VictimProfile {
  background: string;        // تاريخه الشخصي والمهني
  business: string;          // أعماله ومصالحه
  relationships: string;     // علاقاته بالمشتبه بيهم
  secrets: string;           // أسراره — المحلل بيعرفها، المحقق لأ
  financialStatus: string;   // وضعه المالي
}


// ==============================
// EVIDENCE
// ==============================

export type EvidenceType = 'physical' | 'cipher' | 'keyword' | 'testimony';

export type CaseEvidence =
  | Evidence
  | CipherEvidence
  | KeywordEvidence;

export interface Evidence {
  id: string;
  type: EvidenceType;
  label: string;
  visibleToInvestigator: string;
  isKeyEvidence: boolean;
}

export interface CipherEvidence extends Evidence {
  type: 'cipher';
  rawCipher: string;
  analystKey: string;
  decoded: string;
}

export interface KeywordEvidence extends Evidence {
  type: 'keyword';
  keyword: string;
  analystExplanation: string;
}

// ==============================
// LOCATIONS
// ==============================

export interface Location {
  id: string;
  name: string;
  description: string;
  characters: string[];
  evidence: CaseEvidence[];
}

// ==============================
// ANALYST CATALOG
// ==============================

export interface CipherKey {
  id: string;
  label: string;
  pattern: string;
  explanation: string;
}

export interface KeywordEntry {
  id: string;
  keyword: string;
  meaning: string;
  context: string;
}

export interface AnalystCatalog {
  cipherKeys: CipherKey[];
  keywords: KeywordEntry[];
  victimProfile: VictimProfile;
  notes: string;
}

// ==============================
// SOLUTION
// ==============================

export interface Solution {
  culpritId: string;
  requiredKeywords: string[];
  timeline: string;
  explanation: string;
}

// ==============================
// CASE SUMMARY — صفحة القضايا
// ==============================

export interface CaseSummary {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  language: Language;
  timeLimit?: number;
}

// ==============================
// ACCUSATION
// ==============================

export interface Accusation {
  suspectId: string;
  evidenceSummary: string;
  timestamp: number;
}

// ==============================
// CASE
// ==============================

export interface Case {
  id: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  language: Language;
  timeLimit?: number;
  characters: Character[];
  locations: Location[];
  analystCatalog: AnalystCatalog;
  solution: Solution;
}

// ==============================
// GAME STATE
// ==============================

export type GameRole = 'investigator' | 'analyst';
export type GamePhase = 'role-select' | 'case-select' | 'playing' | 'accusation' | 'result';

export interface GameResult {
  correct: boolean;
  accusation: Accusation;
  solution: Solution;
  timeTaken: number;
}