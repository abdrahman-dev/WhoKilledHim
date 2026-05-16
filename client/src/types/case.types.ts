// ======================================================
// CASE SYSTEM TYPES
// ======================================================
// هذا الملف يمثل قلب اللعبة بالكامل.
// كل قضية - شخصية - دليل - استنتاج - نتيجة
// يتم تعريفه هنا.
//
// اللعبة قائمة على دورين:
//
// 1. Investigator
//    - يزور الأماكن
//    - يرى الأدلة الخام
//    - يستجوب الشخصيات
//
// 2. Analyst
//    - لا يرى مسرح الجريمة مباشرة
//    - يعتمد على التقارير والمعلومات المنقولة
//    - يحلل ويستنتج ويربط الأدلة ببعض
//
// ======================================================

export type Difficulty = 'tutorial' | 'easy' | 'medium' | 'hard';

// لغة القضية الحالية
export type Language = 'ar' | 'en';

// ==============================
// INTERROGATION
// ==============================

// سؤال استجواب داخل التحقيق
export interface InterrogationQuestion {

  // id فريد للسؤال
  id: string;

  // السؤال الذي يطرحه المحقق
  question: string;

  // إجابة الشخصية
  answer: string;

  // هل الإجابة مضللة أو كاذبة؟
  // هذه المعلومة لا تظهر للمحقق
  // تستخدم داخلياً فقط للتحليل أو النتيجة
  isDeceptive: boolean;
}

// ==============================
// CHARACTERS
// ==============================

// إحصائيات نفسية بسيطة للشخصية
// تستخدم لإعطاء شعور بالحالة العقلية أثناء التحقيق
export interface CharacterStats {

  // مستوى الثقة
  // -100 = عدائي جداً
  // 100 = متعاون جداً
  trustLevel: number;

  // مستوى التوتر
  // 0 = هادئ
  // 100 = منهار أو متوتر بشدة
  stressLevel: number;
}

// تعريف أي شخصية داخل القضية
export interface Character {

  // id فريد
  id: string;

  // الاسم الكامل
  name: string;

  // دور الشخصية
  // victim = الضحية
  // suspect = مشتبه به
  // witness = شاهد
  role: 'victim' | 'suspect' | 'witness';

  // وصف مختصر للشخصية
  // مظهرها - مهنتها - شخصيتها
  description: string;

  // ادعاء مكان الشخصية وقت الجريمة
  // يستخدم لكسر التناقضات
  alibi?: string;

  // الحالة النفسية العامة
  stats: CharacterStats;

  // أسئلة الاستجواب الخاصة بهذه الشخصية
  questions?: InterrogationQuestion[];

  policeRecord?: string; // سجل جنائي او اجرامي عند المحلل فقط
}

// معلومات سرية عن الضحية
// أغلبها موجه للمحلل وليس المحقق
export interface VictimProfile {

  // تاريخ الضحية الشخصي والمهني
  background: string;

  // أعماله وشراكاته ومصالحه
  business: string;

  // علاقاته بالشخصيات الأخرى
  relationships: string;

  // أسرار الضحية
  // غالباً تحتوي على الدافع الحقيقي للجريمة
  // لا يراها المحقق مباشرة
  secrets: string;

  // وضعه المالي
  // من المستفيد من موته؟
  financialStatus: string;
}


// ==============================
// EVIDENCE
// ==============================

// أنواع الأدلة الموجودة في اللعبة
export type EvidenceType =
  | 'physical'   // دليل مادي
  | 'cipher'     // شفرة
  | 'keyword'    // كلمة مفتاحية
  | 'testimony'; // شهادة

// أي دليل داخل القضية
export type CaseEvidence =
  | Evidence
  | CipherEvidence
  | KeywordEvidence;

// الشكل الأساسي لأي دليل
export interface Evidence {

  // id فريد للدليل
  id: string;

  // نوع الدليل
  type: EvidenceType;

  // اسم مختصر للدليل
  label: string;

  // ما يراه المحقق فعلياً
  // مهم جداً:
  // لا يحتوي على الحقيقة الكاملة
  visibleToInvestigator: string;

  // هل هذا الدليل مهم فعلاً للحل؟
  // false = دليل تشتيت أو ثانوي
  isKeyEvidence: boolean;
}

// دليل من نوع شفرة
export interface CipherEvidence extends Evidence {

  type: 'cipher';

  // النص الخام المشفر
  rawCipher: string;

  // مفتاح فك الشفرة
  // للمحلل فقط
  analystKey: string;

  // المعنى الحقيقي بعد فك الشفرة
  // لا يظهر للمحقق مباشرة
  decoded: string;
}

// دليل يحتوي على كلمة غريبة أو مصطلح مهم
export interface KeywordEvidence extends Evidence {

  type: 'keyword';

  // الكلمة المهمة نفسها
  keyword: string;

  // تفسير المحلل للكلمة
  analystExplanation: string;
}

// ==============================
// LOCATIONS
// ==============================

// أي مكان داخل القضية
export interface Location {

  // id فريد للمكان
  id: string;

  // اسم المكان
  name: string;

  // وصف حسي للمكان
  // الجو - الرائحة - الإضاءة - التفاصيل
  description: string;

  // الشخصيات الموجودة أو المرتبطة بالمكان
  characters: string[];

  // الأدلة الموجودة في المكان
  evidence: CaseEvidence[];
}

