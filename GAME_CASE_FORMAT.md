# Case Format Guide — "Who Killed Him?"

This document describes the exact data format for creating new cases. Follow this structure precisely when generating cases for the game.

---

## Overview

A case is a TypeScript file in `src/data/cases/` that exports a `Case` object conforming to the `Case` interface (defined in `src/types/game.ts`).

Each case has two parallel language versions (English and Arabic) for every text field.

---

## Template

```ts
import type { Case } from '../../types/game'

export const yourCase: Case = {
  id: 'unique_case_id',               // lowercase_with_underscores
  title: 'Case Title',
  titleAr: 'عنوان القضية',
  subtitle: 'A one-sentence atmospheric hook.',           // max 20 words
  subtitleAr: 'جملة جوية من سطر واحد.',                    // Arabic equivalent
  brief: '2-4 sentence summary of the case situation.\nThis is shown to both players before they begin.\nInclude the victim, the setting, and the central question.',
  briefAr: 'ملخص من 2-4 جمل لوضع القضية.\nيظهر لكلا اللاعبين قبل البداية.\nيشمل الضحية والمكان والسؤال المركزي.',
  setting: 'Location, City — Month Year',
  settingAr: 'المكان، المدينة — شهر سنة',
  difficulty: 'easy',                  // 'easy'|'medium'|'hard'
  victim: 'Victim Full Name',
  victimAr: 'الاسم الكامل للضحية',
  killerId: 'character_id',           // must match a character.id exactly
  startingRoom: 'room_id',            // the room where players begin
  rooms: [ /* Room[] */ ],
  characters: [ /* Character[] — ALL characters, including those already in rooms */ ],
  archive: [ /* ArchiveEntry[] */ ],
  documents: [ /* Document[] */ ],
  timeline: [ /* CaseTimelineEvent[] — the factual sequence of events */ ],
  solution: 'Full solution text.\nMultiple paragraphs.\nExplains who, how, why, and what evidence proves it.',
  solutionAr: 'نص الحل الكامل.\nفقرات متعددة.\nيشرح من، كيف، لماذا، وما الأدلة التي تثبت ذلك.',
}
```

---

## Room

```ts
{
  id: 'room_id',                      // lowercase_with_underscores
  name: 'Room Name',
  nameAr: 'اسم الغرفة',
  atmosphere: 'A rich sensory description of the room.\nWhat does it look like? Smell like? Sound like?\nWhat mood does it convey? 3-5 sentences.',
  atmosphereAr: 'وصف حسي غني للغرفة.\nكيف تبدو؟ رائحتها؟ صوتها؟\nأي مزاج تنقله؟ 3-5 جمل.',
  clues: [ /* Clue[] */ ],
  characters: [ /* Character[] */ ],  // characters physically present here
  connectedTo: ['other_room_id_1', 'other_room_id_2'],
  isLocked?: true,                    // optional: requires a clue to unlock
  unlockedBy?: 'clue_id',            // clue id that unlocks this room
}
```

### Locked Rooms

If a room has `isLocked: true` and `unlockedBy: 'some_clue_id'`, the investigator must examine the specified clue first before they can enter. Useful for gated progression.

---

## Clue

```ts
{
  id: 'clue_id',                      // lowercase_with_underscores
  name: 'Clue Name',                  // short, descriptive
  nameAr: 'اسم الدليل',
  digest: '1-2 sentence summary of what the investigator notices.\nThis appears in the clue list view.\nShort enough to describe verbally.',
  digestAr: 'ملخص من 1-2 جملة عما يلاحظه المحقق.\nيظهر في قائمة الأدلة.\nقصير بما يكفي لوصفه شفوياً.',
  observation: 'Full sensory description (4-8 sentences).\nWhat the investigator sees when they choose to examine closely.\nColor, texture, smell, position, temperature, sound, condition.\nMix significant and insignificant details naturally.',
  observationAr: 'الوصف الحسي الكامل (4-8 جمل).\nما يراه المحقق عندما يختار الفحص الدقيق.\nاللون، الملمس، الرائحة، الموضع، الحرارة، الصوت، الحالة.\nامزج التفاصيل المهمة وغير المهمة طبيعياً.',
  revealsAfter?: 'other_clue_id',    // optional: this clue only appears after examining another
}
```

