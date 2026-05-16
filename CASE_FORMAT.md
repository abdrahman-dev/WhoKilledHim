````markdown
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
````

---

## هيكل كل نسخة `Case`

```typescript
{
  id: 'case-XXX',           // فريد — لا يتكرر أبداً — نفس الـ id في الاتنين
  title: '...',             // اسم القضية
  description: '...',       // ملخص في جملتين بحد أقصى
  difficulty: 'easy',       // tutorial | easy | medium | hard
  language: 'ar',           // ar في النسخة العربية — en في الإنجليزية
  timeLimit: 1800,          // بالثواني — اختياري — نفس القيمة في الاتنين

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
}

// مشتبه بيهم — 3 على الأقل
{
  id: 'suspect-id',
  name: 'الاسم الكامل',
  role: 'suspect',
  description: 'وصف مختصر',
  alibi: 'ادعاؤه بمكانه وقت الجريمة — لازم يكون قابل للتشكيك',
  questions: [
    {
      id: 'suspect-id-q1',
      question: 'سؤال الاستجواب',
      answer: 'إجابة الشخص',
      isDeceptive: false, // true لو الإجابة كذب أو مضللة
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
}
```

**قواعد:**

- كل `id` فريد وبدون مسافات — نفس الـ id في النسختين العربية والإنجليزية
- الـ `alibi` لازم يكون غامض — مش proof ومش كذبة واضحة
- المجرم لازم يكون له `alibi` قابل للكسر بالأدلة
- `isDeceptive` مش بيتعرض للمحقق — هو بس للمحلل في كتالوجه

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
- `victimProfile` لازم يكون فيه معلومات تساعد المحلل يجاوب أسئلة المحقق
- `secrets` لازم يربط مباشرة بدافع الجريمة

---

## الحل `solution`

```typescript
{
  culpritId: 'suspect-id',
  requiredKeywords: [
    'اسم المجرم',
    'اسم دليل رئيسي',
    'كلمة مفتاحية من القضية',
  ],
  timeline: 'السياق الزمني الكامل — بيتعرض بعد انتهاء القضية فقط',
  explanation: 'الشرح الكامل للدوافع والأحداث — بيتعرض بعد انتهاء القضية فقط',
}
```

**قواعد `requiredKeywords`:**

- 3 كلمات بحد أدنى
- لازم تكون موجودة في الأدلة أو أسماء الشخصيات
- الـ matching بيدور على `includes` — مش exact match
- نفس الـ keywords في النسختين العربية والإنجليزية لازم تتطابق مع لغة القضية

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

انسخ الـ prompt ده كاملاً وابعته لأي نموذج ذكاء صناعي:

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
```

---

## ملاحظات مهمة

- لا تضع الحل أو تفسير الشفرة في `visibleToInvestigator` أبداً
- الـ `id` لكل عنصر فريد عبر القضية كاملة — لا تكرار
- الأدلة المزيفة `isKeyEvidence: false` موجودة عشان تشتت
- كل قضية ملف مستقل — لا imports بين القضايا
- بعد إنشاء القضية أضفها في `CasesPage.tsx` في array الـ `allCases`
