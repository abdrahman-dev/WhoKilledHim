# CASE FORMAT — دليل إنشاء القضايا

هذا الملف مرجع لإنشاء قضايا جديدة يدوياً أو عبر الذكاء الاصطناعي.
كل قضية ملف TypeScript مستقل في `src/cases/`.

---

## الهيكل الأساسي

```typescript
import type { Case } from "../types/case.types";

export interface BilingualCase {
  ar: Case;
  en: Case;
}

export const myCaseName: BilingualCase = {
  ar: {
    /* النسخة العربية الكاملة */
  },
  en: {
    /* النسخة الإنجليزية الكاملة */
  },
};
```

---

## هيكل كل نسخة `Case`

```typescript
{
  id: 'case-XXX',           // فريد — لا يتكرر أبداً — نفس الـ id في الاتنين
  title: '...',             // اسم القضية
  description: '...',       // ملصف في جملتين بحد أقصى
  difficulty: 'easy',       // tutorial | easy | medium | hard
  language: 'ar',           // ar في النسخة العربية — en في الإنجليزية
  timeLimit: 1800,          // بالثواني — اختياري — نفس القيمة في الاتنين

  introText?: '...',        // نص سينمائي أو سردي يظهر قبل اختيار الدور
  endingText?: '...',       // نص سردي يظهر بعد عرض النتيجة

  characters: [...],
  locations: [...],
  analystCatalog: {...},
  solution: {...},
}
```

---

## الشخصيات `characters`

```typescript
// ضحية واحدة دائماً
{
  id: 'victim-id',
  name: 'الاسم الكامل',
  role: 'victim',
  description: 'وصف مختصر — مهنته، مكانته',
  stats: {
    trustLevel: 50,        // -100 إلى 100 — السلبي يعني غير جدير بالثقة
    stressLevel: 30,       // 0 إلى 100 — المرتفع يعني متوتر
  },
}

// مشتبه بيهم — 3 على الأقل
{
  id: 'suspect-id',
  name: 'الاسم الكامل',
  role: 'suspect',
  description: 'وصف مختصر',
  stats: {
    trustLevel: -20,       // سلبي = غير جدير بالثقة
    stressLevel: 70,       // مرتفع = متوتر
  },
  alibi: 'ادعاؤه بمكانه وقت الجريمة — لازم يكون قابل للتشكيك',
  policeRecord?: 'سجل الشرطة — معلومات سرية يراها المحلل فقط',
  questions: [
    {
      id: 'suspect-id-q1',
      question: 'سؤال الاستجواب',
      answer: 'إجابة الشخص',
      isDeceptive: false,   // true لو الإجابة كذب أو مضللة — لا تظهر للمحقق أبداً
    },
    // 3 أسئلة على الأقل لكل مشتبه به
    // المجرم لازم يكون له سؤالين isDeceptive: true على الأقل
  ],
}

// شهود — اختياري
{
  id: 'witness-id',
  name: 'الاسم الكامل',
  role: 'witness',
  description: 'وصف مختصر',
  stats: {
    trustLevel: 60,
    stressLevel: 20,
  },
}
```

### قواعد `stats`

- `trustLevel`: -100 إلى 100. موجب = يبدو صادقاً. سالب = يبدو كاذباً أو مراوغاً.
- `stressLevel`: 0 إلى 100. كلما ارتفع، كلما بدا متوتراً أو قلقاً.
- تظهر هاتان القيمتان بشكل أشرطة مرئية في نافذة الاستجواب للمحقق.

### قواعد الشخصيات

- كل `id` فريد وبدون مسافات — نفس الـ id في النسختين
- الـ `alibi` لازم يكون غامض — مش proof ومش كذبة واضحة
- المجرم لازم يكون له `alibi` قابل للكسر بالأدلة
- `isDeceptive` لا يظهر للمحقق — هو فقط للمحلل أو للنتيجة النهائية
- `policeRecord` يظهر للمحلل فقط في كتالوجه — لا يطلع عليه المحقق

---

## الأماكن `locations`

```typescript
{
  id: 'location-id',
  name: 'اسم المكان',
  description: 'وصف حسي — شكله، رائحته، جوه إيه',
  characters: ['character-id-1', 'character-id-2'],
  evidence: [...],
}
```

**قواعد:**

- 3 أماكن على الأقل
- مكان الجريمة لازم يحتوي على دليل مادي واحد على الأقل
- الوصف حسي — مش بس "غرفة كبيرة"

---

## الأدلة `evidence` — 4 أنواع

### ١. دليل مادي `physical`

```typescript
{
  id: 'ev-xxx',
  type: 'physical',
  label: 'اسم الدليل',
  visibleToInvestigator: 'ما يراه المحقق — كامل وواضح',
  isKeyEvidence: true,
}
```

### ٢. شفرة `cipher`