### Digest vs. Observation

- **digest**: What the investigator can notice at a glance (appears in the clue list). Must be short enough to read quickly.
- **observation**: The full rich text (appears when they click "Read full observation"). Contains all the sensory details they can describe to their partner.

### revealsAfter

If a clue depends on another, set `revealsAfter` to the preceding clue's ID. The clue is hidden until the other is examined. Useful for sequential discoveries (e.g., finding a key, then finding what it unlocks).

---

## Character

```ts
{
  id: 'character_id',                 // lowercase_with_underscores
  name: 'Character Name',
  nameAr: 'اسم الشخصية',
  role: 'Their Role',                // "Butler", "Widow", "Doctor"
  roleAr: 'دورهم',
  sceneObservation: '2-4 sentences describing how they look and behave when the investigator sees them.\nPosture, clothing, expression, what they are doing.',
  sceneObservationAr: '2-4 جمل تصف مظهرهم وسلوكهم عندما يراهم المحقق.\nالوضعية، الملابس، التعبير، ماذا يفعلون.',
  statement: 'What they say to the investigator. In their voice. As a direct quote.\nCan be helpful, evasive, deceptive, or incomplete.\n2-4 sentences.',
  statementAr: 'ما يقولونه للمحقق. بصوتهم. كاقتباس مباشر.\nيمكن أن يكون مفيداً، مراوغاً، خادعاً، أو غير كامل.\n2-4 جمل.',
  isLying?: true,                     // optional: set true if the character is lying
  trueStatement?: 'What they actually know.\nOnly revealed if the investigator probes or finds contradictory evidence.\n1-3 sentences.',
  trueStatementAr?: 'ما يعرفونه فعلاً.\nيُكشف فقط إذا ضغط المحقق أو وجد أدلة متناقضة.\n1-3 جمل.',
  psychProfile: 'Analyst-only: psychological profile.\nPersonality, tendencies, reliability.\n2-3 sentences.',
  psychProfileAr: 'للمحلل فقط: الملف النفسي.\nالشخصية، النزعات، الموثوقية.\n2-3 جمل.',
  secretBackground: 'Analyst-only: hidden background information.\nFacts the character does not volunteer.\nCritical for motive assessment.',
  secretBackgroundAr: 'للمحلل فقط: معلومات خلفية مخفية.\nحقائق لا يتطوع بها.\nحاسمة لتقييم الدافع.',
  motive: 'Hidden until RESULT. What would make this person want to kill? 1-2 sentences.',
  motiveAr: 'مخفي حتى النتيجة. ما الذي قد يجعل هذا الشخص يريد القتل؟ 1-2 جمل.',
  alibi: 'Where they claim to have been. 1-2 sentences.',
  alibiAr: 'أين يدّعون أنهم كانوا. 1-2 جمل.',
  isKiller: false,                    // true only for the actual killer
}
```

### Lying Characters

If `isLying: true`, the investigator sees a "This person may not be telling the truth" warning after hearing their statement. The `trueStatement` contains what the character actually knows. This creates a dynamic where:
- The investigator knows the character is lying but not the truth
- The analyst may find evidence in the archive/dossiers that contradicts the statement
- Together they deduce what really happened

---

## ArchiveEntry

```ts
{
  id: 'archive_entry_id',             // lowercase_with_underscores
  title: 'Entry Title',
  titleAr: 'عنوان المدخلة',
  tags: ['keyword1', 'keyword2', 'key_phrase'],     // what the analyst searches by
  content: 'Reference content.\nTables, facts, interpretations.\nWritten as a real Victorian reference document.\nMarkdown formatting allowed.',
  contentAr: 'المحتوى المرجعي.\nجداول، حقائق، تفسيرات.\nمكتوب كوثيقة مرجعية فيكتورية حقيقية.',
  suggestedQuestions?: [               // optional: questions the analyst can ask their partner
    'Ask your partner about the colour of the residue.',
    'Ask if the document looks recently handled or undisturbed.'
  ],
  suggestedQuestionsAr?: [
    'اسأل شريكك عن لون البقايا.',
    'اسأل إذا كانت الوثيقة تبدو وكأنها استُعملت حديثاً أم غير مضطربة.'
  ],
  isRedHerring?: true,                // optional: entry exists but has no matching evidence in the scene
}
```

