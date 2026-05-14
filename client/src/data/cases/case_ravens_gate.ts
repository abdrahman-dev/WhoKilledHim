import type { Case } from '../../types/game'

export const ravensGateCase: Case = {
  id: 'ravens_gate',
  title: 'The Raven\'s Gate Affair',
  titleAr: 'قضية بوابة الغراب',
  subtitle: 'Death comes quietly to Raven\'s Gate manor. Only those who listen will hear the truth.',
  subtitleAr: 'يأتي الموت بهدوء إلى قصر بوابة الغراب. فقط من يُصغي يسمع الحقيقة.',
  setting: 'East London, November 1891',
  settingAr: 'شرق لندن، نوفمبر 1891',
  difficulty: 'medium',
  victim: 'Lord Edmund Ashworth',
  victimAr: 'اللورد إدموند أشوورث',
  killerId: 'constance_hartley',
  startingRoom: 'entrance_hall',
  rooms: [
    {
      id: 'entrance_hall',
      name: 'Entrance Hall',
      nameAr: 'قاعة المدخل',
      atmosphere: 'A wide marble-floored hall. The gaslight is turned low, casting long shadows across the walls. The air is cold and still, carrying a faint trace of beeswax. A silver salver rests on a side table by the door. The house is quiet — the kind of quiet that expects bad news.',
      atmosphereAr: 'قاعة واسعة بأرضية رخامية. ضوء الغاز منخفض، يلقي بظلال طويلة على الجدران. الهواء بارد وساكن، يحمل أثراً خافتاً من شمع العسل. صينية فضية على منضدة جانبية عند الباب. المنزل هادئ — ذلك النوع من الهدوء الذي ينتظر الأخبار السيئة.',
      connectedTo: ['drawing_room', 'staircase_landing'],
      clues: [
        {
          id: 'mud_on_mat',
          name: 'Wet Mud on Doormat',
          nameAr: 'طين رطب على حصيرة الباب',
          observation: 'A patch of wet mud on the coir mat just inside the main entrance. The impression is clear — a heavy boot, size nine approximately, with a cross-hatched sole pattern. Two sets: one pressing inward, the other outward. The outward prints are deeper at the toe, as if the person leaving was leaning forward, walking fast. The mud is dark and clay-rich, still damp to the touch. A single oak leaf, crushed, is pressed into one of the tracks.',
          observationAr: 'بقعة طين رطب على حصيرة جوز الهند داخل المدخل الرئيسي. الانطباع واضح — حذاء ثقيل، مقاس تسعة تقريباً، بنمط نعل متقاطع. مجموعتان: واحدة للداخل والأخرى للخارج. بصمات الخروج أعمق عند الأصابع، وكأن الشخص الخارج كان يميل إلى الأمام، يمشي بسرعة. الطين داكن وغني بالصلصال، لا يزال رطباً عند اللمس. ورقة بلوط مسحوقة ملتصقة بأحد الآثار.',
          isSignificant: true,
        },
        {
          id: 'calling_card',
          name: 'Visiting Card',
          nameAr: 'بطاقة زيارة',
          observation: 'A visiting card rests on the silver salver by the entrance. Cream-coloured card, black letterpress: "Dr. S. Morrow, M.D. — 14 Harley Street." The card has been handled — the lower right corner is bent upward, and the surface carries a faint oily smudge, as if someone held it between thumb and forefinger for a long time before putting it down. The smudge is recent — the oil has not fully dried.',
          observationAr: 'بطاقة زيارة على الصينية الفضية عند المدخل. بطاقة بلون كريمي، طباعة سوداء: "د. س. مورو، طبيب — 14 شارع هارلي." البطاقة استُعملت — الزاوية اليمنى السفلية مطوية لأعلى، والسطح يحمل لطخة زيتية خفيفة، وكأن أحدهم أمسكها بين الإبهام والسبابة لوقت طويل قبل أن يضعها. اللطخة حديثة — الزيت لم يجف تماماً.',
          isSignificant: false,
        },
      ],
      characters: [
        {
          id: 'constance_hartley',
          name: 'Constance Hartley',
          nameAr: 'كونستانس هارتلي',
          role: 'Personal Secretary',
          roleAr: 'السكرتيرة الشخصية',
          sceneObservation: 'Standing in the entrance hall when the investigators arrive. Her posture is correct, controlled — the kind of stillness that is maintained rather than natural. She is dressed in black, appropriate to mourning, but the creases are too sharp — she changed recently. Her hands are clasped in front of her. She watches the door.',
          sceneObservationAr: 'تقف في قاعة المدخل عند وصول المحققين. وضعيتها مستقيمة متحكمة — ذلك النوع من السكون الذي يُحافظ عليه لا الطبيعي. ترتدي الأسود، مناسب للحداد، لكن الثنيات حادة جداً — لقد تغيّرت حديثاً. يداها مشبوكتان أمامها. تراقب الباب.',
          statement: 'Lord Ashworth was in good health when I left yesterday evening. I prepared his tea as usual — he preferred it at eight. I had no cause to linger. I cannot account for what happened after.',
          statementAr: 'كان اللورد أشوورث بصحة جيدة عندما غادرت مساء أمس. حضرت له الشاي كالمعتاد — كان يفضله في الثامنة. لم يكن لدي سبب للبقاء. لا أستطيع تفسير ما حدث بعد ذلك.',
          psychProfile: 'Disciplined, methodical, operates under sustained emotional control. Capable of long-term planning under pressure. Presents composure as professional virtue — but the control is effortful; watch for micro-hesitations when asked about the accounts or the W.W.R.F. Responds to perceived injustice with calculated, delayed action rather than impulse.',
          psychProfileAr: 'منضبطة، منهجية، تعمل تحت سيطرة عاطفية مستدامة. قادرة على التخطيط طويل المدى تحت الضغط. تقدم رباطة الجأش كفضيلة مهنية — لكن السيطرة تتطلب جهداً؛ ترقب الترددات الدقيقة عند السؤال عن الحسابات أو صندوق الأرامل. تستجيب للظلم المتصور بفعل محسوب ومؤجل وليس باندفاع.',
          secretBackground: 'Has managed charitable operations independently for six years. Discovered systematic fraud in the Whitechapel fund three months ago. Has been documenting it silently since. Received a letter from a solicitor three days ago confirming the legal exposure she faces if Ashworth makes good on his threat.',
          secretBackgroundAr: 'تدير العمليات الخيرية بشكل مستقل لمدة ست سنوات. اكتشفت احتيالاً منهجياً في صندوق وايتشابل قبل ثلاثة أشهر. توثق ذلك بصمت منذ ذلك الحين. تلقت رسالة من محامٍ قبل ثلاثة أيام تؤكد المسؤولية القانونية التي تواجهها إذا نفذ أشوورث تهديده.',
          motive: 'Cornered between ruin and complicity, she acted to remove the threat.',
          motiveAr: 'محصورة بين الخراب والتواطؤ، تحركت لإزالة التهديد.',
          alibi: 'Claims to have left the manor at half past eight, after serving tea. No witness to her departure.',
          alibiAr: 'تدّعي أنها غادرت القصر في الثامنة والنصف، بعد تقديم الشاي. لا شاهد على مغادرتها.',
          isKiller: true,
        },
        {
          id: 'dr_silas_morrow',
          name: 'Dr. Silas Morrow',
          nameAr: 'الدكتور سيلاس مورو',
          role: 'Family Physician',
          roleAr: 'طبيب العائلة',
          sceneObservation: 'Waiting in the entrance hall when the investigators arrive. He has already examined the body — he is the one who called them. He is composed in the way of a man who has had time to compose himself, but his composure is thin; he blinks too often and his attention moves restlessly across the room.',
          sceneObservationAr: 'ينتظر في قاعة المدخل عند وصول المحققين. لقد فحص الجثة بالفعل — وهو من استدعاهم. هادئ بطريقة رجل أتيح له الوقت ليهدئ نفسه، لكن هدوئه رقيق؛ يرمش كثيراً وينتقل انتباهه بقلق في أرجاء الغرفة.',
          statement: 'I examined Lord Ashworth at three yesterday afternoon. His heart was under strain — it has been for years. I was not surprised to receive the call this morning, though I am — naturally — distressed. I ordered the second examination myself. If there is something irregular, I want it found.',
          statementAr: 'فحصت اللورد أشوورث في الثالثة من عصر أمس. قلبه كان تحت ضغط — وهو كذلك منذ سنوات. لم أفاجأ بتلقي الاتصال هذا الصباح، رغم أنني — بطبيعة الحال — منزعج. لقد أمرت بالفحص الثاني بنفسي. إذا كان هناك شيء غير طبيعي، أريد أن يُكشف.',
          psychProfile: 'Intelligent, conflict-averse, has spent years managing the shame of the Ashworth debt quietly. The fact that he called for the second examination is genuine — he is not the killer and is trying to clear himself preemptively, having sensed the atmosphere shifting. He is frightened but fundamentally passive.',
          psychProfileAr: 'ذكي، يتجنب الصراع، أمضى سنوات في إدارة عار دين أشوورث بصمت. حقيقة أنه طلب الفحص الثاني حقيقية — ليس هو القاتل ويحاول تبرئة نفسه استباقياً، بعد أن شعر بتغير الجو. إنه خائف لكنه سلبي في الأساس.',
          secretBackground: 'Ashworth paid off a professional complaint in 1886 — a misdiagnosis that killed a patient. The debt was financial and social. Morrow has paid it in compliance and silence ever since.',
          secretBackgroundAr: 'أشوورث سدد شكوى مهنية في 1886 — تشخيص خاطئ أدى إلى وفاة مريض. الدين كان مادياً واجتماعياً. ظل مورو يسدده بالامتثال والصمت منذ ذلك الحين.',
          motive: 'Persistent blackmail, genuine resentment. Not enough to drive him to murder.',
          motiveAr: 'ابتزاز مستمر، استياء حقيقي. ليس كافياً لدفعه للقتل.',
          alibi: 'Left the manor at four. Two patients in the evening — verifiable.',
          alibiAr: 'غادر القصر في الرابعة. مريضان في المساء — يمكن التحقق.',
          isKiller: false,
        },
      ],
    },
    {
      id: 'drawing_room',
      name: 'Drawing Room',
      nameAr: 'غرفة الاستقبال',
      atmosphere: 'A large, well-appointed room. Heavy velvet curtains, deep burgundy, drawn against the grey afternoon. A fire has burned down to embers in the marble hearth — the room is cooling. A grand piano in the corner, sheet music open but undisturbed. The air smells of woodsmoke, old leather, and something else — faintly sweet, like almonds left too long in a warm cupboard.',
      atmosphereAr: 'غرفة كبيرة مفروشة جيداً. ستائر مخملية ثقيلة باللون القرمزي الداكن، مسدلة ضد ظهر الخريف الرمادي. اشتعلت النار حتى أصبحت جمراً في المدفأة الرخامية — الغرفة تبرد. بيانو كبير في الزاوية، نوتات موسيقية مفتوحة لكن دون مساس. الهواء تفوح منه رائحة دخان الخشب والجلد العتيق وشيء آخر — حلو خافت، مثل اللوز المتروك في خزانة دافئة.',
      connectedTo: ['entrance_hall', 'study'],
      clues: [
        {
          id: 'teacup',
          name: 'Porcelain Teacup',
          nameAr: 'فنجان شاي خزفي',
          observation: 'A porcelain teacup on the side table nearest the window, not yet cleared. The interior is stained with dark residue — reddish-brown, the tea was not fully drunk. A faint, distinctly sweet odour rises from within, like overripe almonds left in a warm room. The rim has a hairline chip on the left side, barely visible unless you turn the cup to the light. The residue at the bottom is thicker than tea alone would leave — almost syrupy.',
          observationAr: 'فنجان شاي خزفي على المنضدة الجانبية الأقرب للنافذة، لم يُرفع بعد. الداخل ملطخ ببقايا داكنة — بنية محمرة، الشاي لم يُشرب بالكامل. رائحة حلوة مميزة ترتفع من الداخل، مثل اللوز الفاسد في غرفة دافئة. الحافة بها شرخ شعري على الجانب الأيسر، بالكاد يُرى إلا إذا أدرت الفنجان نحو الضوء. البقايا في القاع أثخن مما يتركه الشاي وحده — شبه شرابية.',
          isSignificant: true,
        },
        {
          id: 'chip_fragment',
          name: 'Porcelain Chip Fragment',
          nameAr: 'شظية خزف صغيرة',
          observation: 'A tiny curved fragment of white porcelain, no larger than a thumbnail, resting on the edge of the marble hearth. The edge is sharp — recently broken. The glazing matches the drawing room tea service in colour and finish. If you hold it beside the chipped teacup on the window table, the fit is exact.',
          observationAr: 'شظية خزف بيضاء صغيرة منحنية، لا تكبر ظفر الإبهام، مستندة على حافة المدفأة الرخامية. الحافة حادة — مكسورة حديثاً. التزجيج يطابق لون ولمعان خدمة الشاي في غرفة الاستقبال. إذا وضعتها بجانب فنجان الشاي المشروخ على الطاولة بجانب النافذة، التطابق تام.',
          isSignificant: true,
          revealsAfter: 'teacup',
        },
        {
          id: 'overturned_book',
          name: 'Overturned Book',
          nameAr: 'كتاب مقلوب',
          observation: 'A leather-bound volume of Tennyson\'s poetry lying face-down on the floor beside the armchair, as if dropped in haste. The spine is cracked — it has been opened wide, pressed flat. A dried flower — a pressed white rose, fragile — marks a page near the middle: "In Memoriam A.H.H." The flower has been there long enough that its colour has faded to paper-brown, but the pages around it are clean, recently turned.',
          observationAr: 'مجلد شعر تنيسون مجلد بالجلد ملقى على وجهه على الأرض بجانب الكرسي، وكأنه أُسقط بعجلة. الظهر متشقق — فُتح على نطاق واسع، ضُغط ليتسطح. وردة مجففة — وردة بيضاء مضغوطة، هشة — تعلّم صفحة قرب المنتصف: "In Memoriam A.H.H." بقيت الزهرة هناك لمدة كافية حتى تلاشى لونها إلى البني الورقي، لكن الصفحات حولها نظيفة، قلبت حديثاً.',
          isSignificant: false,
        },
        {
          id: 'tea_tray',
          name: 'Silver Tea Tray',
          nameAr: 'صينية الشاي الفضية',
          observation: 'The silver tea service tray on the sideboard against the far wall. Two cups and saucers set out, each with a spoon. One cup has been used and returned to the tray — the spoon is resting inside it, stained; the other cup sits unused on its saucer, still dry, positioned slightly apart from the first, as if set for a person who did not arrive. The used cup is the chipped one from the window — the chip matches.',
          observationAr: 'صينية الشاي الفضية على الخزانة الجانبية مقابل الجدار البعيد. فنجانان مع صحونهما، كل مع ملعقة. فنجان استُعمل وأُعيد إلى الصينية — الملعقة في داخله، ملطخة؛ الفنجان الآخر غير مستعمل على صحنه، لا يزال جافاً، موضوع بشكل منفصل قليلاً عن الأول، وكأنه لشخص لم يصل. الفنجان المستعمل هو المشروخ من النافذة — الشق متطابق.',
          isSignificant: true,
        },
      ],
      characters: [
        {
          id: 'gerald_ashworth',
          name: 'Gerald Ashworth',
          nameAr: 'جيرالد أشوورث',
          role: 'Son and Heir',
          roleAr: 'الابن والوريث',
          sceneObservation: 'In the drawing room, standing at the window with his back to the door. He turns slowly. His eyes are red at the rims but dry now — grief that has moved past the acute stage into something quieter. He looks at the investigators carefully before speaking, as if deciding how much of himself to reveal.',
          sceneObservationAr: 'في غرفة الاستقبال، واقف عند النافذة وظهره للباب. يستدير ببطء. عيناه محمرّتان لكن جافتان الآن — حزن تجاوز المرحلة الحادة إلى شيء أهدأ. ينظر إلى المحققين بعناية قبل التحدث، وكأنه يقرر كم من نفسه يكشف.',
          statement: 'Father and I had our difficulties. I won\'t pretend otherwise. But we had spoken — last week. We had come to an understanding. I had no reason to wish him harm. No reason at all.',
          statementAr: 'كانت بيني وبين والدي خلافات. لن أدّعي غير ذلك. لكننا تحدثنا — الأسبوع الماضي. توصلنا إلى تفاهم. لم يكن لدي سبب لأتمنى له الأذى. ولا سبب على الإطلاق.',
          psychProfile: 'Volatile under pressure but fundamentally decent. The estrangement was genuine and painful; the reconciliation more so. His grief is real, complicated by guilt — the argument, the silence, the reconciliation that came too late. Not capable of premeditated violence.',
          psychProfileAr: 'مزاجي تحت الضغط لكنه نبيل في الأساس. القطيعة كانت حقيقية ومؤلمة؛ المصالحة أكثر من ذلك. حزنه حقيقي، معقد بالذنب — الجدال، الصمت، المصالحة التي جاءت متأخرة جداً. غير قادر على العنف المخطط.',
          secretBackground: 'The will was amended in Gerald\'s favour seven days ago. He does not yet know the amendment was not witnessed. He believes the reconciliation was complete.',
          secretBackgroundAr: 'عُدلت الوصية لصالح جيرالد قبل سبعة أيام. لا يعلم بعد أن التعديل لم يُوثق. يعتقد أن المصالحة كانت كاملة.',
          motive: 'Had believed himself disinherited. No longer true — but he does not know that.',
          motiveAr: 'كان يعتقد أنه مُحروم من الميراث. لم يعد صحيحاً — لكنه لا يعلم ذلك.',
          alibi: 'Arrived at 7pm, dined with Lord Ashworth, left before nine. Corroborated by the housekeeper.',
          alibiAr: 'وصل الساعة 7 مساءً، تناول العشاء مع اللورد أشوورث، غادر قبل التاسعة. تؤكده مدبرة المنزل.',
          isKiller: false,
        },
      ],
    },
    {
      id: 'study',
      name: 'Study',
      nameAr: 'المكتبة',
      atmosphere: 'A dark-panelled room lined with books from floor to ceiling. The heavy oak desk dominates the centre, papers spread across it in orderly rows — ledgers, correspondence, a memorandum book. The mullioned window rattles faintly in the wind. The smell of old paper and tobacco ash hangs in the air, but underneath it — thin, insistent — the same sweet-almond note from the drawing room.',
      atmosphereAr: 'غرفة مبطنة بألواح خشبية داكنة ومحاطة بالكتب من الأرض إلى السقف. مكتب البلوط الثقيل يهيمن على المركز، أوراق منثورة عليه بصفوف منظمة — دفاتر حسابات، مراسلات، دفتر مذكرات. النافذة المقسمة ترتجف خفيفاً في الريح. رائحة الورق القديم ورماد التبغ تعلق في الهواء، لكن تحتها — رقيقة، ملحة — نفس نغمة اللوز الحلو من غرفة الاستقبال.',
      connectedTo: ['drawing_room', 'anteroom'],
      isLocked: true,
      unlockedBy: 'brass_key',
      clues: [
        {
          id: 'study_desk_drawer',
          name: 'Desk Drawer Contents',
          nameAr: 'محتويات درج المكتب',
          observation: 'The central desk drawer is unlocked but stiff — rarely opened. Inside: a small brass key on a velvet ribbon, a folded letter in feminine handwriting, and a leather memorandum book. The letter is unsigned, two lines only, written in a precise controlled hand: "I know what you have done. Every figure. Every name. Do not test me." The memorandum book contains columns of figures with dates — accounts of some kind — each entry annotated in a different hand, more hurried, the numbers large and confident.',
          observationAr: 'الدرج المركزي للمكتب غير مقفل لكنه صلب — نادراً ما يُفتح. في الداخل: مفتاح نحاسي صغير بشريط مخملي، رسالة مطوية بخط أنثوي، ودفتر مذكرات جلدي. الرسالة غير موقعة، سطران فقط، بخط دقيق متحكم: "أعرف ما فعلته. كل رقم. كل اسم. لا تختبرني." دفتر المذكرات يحتوي أعمدة أرقام بتواريخ — حسابات من نوع ما — كل مدخلة معلقة بخط مختلف، أكثر استعجالاً، الأرقام كبيرة وواثقة.',
          isSignificant: true,
        },
        {
          id: 'brass_key',
          name: 'Small Brass Key',
          nameAr: 'مفتاح نحاسي صغير',
          observation: 'A small brass key on a velvet ribbon, removed from the desk drawer. It has a paper tag attached, yellowed and handwritten: "Anteroom — Miss Hartley." The key is old — the brass has a dark patina, but the teeth are clean, recently used. The ribbon is frayed at the key end, as if the key has been turned and removed from its lock many times.',
          observationAr: 'مفتاح نحاسي صغير بشريط مخملي، أُخرج من درج المكتب. ملصق ورقي مصفر مكتوب بخط اليد: "الغرفة المجاورة — آنسة هارتلي." المفتاح قديم — النحاس عليه طبقة صدأ داكنة، لكن الأسنان نظيفة، مستعملة حديثاً. الشريط مهترئ عند طرف المفتاح، وكأن المفتاح أُدير وأُخرج من قفله مرات عديدة.',
          isSignificant: true,
          revealsAfter: 'study_desk_drawer',
        },
        {
          id: 'decanter',
          name: 'Brandy Decanter',
          nameAr: 'دورق البراندي',
          observation: 'A crystal decanter of brandy on the sideboard, half-full. Two glasses beside it — one used, rinsed but not dried; a thin film of uneven residue inside. The rinsed glass still carries a faint trace of sweetness at the rim. The decanter itself smells only of brandy — old, oaky, unremarkable. The rinsed glass is positioned closer to the unused teacup on the tray, as if the two were set out together for a single drink.',
          observationAr: 'دورق براندي كريستالي على الخزانة الجانبية، نصف ممتلئ. كأسان بجانبه — أحدهما مستعمل، مغسول لكن غير مجفف؛ طبقة رقيقة من البقايا غير المتساوية في الداخل. الكأس المغسولة لا تزال تحمل أثراً خافتاً من الحلاوة على الحافة. الدورق تفوح منه رائحة البراندي فقط — قديم، بلوطي، عادي. الكأس المغسولة أقرب إلى فنجان الشاي غير المستعمل على الصينية، وكأن الاثنين وضعا معاً لشخص واحد.',
          isSignificant: false,
        },
        {
          id: 'appointment_book',
          name: 'Desk Appointment Book',
          nameAr: 'دفتر المواعيد',
          observation: 'Lord Ashworth\'s desk diary, open to yesterday\'s date. Three entries: "11am — C.H. re: W.W.R.F. accounts. 3pm — Dr. Morrow. 7pm — Gerald." The entry for "C.H." has been underlined twice with a different pen — darker ink, heavier pressure, as if written later, over a pause. A small ink smudge sits at the end of the line, where the pen lifted.',
          observationAr: 'مفكرة مكتب اللورد أشوورث، مفتوحة على تاريخ أمس. ثلاثة مدخلات: "11 صباحاً — ج.ه. بشأن حسابات صندوق الأرامل. 3 مساءً — د. مورو. 7 مساءً — جيرالد." المدخلة "ج.ه." تحتها خط مرتين بقلم مختلف — حبر أغمق، ضغط أثقل، وكأنها كتبت لاحقاً، بعد توقف. بقعة حبر صغيرة في نهاية السطر، حيث رفع القلم.',
          isSignificant: true,
        },
      ],
      characters: [],
    },
    {
      id: 'anteroom',
      name: 'Secretary\'s Anteroom',
      nameAr: 'غرفة السكرتيرة المجاورة',
      atmosphere: 'A small, tidy room adjacent to the study. A writing desk positioned to catch the light from the single window. A filing cabinet in the corner, locked. The room smells of ink and paper, with a faint undertone of lavender — a sachet tucked somewhere, perhaps in a drawer. Everything is in its place, except for one shallow drawer left slightly ajar.',
      atmosphereAr: 'غرفة صغيرة مرتبة ملاصقة للمكتبة. مكتب للكتابة موضوع ليلتقط الضوء من النافذة الوحيدة. خزانة ملفات في الزاوية، مقفلة. رائحة الحبر والورق مع نفحة خافتة من الخزامى — كيس عطر مخبأ في درج ربما. كل شيء في مكانه، باستثناء درج ضحل تركه أحدهم مفتوحاً قليلاً.',
      connectedTo: ['study'],
      isLocked: true,
      unlockedBy: 'brass_key',
      clues: [
        {
          id: 'constances_desk',
          name: 'Secretary\'s Desk',
          nameAr: 'مكتب السكرتيرة',
          observation: 'A small writing desk, tidy but with signs of recent disruption — the blotter has been shifted an inch to the left of its usual position, the ink bottle is uncapped. A shallow drawer is slightly ajar. Inside: a folded document — two pages of columns: figures, dates, and two names recurring at the top of each page: "Whitechapel Widows\' Relief Fund" and "E. Ashworth Esq., Trustee." The figures in one column, under "Disbursement," are consistently lower than the parallel column marked "Donation Received." The discrepancy is not small.',
          observationAr: 'مكتب كتابة صغير، مرتب لكن مع علامات اضطراب حديث — النشاف تحرك بمقدار بوصة عن موضعه المعتاد، زجاجة الحبر غير مغلقة. درج ضحل مفتوح قليلاً. في الداخل: وثيقة مطوية — صفحتان من الأعمدة: أرقام، تواريخ، واسمين يتكرران في أعلى كل صفحة: "صندوق وايتشابل لإغاثة الأرامل" و"إي. أشوورث، وصي." الأرقام في عمود "الصرف" أقل باستمرار من العمود الموازي المسمى "التبرعات المستلمة." الفرق ليس صغيراً.',
          isSignificant: true,
        },
        {
          id: 'discarded_envelope',
          name: 'Discarded Envelope',
          nameAr: 'ظرف مهمل',
          observation: 'In the wastepaper basket, a torn envelope addressed to "Miss C. Hartley, private." The letter itself is gone — only the envelope remains, torn across the middle and discarded. The postmark: 11th November, three days ago. The return address on the back flap: a firm of solicitors in Gray\'s Inn, London. The paper is good quality — thick, watermarked. Someone wanted the letter destroyed but was careless with the envelope.',
          observationAr: 'في سلة المهملات، ظرف ممزق موجه إلى "الآنسة ج. هارتلي، شخصي." الرسالة نفسها اختفت — بقي الظرف فقط، ممزقاً من المنتصف ومهملاً. الطابع البريدي: 11 نوفمبر، قبل ثلاثة أيام. عنوان المرسل على اللسان الخلفي: شركة محاماة في غراي\'s إن، لندن. الورق جيد — سميك، بعلامة مائية. أراد أحدهم إتلاف الرسالة لكنه كان مهملاً مع الظرف.',
          isSignificant: true,
        },
        {
          id: 'personal_effects',
          name: 'Personal Effects',
          nameAr: 'المتعلقات الشخصية',
          observation: 'A small portrait on the desk in a silver frame — a woman, perhaps fifty, plainly dressed, unsmiling. On the reverse of the frame, in pencil, faded: "Mother, 1884." A pair of reading glasses folded beside the portrait, the left lens slightly scratched. A well-worn copy of "The Woman in White" by Wilkie Collins on the corner of the desk, with marginal annotations in the same precise, controlled hand as the letter in the study desk — pencilled comments, underlines, question marks in the margins. The book has been read many times.',
          observationAr: 'صورة صغيرة على المكتب في إطار فضي — امرأة، ربما في الخمسين، ترتدي ملابس بسيطة، غير مبتسمة. على ظهر الإطار، بقلم رصاص باهت: "أمي، 1884." نظارة قراءة مطوية بجانب الصورة، العدسة اليسرى مخدوشة قليلاً. نسخة قديمة متآكلة من "المرأة بالأبيض" لويلكي كولينز في زاوية المكتب، بحواشٍ بنفس الخط الدقيق المتحكم مثل الرسالة في درج المكتبة — تعليقات بقلم رصاص، تسطيرات، علامات استفهام في الهوامش. الكتاب قُرئ مرات عديدة.',
          isSignificant: false,
        },
      ],
      characters: [],
    },
    {
      id: 'staircase_landing',
      name: 'Staircase Landing',
      nameAr: 'هبوط الدرج',
      atmosphere: 'A wide landing on the first floor, where the main staircase splits into two narrower passages. A tall window at the end looks out over the bare November garden. The glass is cold to the touch. A notice board is fixed to the wall, covered with pinned papers — schedules, reminders, a faded Christmas card from years ago. The floorboards creak underfoot.',
      atmosphereAr: 'هبوط واسع في الطابق الأول، حيث ينقسم الدرج الرئيسي إلى ممرين أضيق. نافذة طويلة في النهاية تطل على حديقة نوفمبر العارية. الزجاج بارد عند اللمس. لوحة إعلانات مثبتة على الحائط، مغطاة بأوراق مدبوسة — جداول، تذكيرات، بطاقة عيد ميلاد باهتة من سنوات مضت. ألواح الأرضية تصدر صريراً تحت الأقدام.',
      connectedTo: ['entrance_hall', 'servants_quarters'],
      clues: [
        {
          id: 'servants_timetable',
          name: 'Staff Timetable',
          nameAr: 'جدول مواعيد الخدم',
          observation: 'A printed daily schedule pinned to the notice board: staff duties, meal times, room allocations, all written in neat copperplate. Someone has pencilled a note beside "Evening tea service (drawing room, 8pm)": "Miss H. — special request." The note is in a different hand — smaller, more cramped — squeezed into the margin. The timetable header reads "November 1891 — Raven\'s Gate Manor." A faint pencil mark underlines "special request," as if the note-writer wanted to draw attention to it.',
          observationAr: 'جدول يومي مطبوع مثبت على لوحة الإعلانات: واجبات الخدم، أوقات الوجبات، توزيع الغرف، كلها مكتوبة بخط نحاسي أنيق. شخص ما كتب بقلم الرصاص بجانب "خدمة الشاي المسائية (غرفة الاستقبال، 8 مساءً)": "الآنسة ه. — طلب خاص." الملاحظة بخط مختلف — أصغر، أكثر ضيقاً — محشورة في الهامش. رأس الجدول: "نوفمبر 1891 — قصر بوابة الغراب." علامة قلم رصاص خفيفة تحت "طلب خاص"، وكأن كاتب الملاحظة أراد جذب الانتباه إليها.',
          isSignificant: true,
        },
        {
          id: 'darkroom_key',
          name: 'Darkroom Key',
          nameAr: 'مفتاح غرفة التحميض',
          observation: 'A heavy iron key hanging on a hook labeled "Darkroom — Lord A." painted in white lettering on a small wooden plaque. The hook beside it, labeled "Anteroom — Miss H.," is empty — the brass key on its velvet ribbon is not there. The darkroom key feels cold and heavy in the hand, well-used, the iron smooth at the bow from handling.',
          observationAr: 'مفتاح حديدي ثقيل معلق على خطاف مكتوب عليه "غرفة التحميض — اللورد أ." بطلاء أبيض على لوحة خشبية صغيرة. الخطاف المجاور، المكتوب عليه "الغرفة المجاورة — آنسة ه."، فارغ — المفتاح النحاسي بشريطه المخملي ليس هناك. مفتاح غرفة التحميض بارد وثقيل في اليد، مستعمل جيداً، الحديد أملس عند الحلقة من كثرة الاستعمال.',
          isSignificant: true,
        },
      ],
      characters: [],
    },
    {
      id: 'servants_quarters',
      name: 'Servants\' Quarters',
      nameAr: 'أماكن الخدم',
      atmosphere: 'A narrow corridor on the upper floor, low-ceilinged, with doors leading to small rooms. The air is warmer here, carrying the smell of coal, cooking fat, and laundry starch. A single gas lamp burns at the far end. The floor is covered with worn linoleum, patterned in a faded diamond design. One door stands slightly ajar — Mrs. Rowe\'s room.',
      atmosphereAr: 'ممر ضيق في الطابق العلوي، سقفه منخفض، بأبواب تؤدي إلى غرف صغيرة. الهواء أكثر دفئاً هنا، يحمل رائحة الفحم والدهن والنشا. مصباح غاز وحيد يشتعل في الطرف البعيد. الأرضية مغطاة بمشمع بالٍ، بنمط ماسي باهت. باب واحد مفتوح قليلاً — غرفة السيدة رو.',
      connectedTo: ['staircase_landing', 'darkroom'],
      clues: [
        {
          id: 'mrs_rowes_room',
          name: 'Mrs. Rowe\'s Quarters',
          nameAr: 'غرفة السيدة رو',
          observation: 'Mrs. Rowe\'s room. Small, neat, sparse — a narrow bed with a grey blanket, a washstand, a wooden chair, a single shelf with three books. A small notebook on the nightstand, open to a recent page. A personal accounts ledger in tiny handwriting. The last entry: "Wages owed: £23 10s. Three months. He will pay." No further entries after that — the rest of the page is blank. A Bible beside it, heavily annotated in the margins with the same tiny hand. The ink in the latest entry is fresh — written within the last day or two.',
          observationAr: 'غرفة السيدة رو. صغيرة، مرتبة، بسيطة — سرير ضيق ببطانية رمادية، منضدة غسيل، كرسي خشبي، رف واحد بثلاثة كتب. دفتر ملاحظات صغير على المنضدة، مفتوح على صفحة حديثة. دفتر حسابات شخصي بخط صغير جداً. آخر مدخلة: "الأجور المستحقة: £23 10s. ثلاثة أشهر. سيدفع." لا مدخلات أخرى بعد ذلك — باقي الصفحة فارغ. كتاب مقدس بجانبه، مشروح بكثافة في الهوامش بنفس الخط الصغير. حبر أحدث مدخلة طازج — كُتب في اليوم أو اليومين الماضيين.',
          isSignificant: false,
        },
        {
          id: 'photographic_plates',
          name: 'Glass Photographic Plates',
          nameAr: 'ألواح تصوير زجاجية',
          observation: 'A wooden storage box at the end of the corridor, left on a side table. Inside: twelve glass photographic plates in individual wooden sleeves. Eight are exposed and developed — landscapes of the surrounding countryside, well-composed, carefully processed. Four are unexposed, still in their original wrapping. One sleeve is empty. The empty sleeve is slightly damp inside, and smells faintly chemical — and sweet, like almonds.',
          observationAr: 'صندوق تخزين خشبي في نهاية الممر، موضوع على منضدة جانبية. في الداخل: اثنا عشر لوحاً زجاجياً في أغماد خشبية فردية. ثمانية منها معرضة ومطورة — مناظر طبيعية للريف المحيط، مؤلفة جيداً، معالجة بعناية. أربعة غير معرضة، لا تزال في غلافها الأصلي. غمد واحد فارغ. الغمد الفارغ رطب قليلاً من الداخل، ورائحته كيميائية خفيفة — وحلوة، مثل اللوز.',
          isSignificant: true,
        },
      ],
      characters: [
        {
          id: 'beatrice_rowe',
          name: 'Mrs. Beatrice Rowe',
          nameAr: 'السيدة بياتريس رو',
          role: 'Housekeeper',
          roleAr: 'مدبرة المنزل',
          sceneObservation: 'In the kitchen, methodically preparing a tray she has no reason to prepare. Moving through familiar tasks to keep herself occupied. She is pale, and her hands move with the mechanical precision of someone who is not thinking about what her hands are doing. She does not turn when the investigators enter — she has been expecting them.',
          sceneObservationAr: 'في المطبخ، تعد صينية ليس لديها سبب لتحضيرها. تتحرك في المهام المألوفة لتشغل نفسها. شاحبة، ويديها تتحركان بدقة ميكانيكية لشخص لا يفكر فيما تفعل يداه. لا تستدير عند دخول المحققين — كانت تتوقعهم.',
          statement: 'I\'ve worked in this house for eleven years. I was owed money — yes. He knew it. He always meant to settle it. He wasn\'t a cruel man, only — distracted. By things that mattered more to him than I did.',
          statementAr: 'عملت في هذا المنزل لمدة أحد عشر عاماً. كان لي مال مستحق — نعم. كان يعلم. كان ينوي دائماً تسويته. لم يكن رجلاً قاسياً، فقط — مشغولاً. بأشياء كانت أهم عنده مني.',
          psychProfile: 'Stoic, loyal past the point of self-interest, genuinely attached to the household as an institution. Her resentment is real but surface-level — it has not curdled into something darker. She mourns him and is angry at herself for mourning him.',
          psychProfileAr: 'صلبة، مخلصة لأبعد من حدود المصلحة الذاتية، مرتبطة حقاً بالمنزل كمؤسسة. استياؤها حقيقي لكنه سطحي — لم يتحول إلى شيء أعمق. إنها تحد عليه وغاضبة من نفسها لأنها تحد عليه.',
          secretBackground: 'The £23 owed to her represents her entire savings buffer. She has a sister in Bristol she sends money to monthly. The payments stopped in September.',
          secretBackgroundAr: 'الـ £23 المستحقة لها تمثل مدخراتها بالكامل. لديها أخت في بريستول ترسل لها مالاً شهرياً. توقفت الدفعات في سبتمبر.',
          motive: 'Unpaid wages, accumulated resentment. Genuine but insufficient.',
          motiveAr: 'أجور غير مدفوعة، استياء متراكم. حقيقي لكن غير كافٍ.',
          alibi: 'In the kitchen from six onwards. Served supper at half past seven. The scullery maid can confirm.',
          alibiAr: 'في المطبخ من السادسة فصاعداً. قدمت العشاء في السابعة والنصف. خادمة المطبخ يمكنها التأكيد.',
          isKiller: false,
        },
      ],
    },
    {
      id: 'darkroom',
      name: 'Darkroom',
      nameAr: 'غرفة التحميض',
      atmosphere: 'A small windowless room, the walls painted a dark red — the colour of safety light. Two ceramic developing basins sit in a deep stone sink. A wooden rack of chemical bottles is fixed to the wall above it. The room smells sharply of acetic acid and something else — the same sweet-almond note that has followed through the house, stronger here, settled into the walls. A single bare bulb hangs from the ceiling, unlit.',
      atmosphereAr: 'غرفة صغيرة بلا نوافذ، الجدران مطلية بالأحمر الداكن — لون ضوء الأمان. حوضان خزفيان للتحميض في حوض حجري عميق. رف خشبي لزجاجات المواد الكيميائية مثبت على الحائط فوقه. رائحة حادة من حمض الأسيتيك وشيء آخر — نفس نغمة اللوز الحلو التي تبعته في المنزل، أقوى هنا، استقرت في الجدران. مصباح عاري معلق من السقف، غير مضاء.',
      connectedTo: ['servants_quarters'],
      isLocked: true,
      unlockedBy: 'darkroom_key',
      clues: [
        {
          id: 'chemical_bottles',
          name: 'Photographic Chemical Bottles',
          nameAr: 'زجاجات المواد الكيميائية',
          observation: 'A wooden rack fixed to the wall above the developing sink. Bottles neatly labelled in black lettering on white ground: Silver Nitrate, Sodium Thiosulfate, Pyrogallol, Potassium Bromide. One bottle is absent from the rack — its labelled slot reads "Potassium Cyanide (KCN) — Fixing Agent." The slot is empty. The absence is immediately noticeable — the other bottles are all present, all full or nearly full, their labels clean and legible. The empty slot has a fine white dust along its bottom edge. The faint sweet-almond odour is strongest here, at the rack.',
          observationAr: 'رف خشبي مثبت على الحائط فوق حوض التحميض. زجاجات مرتبة بخط أسود على أرضية بيضاء: نترات الفضة، ثيوسلفات الصوديوم، بيروغالول، بروميد البوتاسيوم. زجاجة واحدة غائبة من الرف — مكانها الموسوم يقرأ "سيانيد البوتاسيوم — مادة التثبيت." المكان فارغ. الغياب ملحوظ فوراً — باقي الزجاجات كلها موجودة، كلها ممتلئة أو شبه ممتلئة، ملصقاتها نظيفة ومقروءة. المكان الفارغ عليه غبار أبيض ناعم على حافته السفلية. رائحة اللوز الحلو الخافتة أقوى هنا، عند الرف.',
          isSignificant: true,
        },
        {
          id: 'photographic_basin',
          name: 'Developing Basin',
          nameAr: 'حوض التحميض',
          observation: 'A large ceramic developing basin in the stone sink, rinsed but not fully dry. A small residue stain along the interior edge — pale yellow, crystalline at the margin where the water has evaporated. The basin smells strongly of the same sweet-almond chemical. When the damp residue is touched, it leaves a faint chalky trace on the fingertip. The basin has been cleaned recently — the rest of the sink is dry — but this one stain was missed.',
          observationAr: 'حوض تحميض خزفي كبير في الحوض الحجري، مغسول لكن غير جاف تماماً. بقعة صغيرة من البقايا على طول الحافة الداخلية — صفراء باهتة، بلورية عند الهامش حيث تبخر الماء. رائحة الحوض قوية بنفس المادة الكيميائية الحلوة كلوز. عند لمس البقايا الرطبة، تترك أثراً طباشيرياً خفيفاً على طرف الإصبع. الحوض نُظف حديثاً — باقي الحوض جاف — لكن هذه البقعة الوحيدة فاتتهم.',
          isSignificant: true,
        },
      ],
      characters: [],
    },
  ],
  characters: [
    {
      id: 'constance_hartley',
      name: 'Constance Hartley',
      nameAr: 'كونستانس هارتلي',
      role: 'Personal Secretary',
      roleAr: 'السكرتيرة الشخصية',
      sceneObservation: 'Standing in the entrance hall when the investigators arrive. Her posture is correct, controlled — the kind of stillness that is maintained rather than natural.',
      sceneObservationAr: 'تقف في قاعة المدخل عند وصول المحققين. وضعيتها مستقيمة متحكمة — ذلك النوع من السكون الذي يُحافظ عليه لا الطبيعي.',
      statement: 'Lord Ashworth was in good health when I left yesterday evening. I prepared his tea as usual — he preferred it at eight. I had no cause to linger.',
      statementAr: 'كان اللورد أشوورث بصحة جيدة عندما غادرت مساء أمس. حضرت له الشاي كالمعتاد — كان يفضله في الثامنة. لم يكن لدي سبب للبقاء.',
      psychProfile: 'Disciplined, methodical, operates under sustained emotional control. Capable of long-term planning under pressure.',
      psychProfileAr: 'منضبطة، منهجية، تعمل تحت سيطرة عاطفية مستدامة. قادرة على التخطيط طويل المدى تحت الضغط.',
      secretBackground: 'Has managed charitable operations independently for six years. Discovered systematic fraud in the Whitechapel fund three months ago.',
      secretBackgroundAr: 'تدير العمليات الخيرية بشكل مستقل لمدة ست سنوات. اكتشفت احتيالاً منهجياً في صندوق وايتشابل قبل ثلاثة أشهر.',
      motive: 'Cornered between ruin and complicity, she acted to remove the threat.',
      motiveAr: 'محصورة بين الخراب والتواطؤ، تحركت لإزالة التهديد.',
      alibi: 'Claims to have left the manor at half past eight, after serving tea. No witness to her departure.',
      alibiAr: 'تدّعي أنها غادرت القصر في الثامنة والنصف، بعد تقديم الشاي. لا شاهد على مغادرتها.',
      isKiller: true,
    },
    {
      id: 'gerald_ashworth',
      name: 'Gerald Ashworth',
      nameAr: 'جيرالد أشوورث',
      role: 'Son and Heir',
      roleAr: 'الابن والوريث',
      sceneObservation: 'In the drawing room, standing at the window with his back to the door. His eyes are red at the rims but dry now.',
      sceneObservationAr: 'في غرفة الاستقبال، واقف عند النافذة وظهره للباب. عيناه محمرّتان لكن جافتان الآن.',
      statement: 'Father and I had our difficulties. I won\'t pretend otherwise. But we had spoken — last week. We had come to an understanding.',
      statementAr: 'كانت بيني وبين والدي خلافات. لن أدّعي غير ذلك. لكننا تحدثنا — الأسبوع الماضي. توصلنا إلى تفاهم.',
      psychProfile: 'Volatile under pressure but fundamentally decent. The estrangement was genuine and painful; the reconciliation more so. Not capable of premeditated violence.',
      psychProfileAr: 'مزاجي تحت الضغط لكنه نبيل في الأساس. القطيعة كانت حقيقية ومؤلمة؛ المصالحة أكثر من ذلك. غير قادر على العنف المخطط.',
      secretBackground: 'The will was amended in Gerald\'s favour seven days ago. He does not yet know the amendment was not witnessed.',
      secretBackgroundAr: 'عُدلت الوصية لصالح جيرالد قبل سبعة أيام. لا يعلم بعد أن التعديل لم يُوثق.',
      motive: 'Had believed himself disinherited. No longer true — but he does not know that.',
      motiveAr: 'كان يعتقد أنه مُحروم من الميراث. لم يعد صحيحاً — لكنه لا يعلم ذلك.',
      alibi: 'Arrived at 7pm, dined with Lord Ashworth, left before nine. Corroborated by the housekeeper.',
      alibiAr: 'وصل الساعة 7 مساءً، تناول العشاء مع اللورد أشوورث، غادر قبل التاسعة. تؤكده مدبرة المنزل.',
      isKiller: false,
    },
    {
      id: 'beatrice_rowe',
      name: 'Mrs. Beatrice Rowe',
      nameAr: 'السيدة بياتريس رو',
      role: 'Housekeeper',
      roleAr: 'مدبرة المنزل',
      sceneObservation: 'In the kitchen, methodically preparing a tray she has no reason to prepare. Moving through familiar tasks to keep herself occupied.',
      sceneObservationAr: 'في المطبخ، تعد صينية ليس لديها سبب لتحضيرها. تتحرك في المهام المألوفة لتشغل نفسها.',
      statement: 'I\'ve worked in this house for eleven years. I was owed money — yes. He knew it. He wasn\'t a cruel man, only distracted.',
      statementAr: 'عملت في هذا المنزل لمدة أحد عشر عاماً. كان لي مال مستحق — نعم. كان يعلم. لم يكن رجلاً قاسياً، فقط مشغولاً.',
      psychProfile: 'Stoic, loyal past the point of self-interest. Her resentment is real but surface-level — it has not curdled into something darker.',
      psychProfileAr: 'صلبة، مخلصة لأبعد من حدود المصلحة الذاتية. استياؤها حقيقي لكنه سطحي — لم يتحول إلى شيء أعمق.',
      secretBackground: 'The £23 owed to her represents her entire savings buffer. Payments to her sister stopped in September.',
      secretBackgroundAr: 'الـ £23 المستحقة لها تمثل مدخراتها بالكامل. توقفت الدفعات لأختها في سبتمبر.',
      motive: 'Unpaid wages, accumulated resentment. Genuine but insufficient.',
      motiveAr: 'أجور غير مدفوعة، استياء متراكم. حقيقي لكن غير كافٍ.',
      alibi: 'In the kitchen from six onwards. Served supper at half past seven. The scullery maid can confirm.',
      alibiAr: 'في المطبخ من السادسة فصاعداً. قدمت العشاء في السابعة والنصف. خادمة المطبخ يمكنها التأكيد.',
      isKiller: false,
    },
    {
      id: 'dr_silas_morrow',
      name: 'Dr. Silas Morrow',
      nameAr: 'الدكتور سيلاس مورو',
      role: 'Family Physician',
      roleAr: 'طبيب العائلة',
      sceneObservation: 'Waiting in the entrance hall when the investigators arrive. He is composed but his composure is thin; he blinks too often.',
      sceneObservationAr: 'ينتظر في قاعة المدخل عند وصول المحققين. هادئ لكن هدوئه رقيق؛ يرمش كثيراً.',
      statement: 'I examined Lord Ashworth at three yesterday afternoon. His heart was under strain. I ordered the second examination myself.',
      statementAr: 'فحصت اللورد أشوورث في الثالثة من عصر أمس. قلبه كان تحت ضغط. لقد أمرت بالفحص الثاني بنفسي.',
      psychProfile: 'Intelligent, conflict-averse. He called for the second examination genuinely — he is not the killer and is trying to clear himself preemptively.',
      psychProfileAr: 'ذكي، يتجنب الصراع. طلب الفحص الثاني بصدق — ليس هو القاتل ويحاول تبرئة نفسه استباقياً.',
      secretBackground: 'Ashworth paid off a professional complaint in 1886 — a misdiagnosis that killed a patient. Morrow has paid the debt in silence ever since.',
      secretBackgroundAr: 'أشوورث سدد شكوى مهنية في 1886 — تشخيص خاطئ أدى إلى وفاة مريض. ظل مورو يسدد الدين بصمت منذ ذلك الحين.',
      motive: 'Persistent blackmail, genuine resentment. Not enough to drive him to murder.',
      motiveAr: 'ابتزاز مستمر، استياء حقيقي. ليس كافياً لدفعه للقتل.',
      alibi: 'Left the manor at four. Two patients in the evening — verifiable.',
      alibiAr: 'غادر القصر في الرابعة. مريضان في المساء — يمكن التحقق.',
      isKiller: false,
    },
  ],
  archive: [
    {
      id: 'arc_prussic_acid',
      title: 'Prussic Acid — Properties and Detection',
      titleAr: 'حمض البروسيك — الخصائص والكشف',
      tags: ['almond', 'sweet', 'smell', 'odor', 'residue', 'liquid', 'poison', 'cyanide', 'tea', 'cup', 'crystalline', 'syrupy'],
      content: `PRUSSIC ACID (HYDROGEN CYANIDE, HCN)
─────────────────────────────────────
Physical state: Colourless liquid
Boiling point: 25.6°C (volatile — evaporates rapidly)
Detection threshold: 1-5 ppm (sweet almond odour)
Lethal oral dose: 1-3 mg/kg adult male
Solubility: Complete in water, tea, spirits — invisible in solution
Residue: Thin crystalline film on evaporation, pale yellow

SOURCES IN VICTORIAN HOUSEHOLDS:
  • Photographic fixing agents — Potassium Cyanide (KCN)
  • Chemical manufacturing residues
  • Certain industrial cleaning compounds

FORENSIC DETECTION:
  • Prussian blue test: ferrous sulfate + HCl → blue precipitate
  • Silver nitrate test: white precipitate in presence of HCN
  • Odour: sweet almond — detectable by trained physician
  • Residue: pale yellow crystals, sweet-almond scent persists

NOTE: Rapid onset (2-15 minutes oral). Odour is the primary field indicator.`,
      contentAr: `حمض البروسيك (سيانيد الهيدروجين، HCN)
─────────────────────────────────────
الحالة الفيزيائية: سائل عديم اللون
نقطة الغليان: 25.6 درجة مئوية (متطاير — يتبخر بسرعة)
حد الكشف: 1-5 جزء في المليون (رائحة اللوز الحلو)
الجرعة المميتة فموياً: 1-3 ملغم/كغم للبالغين
الذوبان: كامل في الماء والشاي والمشروبات الروحية — غير مرئي في المحلول
البقايا: طبقة بلورية رقيقة عند التبخر، صفراء باهتة

المصادر في المنازل الفيكتورية:
  • مواد تثبيت التصوير الفوتوغرافي — سيانيد البوتاسيوم (KCN)
  • بقايا التصنيع الكيميائي
  • مركبات تنظيف صناعية معينة

الكشف الجنائي:
  • اختبار البروسيان الأزرق: كبريتات الحديدوز + حمض الهيدروكلوريك → راسب أزرق
  • اختبار نترات الفضة: راسب أبيض في وجود HCN
  • الرائحة: لوز حلو — يمكن للطبيب المدرب اكتشافها
  • البقايا: بلورات صفراء باهتة، رائحة اللوز الحلو تستمر

ملاحظة: بداية سريعة (2-15 دقيقة فموياً). الرائحة هي المؤشر الميداني الرئيسي.`,
    },
    {
      id: 'arc_kcn_photo',
      title: 'Potassium Cyanide in Photographic Processing',
      titleAr: 'سيانيد البوتاسيوم في معالجة الصور الفوتوغرافية',
      tags: ['photographic', 'darkroom', 'chemical', 'cyanide', 'potassium', 'fixing', 'bottle', 'absent', 'basin', 'crystal', 'residue', 'sweet', 'almond', 'clear', 'fix'],
      content: `POTASSIUM CYANIDE IN PHOTOGRAPHY
─────────────────────────────────────
Standard practice: 1870-1900
Use: Clearing and fixing agent in wet-plate collodion process
Form: White crystalline solid, deliquescent
Odour: Sweet-almond when dry or in solution — characteristic
Lethal oral dose: 200-300mg adult male

TOXICOLOGY:
  • KCN releases HCN in acidic conditions (pH < 7)
  • Common beverages (tea pH 4.5-6.0) accelerate release
  • Onset: 2-15 minutes depending on stomach contents
  • Post-mortem indicator: petechial haemorrhaging, almond odour

SUPPLIERS (London):
  • Thornton Pickard Manufacturing Co. — standard supplier
  • Also available: apothecaries, photographic merchants
  • Typically labelled: "KCN — Fixing Agent — POISON"`,
      contentAr: `سيانيد البوتاسيوم في التصوير الفوتوغرافي
─────────────────────────────────────
الممارسة القياسية: 1870-1900
الاستخدام: عامل تنظيف وتثبيت في عملية الكولوديون الرطب
الشكل: صلب بلوري أبيض، مسترطب
الرائحة: لوز حلو عندما يكون جافاً أو في المحلول — مميزة
الجرعة المميتة فموياً: 200-300 ملغم للبالغين

علم السموم:
  • KCN يطلق HCN في الظروف الحمضية (pH < 7)
  • المشروبات الشائعة (الشاي pH 4.5-6.0) تسرّع الإطلاق
  • البداية: 2-15 دقيقة حسب محتويات المعدة
  • مؤشر ما بعد الوفاة: نزيف نمشي، رائحة اللوز`,
    },
    {
      id: 'arc_tea_service',
      title: 'Victorian Tea Service and Poisoning Methods',
      titleAr: 'خدمة الشاي الفيكتورية وطرق التسميم',
      tags: ['tea', 'cup', 'teacup', 'service', 'tray', 'residue', 'chip', 'porcelain', 'poison', 'method', 'timing', 'eight', 'drawing', 'room'],
      content: `EVENING TEA SERVICE — UPPER HOUSEHOLDS
─────────────────────────────────────
Standard time: 7:30-9:00 PM
Preparation: Senior domestic staff
Service: Two cups standard (host + guest)
Tray layout: Cups arranged on silver tray with spoons

POISON INTRODUCTION METHODS:
  1. Added to pot — affects all drinkers (indiscriminate)
  2. Added to specific cup before service — targeted
     Requires tracking method (marked/chipped cup)
  3. Added to cup during service — requires distraction

FORENSIC NOTES:
  • Chipped or marked cup allows poisoner to track vessel
  • Residue in unused pot or single cup is indicative
  • Thin crystalline residue on evaporation — check cup interior
  • Follow-up: compare cup condition with known set

VICTORIAN PHARMACOPOEIA:
  • Common household poisons: arsenic, cyanide, morphine, strychnine
  • Sweet-almond odour: specific to cyanide compounds
  • Cyanide in tea: rapid action, flavour masked by tannins`,
      contentAr: `خدمة الشاي المسائية — المنازل الراقية
─────────────────────────────────────
الوقت القياسي: 7:30-9:00 مساءً
الإعداد: كبير الخدم
التقديم: فنجانان قياسيان (المضيف + الضيف)
ترتيب الصينية: أكواب مرتبة على صينية فضية مع ملاعق

طرق إدخال السم:
  1. يضاف إلى الإبريق — يؤثر على جميع الشاربين (عشوائي)
  2. يضاف إلى فنجان معين قبل التقديم — موجه
     يتطلب طريقة تتبع (فنجان موسوم/مشروخ)
  3. يضاف إلى الفنجان أثناء التقديم — يتطلب إلهاء

ملاحظات جنائية:
  • الفنجان المشروخ أو الموسوم يسمح للمسمم بتتبع الإناء
  • البقايا في إبريق غير مستخدم أو فنجان واحد دالة
  • بقايا بلورية رقيقة عند التبخر — افحص داخل الفنجان`,
    },
    {
      id: 'arc_whitechapel_fund',
      title: 'Whitechapel Charitable Trust Operations 1888-1891',
      titleAr: 'عمليات صندوق وايتشابل الخيري 1888-1891',
      tags: ['whitechapel', 'charity', 'trust', 'fund', 'accounts', 'ledger', 'figures', 'secretary', 'trustee', 'ashworth', 'fraud', 'widows', 'donation', 'register', 'june', 'discrepancy'],
      content: `WHITECHAPEL WIDOWS' RELIEF FUND
─────────────────────────────────────
Established: 1888
Registered Trustee: E. Ashworth Esq.
Managing Secretary: C. Hartley
Purpose: Relief of widows in Whitechapel parish

FINANCIAL SUMMARY (1888-1890):
  Annual donations: £1,200 - £1,400
  Annual disbursements: £800 - £1,000
  Surplus retained: adequate for operations

ANOMALY (June-November 1891):
  Recorded donations: £1,847
  Disbursements logged (by C. Hartley): £512
  Trustee single-signature withdrawal (E. Ashworth): £1,200
  Remaining in account: £135
  Discrepancy: £1,200 withdrawn without corresponding disbursement

REGULATORY NOTES:
  • Dual signature required for all trustee withdrawals
  • Single-signature withdrawals >£50 require filed justification
  • No justification on record for £1,200 withdrawal
  • Charity Commission requires annual audit — next due: January 1892

PARTIES:
  • E. Ashworth — trustee, sole signatory on withdrawal
  • C. Hartley — managing secretary, documented disbursements only`,
      contentAr: `صندوق وايتشابل لإغاثة الأرامل
─────────────────────────────────────
تأسس: 1888
الوصي المسجل: إي. أشوورث
السكرتيرة المديرة: ج. هارتلي
الغرض: إغاثة الأرامل في أبرشية وايتشابل

الملخص المالي (1888-1890):
  التبرعات السنوية: £1,200 - £1,400
  المصروفات السنوية: £800 - £1,000
  الفائض المحتفظ به: مناسب للعمليات

الشذوذ (يونيو-نوفمبر 1891):
  التبرعات المسجلة: £1,847
  المصروفات المسجلة (بواسطة ج. هارتلي): £512
  سحب الوصي بتوقيع واحد (إي. أشوورث): £1,200
  المتبقي في الحساب: £135
  الفرق: £1,200 مسحوبة دون صرف مقابل`,
    },
    {
      id: 'arc_prussian_red_herring',
      title: 'Prussian Blue Test — Field Detection',
      titleAr: 'اختبار الأزرق البروسي — الكشف الميداني',
      tags: ['prussian', 'blue', 'test', 'detection', 'field', 'chemical', 'iron', 'ferric'],
      content: `PRUSSIAN BLUE TEST FOR CYANIDE
─────────────────────────────────────
Principle: Ferrous sulfate + HCN → Prussian blue complex

REAGENTS REQUIRED:
  1. Ferrous sulfate solution (FeSO₄)
  2. Hydrochloric acid (dilute, ~2M)
  3. Filter paper or clean white surface

PROCEDURE:
  a) Apply sample to filter paper
  b) Add 2-3 drops ferrous sulfate solution
  c) Add 1 drop hydrochloric acid
  d) Positive result: deep blue colour forms within 60 seconds
  e) False positives: certain organic compounds, iron oxide

LIMITATIONS:
  • Requires chemical reagents — not typically on-scene
  • Organic compounds may interfere (tannins, tea residues)
  • Not a field test for most practitioners
  • Laboratory confirmation required for legal evidence`,
      contentAr: `اختبار الأزرق البروسي للسيانيد
─────────────────────────────────────
المبدأ: كبريتات الحديدوز + HCN → معقد أزرق بروسي

الكواشف المطلوبة:
  1. محلول كبريتات الحديدوز
  2. حمض الهيدروكلوريك (مخفف)
  3. ورق ترشيح أو سطح أبيض نظيف

القيود:
  • يتطلب كواشف كيميائية — غير متوفرة عادة في الموقع
  • المركبات العضوية قد تتداخل`,
      isRedHerring: true,
    },
    {
      id: 'arc_grays_inn',
      title: 'Gray\'s Inn Solicitors — Legal Correspondence',
      titleAr: 'محامو غراي\'s إن — المراسلات القانونية',
      tags: ['solicitor', 'letter', 'legal', 'gray', 'inn', 'envelope', 'correspondence', 'private', 'threat', 'gray\'s'],
      content: `GRAY'S INN — LEGAL CORRESPONDENCE CONVENTIONS
─────────────────────────────────────
Inns of Court district: Gray's Inn, Holborn, London
Specialisation: Primarily civil and chancery matters

LETTER CLASSIFICATIONS:
  • Marked "private" → personal matter, sender prevents interception
  • Marked "confidential" → legal privilege asserted
  • Unmarked → routine professional correspondence

CONVENTIONAL MATTERS HANDLED BY GRAY'S INN:
  • Property disputes and conveyancing
  • Estate matters and probate
  • Contractual claims and commercial disputes
  • Less commonly: criminal matters where civil remedy sought first

FORENSIC SIGNIFICANCE:
  • "Private" marking to individual (not household) suggests:
    — Personal vulnerability or threat
    — Matter not intended for household discovery
    — Potential whistleblower or legal exposure`,
      contentAr: `غراي's إن — أعراف المراسلات القانونية
─────────────────────────────────────
منطقة إنس أوف كورت: غراي's إن، هولبورن، لندن
التخصص: أساساً المسائل المدنية وقضايا الصندوق

تصنيفات الرسائل:
  • موسومة "شخصي" → أمر شخصي، المرسل يمنع الاعتراض
  • موسومة "سري" → امتياز قانوني مؤكد
  • غير موسومة → مراسلات مهنية روتينية`,
    },
  ],
  documents: [
    {
      id: 'doc_post_mortem',
      title: 'Post-Mortem Examination Report',
      titleAr: 'تقرير فحص ما بعد الوفاة',
      type: 'report',
      content: `PRELIMINARY POST-MORTEM EXAMINATION REPORT
─────────────────────────────────────
Subject: Lord Edmund Ashworth
Date of Examination: 14th November 1891
Examining Physician: Dr. Silas Morrow, M.D.

EXTERNAL OBSERVATIONS:
  • Pallor consistent with rapid circulatory failure
  • Faint petechial haemorrhaging noted on sclera of both eyes
  • No external injuries, contusions, or signs of violence
  • Deceased found seated at desk — death was rapid

ORAL CAVITY:
  • Faint characteristic odour detected — described as "sweet almond"
  • No visible obstructions or abnormalities

PROVISIONAL CAUSE:
  • Uncertain — pending second examination
  • Recommended: independent medical review

NOTES:
  • Body positioned at desk, not supine — suggests collapse in situ
  • No signs of struggle or disturbance`,
      contentAr: `تقرير فحص ما بعد الوفاة الأولي
─────────────────────────────────────
الموضوع: اللورد إدموند أشوورث
تاريخ الفحص: 14 نوفمبر 1891
الطبيب الفاحص: د. سيلاس مورو

الملاحظات الخارجية:
  • شحوب متسق مع فشل دوراني سريع
  • نزيف نمشي خفيف في صلبة كلتا العينين
  • لا إصابات خارجية أو كدمات أو علامات عنف
  • المتوفى وُجد جالساً في المكتب — الموت كان سريعاً

تجويف الفم:
  • رائحة مميزة خفيفة — وُصفت بأنها "لوز حلو"
  • لا عوائق أو تشوهات ظاهرة

السبب المؤقت:
  • غير مؤكد — ينتظر الفحص الثاني
  • الموصى به: مراجعة طبية مستقلة`,
      tags: ['death', 'cause', 'examination', 'body', 'physician', 'morrow', 'heart', 'petechial', 'almond', 'odor'],
    },
    {
      id: 'doc_will',
      title: 'Lord Ashworth\'s Last Will and Testament (draft)',
      titleAr: 'الوصية الأخيرة للورد أشوورث (مسودة)',
      type: 'record',
      content: `LAST WILL AND TESTAMENT — DRAFT
─────────────────────────────────────
Testator: Lord Edmund Ashworth, Raven's Gate Manor, East London
Date of Draft: 3rd November 1891

PRINCIPAL BEQUESTS:
  • Sole heir: Gerald Ashworth (son)
  • Shropshire holdings: entirety to Gerald Ashworth
  • Whitechapel Widows' Relief Fund: £500

AMENDMENT (appended 7th November 1891):
  • Increased Gerald's share of Shropshire holdings
  • Note in margin: "Witnesses required before execution — appointment scheduled 18th November"

STATUS:
  • NOT YET LEGALLY WITNESSED
  • Two witnesses required per Statute of Frauds
  • Appointment set for 18th November — four days after death`,
      contentAr: `الوصية الأخيرة — مسودة
─────────────────────────────────────
الموصي: اللورد إدموند أشوورث، قصر بوابة الغراب، شرق لندن
تاريخ المسودة: 3 نوفمبر 1891

الوصايا الرئيسية:
  • الوريث الوحيد: جيرالد أشوورث (الابن)
  • ممتلكات شروبشاير: بالكامل لجيرالد أشوورث
  • صندوق وايتشابل لإغاثة الأرامل: £500

التعديل (أُضيف 7 نوفمبر 1891):
  • زيادة حصة جيرالد من ممتلكات شروبشاير
  • ملاحظة في الهامش: "مطلوب شهود قبل التنفيذ — موعد محدد 18 نوفمبر"

الحالة:
  • لم تُوثق قانونياً بعد
  • مطلوب شاهدان وفقاً لقانون الغش`,
      tags: ['will', 'estate', 'ashworth', 'gerald', 'heir', 'inheritance', 'amendment', 'witnessed'],
    },
    {
      id: 'doc_tea_log',
      title: 'Evening Tea Service Log — Raven\'s Gate',
      titleAr: 'سجل خدمة الشاي المسائي — بوابة الغراب',
      type: 'record',
      content: `DOMESTIC SERVICE RECORD — RAVEN'S GATE
─────────────────────────────────────
Month: November 1891

ENTRY — 13TH NOVEMBER:
  "Evening tea — drawing room — 8pm.
   Special preparation requested by Miss Hartley on behalf of Lord Ashworth.
   Single service — Lord Ashworth only.
   Miss H. to serve directly."

NOTE: Standard service log otherwise unbroken.
This entry is the ONLY occasion in six months
where Miss Hartley served tea directly,
rather than delegating to kitchen staff.`,
      contentAr: `سجل الخدمة المنزلية — بوابة الغراب
─────────────────────────────────────
الشهر: نوفمبر 1891

مدخلة — 13 نوفمبر:
  "الشاي المسائي — غرفة الاستقبال — 8 مساءً.
   طلب تحضير خاص من الآنسة هارتلي نيابة عن اللورد أشوورث.
   خدمة فردية — اللورد أشوورث فقط.
   الآنسة ه. ستقدم بنفسها."

ملاحظة: سجل الخدمة العادي غير منقطع بخلاف ذلك.
هذه المدخلة هي المرة الوحيدة في ستة أشهر
التي قدمت فيها الآنسة هارتلي الشاي بنفسها،
بدلاً من تفويضه لخدمة المطبخ.`,
      tags: ['tea', 'service', 'log', 'evening', 'special', 'request', 'hartley', 'eight', 'drawing', 'room'],
    },
    {
      id: 'doc_donation_register',
      title: 'W.W.R.F. Donation Register, June-November 1891',
      titleAr: 'سجل تبرعات صندوق الأرامل، يونيو-نوفمبر 1891',
      type: 'record',
      content: `WHITECHAPEL WIDOWS' RELIEF FUND — DONATION REGISTER
─────────────────────────────────────
Period: June - November 1891

SUMMARY:
  Total recorded donations:      £1,847
  Disbursements (C. Hartley):     £512
  Trustee withdrawal (single sig): £1,200
  Remaining in account:            £135

DOCUMENTATION NOTES:
  • Single-signature withdrawal: £1,200
  • Payee: E. Ashworth Esq. (personal account)
  • No filed justification per Charity Commission regulations
  • No corresponding disbursement to the Widows' Fund
  • Withdrawal date: 10th November 1891

SIGNATORIES:
  • E. Ashworth — authorised signatory on trustee account
  • C. Hartley — managing secretary (disbursement signatory only)
  • Dual signature not present on withdrawal`,
      contentAr: `صندوق وايتشابل لإغاثة الأرامل — سجل التبرعات
─────────────────────────────────────
الفترة: يونيو - نوفمبر 1891

الملخص:
  إجمالي التبرعات المسجلة:      £1,847
  المصروفات (ج. هارتلي):        £512
  سحب الوصي (توقيع واحد):      £1,200
  المتبقي في الحساب:             £135

ملاحظات التوثيق:
  • سحب بتوقيع واحد: £1,200`,
      tags: ['whitechapel', 'fund', 'widows', 'donation', 'register', 'figures', 'june', 'ashworth', 'discrepancy', 'accounts'],
    },
  ],
  solution: 'Lord Edmund Ashworth was poisoned with prussic acid (hydrogen cyanide) introduced into his evening tea. The poison was obtained from the manor\'s own photographic darkroom — potassium cyanide used as a fixing agent, which releases HCN in acidic conditions. The killer was Constance Hartley, his personal secretary.\n\nShe had discovered three months prior that Ashworth had been systematically defrauding the Whitechapel Widows\' Relief Fund — a charity she managed — diverting £1,200 to his own accounts. When Ashworth discovered she knew, he threatened her with dismissal and false charges of embezzlement. A solicitor\'s letter, sent three days before the murder, confirmed her legal exposure.\n\nShe arranged to serve tea directly — an unusual request that bypassed the standard kitchen service. She used a chipped teacup to track the poisoned vessel. She introduced potassium cyanide from the darkroom into Ashworth\'s tea. The empty chemical bottle slot in the darkroom, the sweet-almond residue in the drained basin, and the single chipped teacup on the table all confirm the method.\n\nThe other suspects all lacked conclusive motive: Gerald had reconciled with his father and was restored in the will; Mrs. Rowe\'s grievance was genuine but she had no access to darkroom chemicals and her alibi was firm; Dr. Morrow\'s debt was real but he is professionally cautious and called attention to the case himself.',
  solutionAr: 'لقد سُمم اللورد إدموند أشوورث بحمض البروسيك (سيانيد الهيدروجين) أُدخل إلى شاي المساء. تم الحصول على السم من غرفة التحميض الخاصة بالقصر — سيانيد البوتاسيوم المستخدم كمثبت، الذي يطلق HCN في الظروف الحمضية. القاتلة هي كونستانس هارتلي، سكرتيرته الشخصية.\n\nاكتشفت قبل ثلاثة أشهر أن أشوورث كان يختلس أموال صندوق وايتشابل لإغاثة الأرامل — وهي جمعية خيرية تديرها — محولاً £1,200 إلى حساباته الخاصة. عندما اكتشف أشوورث أنها تعلم، هددها بالفصل واتهامها بالاختلاس. رسالة محامٍ، أُرسلت قبل ثلاثة أيام من الجريمة، أكدت مسؤوليتها القانونية.\n\nرتبت لتقديم الشاي بنفسها — طلب غير اعتيادي تجاوز خدمة المطبخ المعتادة. استعملت فنجاناً مشروخاً لتتبع الإناء المسموم. أدخلت سيانيد البوتاسيوم من غرفة التحميض في شاي أشوورث. زجاجة المادة الكيميائية الفارغة في غرفة التحميض، وبقايا اللوز الحلو في حوض التحميض، والفنجان المشروخ على الطاولة، كلها تؤكد الطريقة.\n\nجميع المشتبه بهم الآخرين افتقروا إلى دافع قاطع: جيرالد تصالح مع والده وأُعيد إلى الوصية؛ استياء السيدة رو كان حقيقياً لكن لم يكن لديها وصول لمواد غرفة التحميض وأليبيها قوي؛ دين الدكتور مورو كان حقيقياً لكنه حذر مهنياً وهو من استدعى الانتباه للقضية بنفسه.',
}