```typescript
{
  id: 'ev-xxx',
  type: 'cipher',
  label: 'اسم الدليل',
  visibleToInvestigator: 'ما يراه المحقق — الشفرة الخام غير المفهومة فقط',
  rawCipher: 'الشفرة كما هي — مثال: WARD-3 / NILE-7',
  analystKey: 'المفتاح الموجود عند المحلل فقط — لا يظهر للمحقق أبداً',
  decoded: 'المعنى الكامل بعد فك الشفرة — لا يظهر للمحقق أبداً',
  isKeyEvidence: true,
}
```

**قواعد الشفرة:**

- `visibleToInvestigator` يحتوي على الشفرة الخام فقط — لا تفسير
- `analystKey` و `decoded` سريان للمحلل فقط — لا يُكشف عنهما للمحقق
- لازم يقابلها `cipherKey` في `analystCatalog`

### ٣. كلمة مفتاحية `keyword`

```typescript
{
  id: 'ev-xxx',
  type: 'keyword',
  label: 'اسم الدليل',
  visibleToInvestigator: 'ما يراه المحقق — الكلمة الغريبة في سياقها بدون تفسير',
  keyword: 'الكلمة الغريبة بالظبط',
  analystExplanation: 'تفسير المحلل الكامل — لا يظهر للمحقق أبداً',
  isKeyEvidence: true,
}
```

**قواعد الكلمة المفتاحية:**

- `visibleToInvestigator` يحتوي على الكلمة في سياقها فقط — بدون أي تفسير
- `analystExplanation` للمحلل فقط — لا يُكشف عنه للمحقق
- لازم يقابلها `keywordEntry` في `analystCatalog`

### ٤. شهادة `testimony`

```typescript
{
  id: 'ev-xxx',
  type: 'testimony',
  label: 'شهادة [اسم الشخص]',
  visibleToInvestigator: 'ما قاله الشاهد بالنص',
  isKeyEvidence: false,
}
```

---

## كتالوج المحلل `analystCatalog`

```typescript
{
  cipherKeys: [
    {
      id: 'ck-xxx',
      label: 'اسم الشفرة',
      pattern: 'الشكل العام — مثال: WORD-X',
      explanation: 'شرح كامل لكيفية فك الشفرة خطوة بخطوة',
    }
  ],
  keywords: [
    {
      id: 'kw-xxx',
      keyword: 'الكلمة الغريبة بالظبط كما تظهر في الدليل',
      meaning: 'معناها المباشر',
      context: 'في أي سياق تظهر وكيف ترتبط بالقضية',
    }
  ],
  victimProfile: {
    background: 'تاريخ الضحية الشخصي والمهني — معلومات عميقة للمحلل',
    business: 'أعماله ومصالحه وعلاقاته التجارية',
    relationships: 'علاقته بكل مشتبه به بالتفصيل — ما يعرفه المحلل فقط',
    secrets: 'أسرار الضحية التي قد تكون دافعاً للجريمة — سرية للغاية',
    financialStatus: 'وضعه المالي — من يستفيد من وفاته؟',
  },
  notes: 'تعليمات للمحلل — دوره وما يجب تركيزه عليه في هذه القضية',
}
```

**قواعد:**

- كل `cipher` في الأدلة لازم يقابله `cipherKey` في الكتالوج
- كل `keyword` في الأدلة لازم يقابله `keywordEntry` — الكلمة لازم تتطابق تماماً
- `victimProfile` إلزامي — لازم يكون فيه معلومات تساعد المحلل يجاوب أسئلة المحقق
- `secrets` لازم يربط مباشرة بدافع الجريمة

---

## الحل `solution`

```typescript
{
  culpritId: 'suspect-id',              // المشتبه به المجرم
  motive: 'revenge',                    // إلزامي — الدافع (انظر الأنواع أدناه)

  requiredKeywords: [
    'اسم المجرم',
    'اسم دليل رئيسي',
    'كلمة مفتاحية من القضية',
  ],

  timeline: [                           // مصفوفة أحداث — نص عادي
    { time: 'الساعة 7:00 مساءً', event: 'شوهد المجرم يدخل المنزل' },
    { time: 'الساعة 7:30 مساءً', event: 'سمع صوت مشاجرة' },
    { time: 'الساعة 8:00 مساءً', event: 'غادر المجرم مسرعاً' },
  ],

  explanation: 'الشرح الكامل للدوافع والأحداث — يعرض بعد انتهاء القضية',
}
```

### أنواع الدوافع

```typescript
motive:
  | 'revenge'     // انتقام
  | 'money'       // المال
  | 'fear'        // خوف
  | 'blackmail'   // ابتزاز
  | 'power'       // سلطة
  | 'jealousy'    // غيرة
  | 'ideology'    // أيديولوجيا
  | 'accident'    // حادث
  | 'frustration' // إحباط
  | 'insanity'    // جنون
  | 'envy'        // حسد
```

### قواعد `requiredKeywords`

- 3 كلمات بحد أدنى
- لازم تكون موجودة في الأدلة أو أسماء الشخصيات
- الـ matching بيدور على `includes` — مش exact match
- نفس الـ keywords في النسختين العربية والإنجليزية لازم تتطابق مع لغة القضية