// ==============================
// ANALYST CATALOG
// ==============================

// معلومات تساعد المحلل على فك الشفرات
export interface CipherKey {

  // id فريد
  id: string;

  // اسم الشفرة
  label: string;

  // شكلها العام
  // مثال: WORD-7
  pattern: string;

  // شرح طريقة فكها
  explanation: string;
}

// شرح الكلمات الغريبة أو المصطلحات
export interface KeywordEntry {

  // id فريد
  id: string;

  // الكلمة نفسها
  keyword: string;

  // معناها المباشر
  meaning: string;

  // سياق استخدامها داخل القضية
  context: string;
}

// ======================================================
// كل ما هنا يمثل "استنتاجات المحلل"
// وليس حقائق مؤكدة.
//
// المحلل لا يرى مسرح الجريمة بنفسه.
// هو يعتمد على:
//
// - تقارير المحقق
// - الشهادات
// - الأدلة المنقولة
//
// لذلك هذه القيم تمثل "رأي تحليلي"
// وقد تكون خاطئة.
// ======================================================
export interface DeductionFlags {

  // الشخصية المرتبطة بهذه الملاحظات
  suspectId: string;

  // هل يبدو أنه يكذب؟
  suspectIsLying?: boolean;

  // هل يبدو متوتراً؟
  suspectIsNervous?: boolean;

  // مدى أهمية الدليل من وجهة نظر المحلل
  evidenceImportance?: 'low' | 'medium' | 'high';
}

// قاعدة بيانات المحلل
// تحتوي على كل المعلومات السرية والتحليلية
export interface AnalystCatalog {

  // مفاتيح فك الشفرات
  cipherKeys: CipherKey[];

  // شرح الكلمات المهمة
  keywords: KeywordEntry[];

  // الملف السري للضحية
  victimProfile: VictimProfile;

  // ملاحظات عامة للمحلل
  notes: string;
}

// ==============================
// SOLUTION
// ==============================

// أنواع الدوافع المحتملة للجريمة
export type MotiveType =
  | 'revenge'
  | 'money'
  | 'fear'
  | 'blackmail'
  | 'power'
  | 'jealousy'
  | 'ideology'
  | 'accident'
  | 'frustration'
  | 'insanity'
  | 'envy' ;

// حدث زمني داخل التسلسل النهائي للجريمة
export interface TimelineEvent {

  // الوقت
  time: string;

  // ما الذي حدث؟
  event: string;
}

// الحل الحقيقي للقضية
// لا يظهر إلا بعد انتهاء اللعب
export interface Solution {

  // المجرم الحقيقي
  culpritId: string;

  // كلمات يجب أن يذكرها اللاعب
  // حتى يعتبر اتهامه منطقياً
  requiredKeywords: string[];

  // التسلسل الزمني الكامل للجريمة
  timeline: TimelineEvent[];

  // الدافع الحقيقي
  motive: MotiveType;

  // شرح كامل لما حدث
  explanation: string;
}

// ==============================
// CASE SUMMARY — صفحة القضايا
// ==============================

// بيانات مختصرة لعرض القضية داخل القائمة
export interface CaseSummary {

  // id القضية
  id: string;

  // عنوان القضية
  title: string;

  // وصف قصير
  description: string;

  // مستوى الصعوبة
  difficulty: Difficulty;

  // لغة القضية
  language: Language;

  // حد الوقت إن وجد
  timeLimit?: number;
}

// ==============================
// ACCUSATION
// ==============================

// الاتهام النهائي الذي يقدمه اللاعب
export interface Accusation {

  // الشخص المتهم
  suspectId: string;

  // شرح اللاعب للأدلة
  evidenceSummary: string;

  // وقت تقديم الاتهام
  timestamp: number;
}

// ==============================
// CASE
// ==============================

// الشكل الكامل لأي قضية داخل اللعبة
export interface Case {

  // id فريد
  id: string;

  // مقدمة سينمائية أو سردية
  introText?: string;

  // اسم القضية
  title: string;

  // وصف مختصر
  description: string;

  // الصعوبة
  difficulty: Difficulty;

  // اللغة
  language: Language;

  // حد الوقت
  timeLimit?: number;

  // الشخصيات
  characters: Character[];

  // الأماكن
  locations: Location[];

  // معلومات المحلل السرية
  analystCatalog: AnalystCatalog;

  // الحل الكامل الحقيقي
  solution: Solution;

  // نهاية سردية بعد الحل
  endingText?: string;
}

// ==============================
// CASE DEBUG
// ==============================

// يستخدم أثناء التطوير
// للتأكد أن القضية سليمة
export interface CaseDebug {

  // هل القضية valid؟
  isValid: boolean;

  // الأخطاء المكتشفة
  errors?: string[];
}

// ==============================
// GAME STATE
// ==============================

// دور اللاعب الحالي
export type GameRole =
  | 'investigator'
  | 'analyst';

// مرحلة اللعبة الحالية
export type GamePhase =
  | 'role-select'
  | 'case-select'
  | 'playing'
  | 'accusation'
  | 'result';

// النتيجة النهائية بعد انتهاء القضية
export interface GameResult {

  // هل اللاعب حل القضية؟
  correct: boolean;

  // الاتهام الذي قدمه
  accusation: Accusation;

  // الحل الحقيقي
  solution: Solution;

  // الوقت المستغرق
  timeTaken: number;
}