### Tags

Tags are the analyst's search mechanism. When they type words in the search box, the game matches against these tags (substring match). Tags should include:
- Physical descriptors (colour, texture, smell, shape)
- Material nouns (silk, porcelain, mud, paper)
- Actions or states (forced, broken, torn, damp)

### Suggested Questions

These appear below the archive entry content as quick references. They help the analyst know what to ask their partner about. 2-3 questions per entry maximum.

### Red Herrings

Archive entries with `isRedHerring: true` exist in the archive and will appear in search results — but there is no matching evidence in the crime scene. They create analytical dead ends. Use sparingly.

---

## Document

```ts
{
  id: 'document_id',
  title: 'Document Title',
  titleAr: 'عنوان الوثيقة',
  type: 'letter' | 'record' | 'clipping' | 'report',  // one of these four
  content: 'Full document content.\nFormatted as a real historical document.\nMultiple paragraphs allowed.',
  contentAr: 'محتوى الوثيقة الكامل.\nمنسق كوثيقة تاريخية حقيقية.',
  tags: ['keyword1', 'keyword2'],      // searchable by analyst
}
```

Documents are immediately available to the analyst from the start. They contain background information that does not require the investigator to find anything first.

---

## CaseTimelineEvent

```ts
{
  id: 'event_id',
  time: '7:30 PM',                    // time string for display
  timeAr: '7:30 مساءً',
  description: 'What happened at this time. 1 sentence.',
  descriptionAr: 'ما حدث في هذا الوقت. جملة واحدة.',
}
```

The timeline is revealed only at the end (RESULT screen). It shows the objective sequence of events, helping both players understand what actually happened.

---

## Gameplay Mechanics Summary

| Mechanic | Purpose |
|----------|---------|
| **Digest** | Quick summary in clue list — what investigator sees at a glance |
| **Full Observation** | Rich text — investigator clicks "Read full" to get all details |
| **Suggested Questions** | Guides the analyst on what to ask about an archive entry |
| **Lying Characters** | `isLying` + `trueStatement` — investigator sees warning, must deduce truth |
| **Deliberation** | Review phase before accusation — shows examined clues, connections |
| **Case Brief** | Pre-game screen with case summary, stats, role reminder |
| **Timeline** | Post-game factual event sequence |
| **Missed Evidence** | Post-game list of clues not examined |

---

## Difficulty Guidelines

### easy (Tutorial Cases)
- 3-4 rooms
- 5-8 clues
- 2-3 characters (1-2 suspects)
- Clear evidence chain, obvious killer
- 2-3 archive entries, 1-2 documents
- One misleading clue maximum

### medium
- 4-6 rooms
- 8-15 clues
- 4-5 characters (3-4 suspects)
- Multiple plausible suspects
- 4-6 archive entries, 2-4 documents
- One or two lying characters
- Some clues may be misleading or atmospheric

### hard
- 6-8 rooms
- 12-20 clues
- 5-7 characters (4-5 suspects)
- Complex motive web
- 6-8 archive entries, 3-5 documents
- Multiple lying characters
- Red herring archive entries
- Requires both players to communicate thoroughly

---

## File Naming Convention

```
src/data/cases/case_<descriptive_name>.ts

Examples:
  case_ravens_gate.ts
  case_tutorial.ts
  case_soho_theatre.ts
```

Each case file exports a named constant following the pattern `<descriptiveName>Case`.

Add the case to `src/data/caseRegistry.ts`:

```ts
import { yourCase } from './cases/case_your_case'

export const cases: Case[] = [
  tutorialCase,
  sohoTheatreCase,
  ravensGateCase,
  yourCase,
]
```

Cases appear in the SELECT CASE screen in array order.

---

## Testing a New Case

1. Create the file in `src/data/cases/`
2. Add it to `src/data/caseRegistry.ts`
3. Run `cd client && npm run build` — must pass with zero errors
4. Run `npm run dev` and select the new case from the CASE FILES screen
5. Play through both roles to verify all clues, archive entries, and the solution are coherent