### قواعد `timeline`

- مصفوفة من `{ time: string, event: string }` وليس نصاً واحداً
- `time` يظهر بلون ذهبي في واجهة النتيجة
- `event` يظهر كنص عادي
- ترتيب الأحداث من الأقدم إلى الأحدث
- 3 أحداث على الأقل

---

## قواعد التوازن

| العنصر          | Tutorial | Easy     | Medium   | Hard     |
| --------------- | -------- | -------- | -------- | -------- |
| أماكن           | 3        | 3-4      | 4-5      | 5+       |
| مشتبه بيهم      | 3        | 3        | 4        | 5+       |
| أسئلة لكل مشتبه | 3-4      | 4        | 4-5      | 5+       |
| شفرات           | 1        | 1-2      | 2-3      | 3+       |
| أدلة مزيفة      | 0        | 1        | 2-3      | 4+       |
| وقت مقترح       | بلا حد   | 30 دقيقة | 20 دقيقة | 15 دقيقة |

---

## Prompt جاهز للذكاء الاصطناعي

انسخ الـ prompt التالي كاملاً وابعته لأي نموذج ذكاء صناعي:

```
أنشئ قضية جديدة للعبة "المحقق والمحلل" بصيغة TypeScript.

المطلوب:
- الصعوبة: [easy / medium / hard]
- الإطار الزمني والمكاني: [مثال: مصر في الأربعينيات / لندن في العصر الفيكتوري]
- عدد المشتبه بيهم: [3 / 4 / 5]
- نوع الجريمة: [قتل / سرقة / اختفاء]

القضية لازم تكون BilingualCase فيها نسخة ar ونسخة en كاملتين.

الهيكل المطلوب:

import type { Case } from '../types/case.types';

export interface BilingualCase {
  ar: Case;
  en: Case;
}

export const caseName: BilingualCase = {
  ar: { ... },
  en: { ... },
};

ملاحظات على الحقول الجديدة:
- introText?: نص سينمائي اختياري يظهر قبل بدء القضية
- endingText?: نص سردي اختياري يظهر بعد انتهاء القضية
- stats: مطلوب لكل شخصية — trustLevel (-100 إلى 100) و stressLevel (0 إلى 100)
- policeRecord?: سجل شرطة اختياري — يظهر للمحلل فقط
- solution.timeline: مصفوفة من { time, event } — ليس نصاً واحداً
- solution.motive: مطلوب — اختر من القائمة أدناه

أنواع الدوافع:
revenge | money | fear | blackmail | power | jealousy | ideology | accident | frustration | insanity | envy

القواعد الصارمة:
1. visibleToInvestigator لا يحتوي أبداً على تفسير الشفرة أو معنى الكلمة المفتاحية
2. analystKey و decoded و analystExplanation للمحلل فقط — لا تضعها في visibleToInvestigator
3. كل id فريد وبدون مسافات — نفس الـ id في النسختين
4. alibi كل مشتبه به لازم يكون غامض وقابل للتشكيك
5. المجرم لازم يكون له سؤالين isDeceptive: true على الأقل
6. requiredKeywords لازم تكون 3 على الأقل وموجودة فعلاً في الأدلة
7. كل cipher في الأدلة لازم يقابله cipherKey في analystCatalog
8. كل keyword في الأدلة لازم يقابله keywordEntry — الكلمة تتطابق تماماً
9. victimProfile لازم يكون مفصلاً ويربط secrets بدافع الجريمة مباشرة
10. الوصف حسي وتفصيلي — مش مجرد "غرفة كبيرة"
11. النسخة الإنجليزية ترجمة كاملة للعربية — نفس القصة ونفس الأدلة
12. stats موجود لكل شخصية — trustLevel يعكس مدى مصداقيته، stressLevel يعكس توتره
13. timeline مصفوفة — كل عنصر له time (الوقت) و event (الحدث)
14. motive إلزامي — اختر من أنواع الدوافع المذكورة
```

---

## ملاحظات مهمة

- لا تضع الحل أو تفسير الشفرة في `visibleToInvestigator` أبداً
- الـ `id` لكل عنصر فريد عبر القضية كاملة — لا تكرار
- الأدلة المزيفة `isKeyEvidence: false` موجودة عشان تشتت
- كل قضية ملف مستقل — لا imports بين القضايا
- بعد إنشاء القضية أضفها في `cases/index.ts` في مصفوفة `availableCases`
- `stats` موجود لكل الشخصيات (victim/suspect/witness) وتعطي المحقق انطباعاً بصرياً أثناء الاستجواب
- `policeRecord` سري للمحلل فقط — لا يظهر للمحقق في واجهته
- `timeline` يعرض بعد انتهاء القضية — الوقت بالذهب والحدث بالنص العادي
- `motive` يظهر كشارة بعد اسم المجرم في شاشة النتيجة
