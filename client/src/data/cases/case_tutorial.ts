import type { Case } from '../../types/game'

export const tutorialCase: Case = {
  id: 'tutorial_stolen_necklace',
  title: 'The Stolen Necklace',
  titleAr: 'العقد المسروق',
  subtitle: 'A simple case to learn the ropes. Follow the clues, talk to your partner, find the truth.',
  subtitleAr: 'قضية بسيطة لتعلم الأساسيات. اتبع الأدلة، تحدث مع شريكك، اعثر على الحقيقة.',
  brief: 'Lady Margaret Weatherby\'s priceless sapphire necklace was stolen from her townhouse in Mayfair last night. The necklace was last seen at 9 PM when she retired to her room. By 7 AM this morning, it was gone. The house was locked — no signs of forced entry. The killer must be someone inside.',
  briefAr: 'عقد الياقوت الأزرق الثمين للسيدة مارغريت ويذربي سُرق من منزلها في مايفير الليلة الماضية. شوهد العقد آخر مرة في الساعة 9 مساءً عندما اعتزلت في غرفتها. بحلول الساعة 7 صباحاً، كان قد اختفى. المنزل كان مقفلاً — لا علامات اقتحام. الجاني يجب أن يكون شخصاً من الداخل.',
  setting: 'Mayfair, London — October 1892',
  settingAr: 'مايفير، لندن — أكتوبر 1892',
  difficulty: 'easy',
  victim: 'Lady Margaret Weatherby',
  victimAr: 'السيدة مارغريت ويذربي',
  killerId: 'sarah_the_maid',
  startingRoom: 'entrance_foyer',
  rooms: [
    {
      id: 'entrance_foyer',
      name: 'Entrance Foyer',
      nameAr: 'البهو الرئيسي',
      atmosphere: 'A narrow but elegant entrance hall. Polished mahogany, a single gas lamp burning low. The air smells of beeswax and old flowers. A coat rack stands against one wall, a silver salver on a side table. The floorboards are clean — recently swept.',
      atmosphereAr: 'بهو ضيق لكن أنيق. ماهوغاني مصقول، مصباح غاز وحيد يشتعل بخفوت. رائحة شمع العسل والزهور القديمة. شماعة معاطف على أحد الجدران، صينية فضية على منضدة جانبية. ألواح الأرضية نظيفة — مكنسة حديثاً.',
      connectedTo: ['drawing_room', 'stairs'],
      clues: [
        {
          id: 'footprints',
          name: 'Muddy Footprints',
          nameAr: 'آثار أقدام طينية',
          digest: 'Small footprints on the clean floor, heading from the kitchen toward the stairs. Fresh mud, still damp.',
          digestAr: 'آثار أقدام صغيرة على الأرضية النظيفة، متجهة من المطبخ نحو الدرج. طين طازج، لا يزال رطباً.',
          observation: 'A clear set of small footprints, size five or six, pressed into the freshly swept floor. The mud is still damp — deposited within the last few hours. The prints lead from the direction of the servants\' entrance at the back of the house, through the foyer, and toward the staircase. They do not return. A single petal from a white rose is pressed into one of the prints near the heel.',
          observationAr: 'مجموعة واضحة من آثار أقدام صغيرة، مقاس خمسة أو ستة، مطبوعة في الأرضية المكنسة حديثاً. الطين لا يزال رطباً — ترسب خلال الساعات القليلة الماضية. الآثار تؤدي من اتجاه مدخل الخدم في الجزء الخلفي من المنزل، عبر البهو، نحو الدرج. لا تعود. بتلة واحدة من وردة بيضاء ملتصقة بأحد الآثار قرب الكعب.',
        },
        {
          id: 'coat_rack',
          name: 'Servant\'s Coat',
          nameAr: 'معطف الخادمة',
          digest: 'A damp woollen coat left on the coat rack. A white rose petal in the pocket.',
          digestAr: 'معطف صوفي رطب على شماعة المعاطف. بتلة وردة بيضاء في الجيب.',
          observation: 'A dark woollen servant\'s coat hangs on the coat rack, still slightly damp at the shoulders, as if worn recently in the rain. The coat is plain, unmarked — the kind issued to household staff. In the left pocket: a single white rose petal, slightly wilted, and a small scrap of paper with "10 PM — kitchen door" written in pencil. The handwriting is small and neat.',
          observationAr: 'معطف صوفي داكن للخدم معلق على شماعة المعاطف، لا يزال رطباً قليلاً عند الكتفين، وكأنه ارتدي مؤخراً في المطر. المعطف بسيط، غير مميز — من النوع الذي يصدر لخدم المنزل. في الجيب الأيسر: بتلة وردة بيضاء واحدة، ذابلة قليلاً، وقصاصة ورق صغيرة مكتوب عليها "10 مساءً — باب المطبخ" بقلم رصاص. الخط صغير وأنيق.',
        },
      ],
      characters: [],
    },
    {
      id: 'drawing_room',
      name: 'Drawing Room',
      nameAr: 'غرفة الاستقبال',
      atmosphere: 'A warm, richly furnished room. Crimson velvet curtains, a roaring fire in the marble hearth. Portraits of stern ancestors line the walls. A glass-fronted cabinet displays silverware. The room is undisturbed — cushions plumped, every surface dusted. Lady Weatherby spent the evening here before retiring.',
      atmosphereAr: 'غرفة دافئة مفروشة بثراء. ستائر مخملية قرمزية، نار مشتعلة في المدفأة الرخامية. صور أسلاف صارمة تزين الجدران. خزانة زجاجية تعرض فضيات. الغرفة مرتبة — الوسائد منفوخة، كل سطح منفض. السيدة ويذربي أمضت المساء هنا قبل أن تعتزل.',
      connectedTo: ['entrance_foyer', 'study'],
      clues: [
        {
          id: 'broken_cabinet',
          name: 'Broken Cabinet Lock',
          nameAr: 'قفل الخزانة المكسور',
          digest: 'The silver cabinet\'s lock is scratched and forced open. Nothing seems missing.',
          digestAr: 'قفل خزانة الفضة مخدوش ومقتحم. لا شيء يبدو مفقوداً.',
          observation: 'The glass-fronted silver cabinet in the corner has been tampered with. The small brass lock shows fresh scratch marks — a thin blade or pick inserted hastily. The cabinet door is slightly ajar. Inside, the silverware is undisturbed — nothing appears to have been taken. The scratches are recent, the metal bright beneath the tarnish. Whoever did this was interrupted or looking for something specific.',
          observationAr: 'خزانة الفضة ذات الواجهة الزجاجية في الزاوية تم العبث بها. القفل النحاسي الصغير عليه خدوش جديدة — شفرة رفيعة أو مخلّة أدخلت على عجل. باب الخزانة مفتوح قليلاً. في الداخل، الفضية غير منزعجة — لا شيء يبدو مأخوذاً. الخدوش حديثة، المعدن لامع تحت الصدأ. من فعل هذا قوطِع أو كان يبحث عن شيء محدد.',
        },
        {
          id: 'dropped_handkerchief',
          name: 'Monogrammed Handkerchief',
          nameAr: 'منديل مطرز',
          digest: 'A handkerchief monogrammed "S.R." found under the sofa cushion.',
          digestAr: 'منديل مطرز بالأحرف "S.R." وُجد تحت وسادة الأريكة.',
          observation: 'A small white cotton handkerchief, crumpled and slightly soiled at one edge, pushed beneath the cushion of the main sofa. The monogram "S.R." is embroidered in white thread at the corner — simple, serviceable, the kind issued to staff. The soiled edge smells faintly of damp earth and rose petals.',
          observationAr: 'منديل قطني أبيض صغير، مجعد وملطخ قليلاً عند حافة واحدة، مدفوع تحت وسادة الأريكة الرئيسية. الحروف "S.R." مطرزة بخيط أبيض في الزاوية — بسيطة، عملية، من النوع الذي يصدر للخدم. الحافة الملطخة تفوح منها رائحة تراب رطب وبتلات ورد.',
        },
      ],
      characters: [
        {
          id: 'lady_weatherby',
          name: 'Lady Margaret Weatherby',
          nameAr: 'السيدة مارغريت ويذربي',
          role: 'Victim',
          roleAr: 'الضحية',
          sceneObservation: 'Seated in the drawing room when you arrive. She is pale but composed, a cashmere shawl wrapped tightly around her shoulders. She rises to greet you but her hands tremble slightly as she extends them.',
          sceneObservationAr: 'جالسة في غرفة الاستقبال عند وصولك. شاحبة لكنها هادئة، شال كشمير ملفوف بإحكام حول كتفيها. تنهض لتحيتك لكن يديها ترتجفان قليلاً عندما تمدّهما.',
          statement: 'I locked the necklace in my writing desk drawer before retiring at nine. I always do. This morning the drawer was open and the necklace was gone. I heard nothing in the night — nothing at all. Sarah brought me my evening tea at eight, as she always does.',
          statementAr: 'أغلقت العقد في درج مكتبي قبل أن أعتزل في التاسعة. هذا ما أفعله دائماً. هذا الصباح كان الدرج مفتوحاً والعقد قد اختفى. لم أسمع شيئاً في الليل — لا شيء على الإطلاق. سارة أحضرت لي شاي المساء في الثامنة، كما تفعل دائماً.',
          isLying: false,
          psychProfile: 'A woman of routine and precision. Her distress is genuine but contained — she is more angry than frightened. She trusts her staff implicitly, which may be misplaced.',
          psychProfileAr: 'امرأة منضبطة ودقيقة. انزعاجها حقيقي لكنه مضبوط — هي أكثر غضباً من خوف. تثق بخدمها بشكل مطلق، وقد يكون هذا في غير محله.',
          secretBackground: 'The sapphire necklace was insured for £500, but its sentimental value is far greater — it belonged to her late mother.',
          secretBackgroundAr: 'عقد الياقوت مؤمن عليه بمبلغ £500، لكن قيمته العاطفية أكبر بكثير — كان لوالدتها الراحلة.',
          motive: 'None — she is the victim.',
          motiveAr: 'لا يوجد — هي الضحية.',
          alibi: 'In her room from 9 PM. Found the necklace missing at 7 AM.',
          alibiAr: 'في غرفتها من 9 مساءً. وجدت العقد مفقوداً في 7 صباحاً.',
          isKiller: false,
        },
      ],
    },
    {
      id: 'study',
      name: 'Lady Weatherby\'s Study',
      nameAr: 'مكتب السيدة ويذربي',
      atmosphere: 'A small, intimate room. A mahogany writing desk sits beneath the window. The curtains are half-drawn. An ink bottle is uncapped, the pen resting beside it. The desk drawer hangs open, empty.',
      atmosphereAr: 'غرفة صغيرة حميمية. مكتب كتابة من الماهوغاني تحت النافذة. الستائر نصف مسدلة. زجاجة الحبر مفتوحة، القلم بجانبها. درج المكتب مفتوح، فارغ.',
      connectedTo: ['drawing_room'],
      clues: [
        {
          id: 'open_drawer',
          name: 'Forced Desk Drawer',
          nameAr: 'درج المكتب المقتحم',
          digest: 'The writing desk drawer is open and empty. A small key is still in the lock.',
          digestAr: 'درج المكتب مفتوح وفارغ. مفتاح صغير لا يزال في القفل.',
          observation: 'The central drawer of Lady Weatherby\'s writing desk hangs open. A small brass key remains in the lock — it has not been forced. The drawer is empty except for a single hairpin and a faint trace of face powder. The velvet lining inside the drawer has a rectangular impression where the necklace case rested — it has been removed cleanly, not taken in haste.',
          observationAr: 'الدرج المركزي لمكتب السيدة ويذربي مفتوح. مفتاح نحاسي صغير لا يزال في القفل — لم يُقتحم. الدرج فارغ باستثناء دبوس شعر واحد وأثر خفيف من بودرة الوجه. البطانة المخملية داخل الدرج عليها انطباع مستطيل حيث كانت علبة العقد — أُزيلت بهدوء، لم تؤخذ على عجل.',
        },
        {
          id: 'teacup_study',
          name: 'Half-Finished Tea',
          nameAr: 'شاي غير مكتمل',
          digest: 'A cup of tea on the desk, half-drunk. Lipstick on the rim. The tea is cold.',
          digestAr: 'فنجان شاي على المكتب، نصفه مشروب. أثر أحمر شفاه على الحافة. الشاي بارد.',
          observation: 'A porcelain teacup rests on a saucer beside the desk. The tea inside is half-drunk, now cold. A faint trace of rose-pink lipstick marks the rim — Lady Weatherby\'s colour. The spoon lies beside the cup, not in it, as if set down in haste. A small stain on the saucer, the shape of a thumbprint, suggests someone held it from underneath rather than by the handle.',
          observationAr: 'فنجان شاي خزفي على صحن بجانب المكتب. الشاي بالداخل نصف مشروب، بارد الآن. أثر خفيف من أحمر شفاه وردي على الحافة — لون السيدة ويذربي. الملعقة بجانب الفنجان، ليس بداخله، وكأنها وضعت على عجل. بقعة صغيرة على الصحن، بشكل بصمة إبهام، توحي بأن أحدهم أمسكه من الأسفل لا من المقبض.',
        },
      ],
      characters: [],
    },
    {
      id: 'stairs',
      name: 'Staircase & Upper Hall',
      nameAr: 'الدرج والرواق العلوي',
      atmosphere: 'A narrow back staircase, used by the staff. The walls are plain white, the steps worn smooth by years of use. A single window at the top overlooks the walled garden. A staff bedroom door stands open at the end of the hall.',
      atmosphereAr: 'سلم خلفي ضيق، يستخدمه الخدم. الجدران بيضاء بسيطة، الدرجات ملساء من سنوات الاستخدام. نافذة واحدة في الأعلى تطل على الحديقة المسورة. باب غرفة نوم الخدم مفتوح في نهاية الممر.',
      connectedTo: ['entrance_foyer'],
      clues: [
        {
          id: 'sarahs_room',
          name: 'Maid\'s Quarters',
          nameAr: 'غرفة الخادمة',
          digest: 'A small, tidy room. A jewellery box under the mattress contains a sapphire necklace.',
          digestAr: 'غرفة صغيرة مرتبة. علبة مجوهرات تحت الفراش تحتوي على عقد ياقوت.',
          observation: 'Sarah\'s room at the end of the servants\' corridor. The room is neat but sparse — a narrow bed, a wooden chair, a small dresser with a chipped mirror. The mattress is slightly lifted at one corner. Beneath it: a small velvet jewellery box. Inside: the missing sapphire necklace. The box also contains a folded letter — a note in the same small, neat handwriting as the scrap in the coat pocket: "Meet me at the kitchen door. 10 PM. I have what you need. — S." The letter is unsigned but the handwriting matches.',
          observationAr: 'غرفة سارة في نهاية ممر الخدم. الغرفة مرتبة لكن بسيطة — سرير ضيق، كرسي خشبي، خزانة صغيرة بمرآة مشروخة. الفراش مرفوع قليلاً في زاوية واحدة. تحته: علبة مجوهرات مخملية صغيرة. في الداخل: عقد الياقوت المفقود. العلبة تحتوي أيضاً على رسالة مطوية — ملاحظة بنفس الخط الصغير الأنيق مثل القصاصة في جيب المعطف: "قابلني عند باب المطبخ. 10 مساءً. عندي ما تحتاجه. — س." الرسالة غير موقعة لكن الخط يطابق.',
        },
      ],
      characters: [
        {
          id: 'sarah_the_maid',
          name: 'Sarah Reeves',
          nameAr: 'سارة ريفز',
          role: 'Chambermaid',
          roleAr: 'خادمة الغرف',
          sceneObservation: 'In her room, sitting on the edge of the bed, head in her hands. She looks up sharply when you enter — her eyes are red, but her expression hardens quickly into defiance.',
          sceneObservationAr: 'في غرفتها، جالسة على حافة السرير، رأسها بين يديها. ترفع رأسها بحدة عند دخولك — عيناها محمرّتان، لكن تعبيرها يتصلب بسرعة إلى تحدٍ.',
          statement: 'I didn\'t steal anything. The necklace is mine — she gave it to me. For years of service. She was going to announce it at Christmas. I was just keeping it safe.',
          statementAr: 'أنا لم أسرق شيئاً. العقد ملكي — هي أعطته لي. لسنوات الخدمة. كانت ستعلن ذلك في عيد الميلاد. كنت فقط أحتفظ به بأمان.',
          isLying: true,
          trueStatement: 'I stole it. I\'ve worked for her for seven years and she barely knows my name. She has more jewellery than she can wear. I was going to sell it and leave London forever.',
          trueStatementAr: 'أنا سرقته. عملت عندها سبع سنوات وهي بالكاد تعرف اسمي. لديها من المجوهرات ما لا تستطيع ارتداءه. كنت سأبيعه وأغادر لندن للأبد.',
          psychProfile: 'Young, impulsive, resentful of her station. Has served long enough to feel entitled to more. The theft is a cry of frustration as much as a crime of opportunity — but she is not a violent person.',
          psychProfileAr: 'صغيرة، مندفعة، مستاءة من مكانتها. خدمت طويلاً بما يكفي لتشعر أنها تستحق أكثر. السرقة هي صرخة إحباط بقدر ما هي جريمة انتهاز — لكنها ليست شخصاً عنيفاً.',
          secretBackground: 'Her mother was also a maid at this house, dismissed twenty years ago under unclear circumstances. Sarah has always felt the family owes her.',
          secretBackgroundAr: 'كانت والدتها أيضاً خادمة في هذا المنزل، فُصلت قبل عشرين عاماً في ظروف غير واضحة. سارة تشعر دائماً أن العائلة مدينة لها.',
          motive: 'Resentment and opportunity. The necklace was easily accessible.',
          motiveAr: 'استياء وفرصة. العقد كان في متناول اليد.',
          alibi: 'Claims she was in her room from 9 PM. No one can confirm.',
          alibiAr: 'تدّعي أنها كانت في غرفتها من 9 مساءً. لا أحد يستطيع التأكيد.',
          isKiller: false,
        },
      ],
    },
  ],
  characters: [
    {
      id: 'sarah_the_maid',
      name: 'Sarah Reeves',
      nameAr: 'سارة ريفز',
      role: 'Chambermaid',
      roleAr: 'خادمة الغرف',
      sceneObservation: 'In her room, sitting on the edge of the bed, head in her hands.',
      sceneObservationAr: 'في غرفتها، جالسة على حافة السرير، رأسها بين يديها.',
      statement: 'I didn\'t steal anything. The necklace is mine — she gave it to me.',
      statementAr: 'أنا لم أسرق شيئاً. العقد ملكي — هي أعطته لي.',
      isLying: true,
      trueStatement: 'I stole it. I was going to sell it and leave London forever.',
      trueStatementAr: 'أنا سرقته. كنت سأبيعه وأغادر لندن للأبد.',
      psychProfile: 'Young, impulsive, resentful. The theft is a cry of frustration, not violence.',
      psychProfileAr: 'صغيرة، مندفعة، مستاءة. السرقة صرخة إحباط، ليست عنفاً.',
      secretBackground: 'Her mother was dismissed from this house twenty years ago under unclear circumstances.',
      secretBackgroundAr: 'والدتها فُصلت من هذا المنزل قبل عشرين عاماً في ظروف غير واضحة.',
      motive: 'Resentment and opportunity.',
      motiveAr: 'استياء وفرصة.',
      alibi: 'In her room from 9 PM. No witness.',
      alibiAr: 'في غرفتها من 9 مساءً. لا شاهد.',
      isKiller: false,
    },
    {
      id: 'lady_weatherby',
      name: 'Lady Margaret Weatherby',
      nameAr: 'السيدة مارغريت ويذربي',
      role: 'Victim',
      roleAr: 'الضحية',
      sceneObservation: 'Seated in the drawing room. Pale but composed. Hands trembling slightly.',
      sceneObservationAr: 'جالسة في غرفة الاستقبال. شاحبة لكن هادئة. يداها ترتجفان قليلاً.',
      statement: 'I locked the necklace in my writing desk drawer before retiring at nine.',
      statementAr: 'أغلقت العقد في درج مكتبي قبل أن أعتزل في التاسعة.',
      isLying: false,
      psychProfile: 'A woman of routine and precision. Her distress is genuine.',
      psychProfileAr: 'امرأة منضبطة ودقيقة. انزعاجها حقيقي.',
      secretBackground: 'The necklace belonged to her late mother. Sentimental value far exceeds insurance.',
      secretBackgroundAr: 'العقد كان لوالدتها الراحلة. القيمة العاطفية تتجاوز التأمين بكثير.',
      motive: 'None — she is the victim.',
      motiveAr: 'لا يوجد — هي الضحية.',
      alibi: 'In her room from 9 PM to 7 AM.',
      alibiAr: 'في غرفتها من 9 مساءً إلى 7 صباحاً.',
      isKiller: false,
    },
  ],
  archive: [
    {
      id: 'arch_footprint_analysis',
      title: 'Footprint Analysis — Estimating Height from Shoe Size',
      titleAr: 'تحليل آثار الأقدام — تقدير الطول من مقاس الحذاء',
      tags: ['footprint', 'mud', 'boot', 'sole', 'size', 'impression', 'track', 'small', 'woman'],
      content: `FOOTPRINT TO HEIGHT ESTIMATION
─────────────────────────────────────
Method: Multiply shoe length (inches) by 6.6
Average woman (1890s): Shoe size 4-6 → height 5'0" - 5'4"
Average man (1890s): Shoe size 7-10 → height 5'6" - 5'10"

SMALL FOOTPRINT ANALYSIS:
  Size 5-6 indicates a woman or small-framed man
  Cross-hatched sole pattern → common household staff boot
  Mud composition: clay-loam with organic matter → garden soil`,
      contentAr: `تقدير الطول من مقاس الحذاء
─────────────────────────────────────
الطريقة: ضرب طول الحذف (بالبوصة) × 6.6
متوسط المرأة (1890s): مقاس 4-6 ← طول 5'0" - 5'4"
متوسط الرجل (1890s): مقاس 7-10 ← طول 5'6" - 5'10"

تحليل الآثار الصغيرة:
  المقاس 5-6 يشير إلى امرأة أو رجل صغير البنية
  نمط النعل المتقاطع → حذاء خدم منزليين شائع
  الطين: طيني طمي مع مواد عضوية → تربة حديقة`,
      suggestedQuestions: ['Ask your partner about the size and direction of the footprints. Do they enter or leave?', 'Ask if the mud is still damp — this tells you when they were made.'],
      suggestedQuestionsAr: ['اسأل شريكك عن حجم واتجاه آثار الأقدام. هل هي داخلة أم خارجة؟', 'اسأل إذا كان الطين لا يزال رطباً — هذا يخبرك متى صُنعت.'],
    },
    {
      id: 'arch_handkerchief',
      title: 'Household Linens & Monograms — Staff Identification',
      titleAr: 'أقمشة المنزل والحروف المطرزة — تعريف الخدم',
      tags: ['handkerchief', 'monogram', 'linen', 'staff', 'cotton', 'white', 'embroidered'],
      content: `STAFF LINEN IDENTIFICATION
─────────────────────────────────────
Standard practice: All staff linens monogrammed
Location: Lower right corner, white thread
Format: Initial of first name + initial of surname
Example: "S.R." → Sarah Reeves or Samuel Richards

Note: Monogrammed items are personal issue.
Finding a staff member's handkerchief in a
room they do not serve is unusual.`,
      contentAr: `تعريف أقمشة الخدم
─────────────────────────────────────
الممارسة القياسية: جميع أقمشة الخدم مطرزة
الموقع: الزاوية اليمنى السفلية، خيط أبيض
الصيغة: الحرف الأول من الاسم + الحرف الأول من اللقب`,
      suggestedQuestions: ['Ask where exactly the handkerchief was found — under a cushion suggests concealment.'],
      suggestedQuestionsAr: ['اسأل أين وجد المنديل بالضبط — تحت الوسادة يوحي بالإخفاء.'],
    },
    {
      id: 'arch_forced_locks',
      title: 'Lock Forcing Methods — Detection Guide',
      titleAr: 'طرق كسر الأقفال — دليل الكشف',
      tags: ['lock', 'forced', 'cabinet', 'scratch', 'key', 'drawer', 'brass'],
      content: `LOCK TAMPERING INDICATORS
─────────────────────────────────────
Method        | Tool Used      | Marks Left
──────────────┼────────────────┼──────────────────
Picking       | Tension wrench | Fine scratches inside
Forcing       | Pry bar/screw  | Bent metal, gouges
Key           | Correct key    | No marks at all

The study drawer was opened with a key.
The cabinet was forced with a blade —
probably by someone looking for something
other than the necklace.`,
      contentAr: `مؤشرات العبث بالأقفال
─────────────────────────────────────
الطريقة     | الأداة المستخدمة | العلامات المتبقية
─────────────┼─────────────────┼──────────────────
فتح باليد   | مفتاح شد        | خدوش دقيقة في الداخل
كسر         | عتلة            | معدن منحنٍ، حفر
مفتاح       | المفتاح الصحيح  | لا علامات`,
      suggestedQuestions: ['Ask if the desk drawer was forced or opened with a key. This tells you if the thief had access to the key.'],
      suggestedQuestionsAr: ['اسأل إذا كان درج المكتب مقتحماً أم فتح بمفتاح. هذا يخبرك إذا كان للسارق وصول للمفتاح.'],
    },
  ],
  documents: [
    {
      id: 'doc_inventory',
      title: 'Room Inventory — Weatherby Townhouse',
      titleAr: 'جرد الغرف — منزل ويذربي',
      type: 'record',
      content: `ROOM INVENTORY — WEATHERBY TOWNHOUSE
─────────────────────────────────────
Ground Floor: Entrance Foyer, Drawing Room, Dining Room, Study
First Floor: Lady Weatherby's Bedroom, Guest Room
Upper Floor: Staff Quarters (3 rooms)

STAFF:
  Sarah Reeves — Chambermaid (7 years)
  Mrs. Hargrave — Cook (12 years)
  James — Footman (2 years)

Note: Only Sarah's room is on the upper floor
accessible via the back staircase.`,
      contentAr: `جرد الغرف — منزل ويذربي
─────────────────────────────────────
الطابق الأرضي: البهو، غرفة الاستقبال، غرفة الطعام، المكتب
الطابق الأول: غرفة نوم السيدة ويذربي، غرفة الضيوف
الطابق العلوي: أماكن الخدم (3 غرف)`,
      tags: ['staff', 'room', 'inventory', 'sarah', 'weatherby', 'maid'],
    },
  ],
  timeline: [
    { id: 'tl_1', time: '8:00 PM', timeAr: '8:00 مساءً', description: 'Sarah brings Lady Weatherby her evening tea.', descriptionAr: 'سارة تحضر شاي المساء للسيدة ويذربي.' },
    { id: 'tl_2', time: '9:00 PM', timeAr: '9:00 مساءً', description: 'Lady Weatherby retires to her room. The necklace is locked in the desk drawer.', descriptionAr: 'السيدة ويذربي تعتزل في غرفتها. العقد مقفل في درج المكتب.' },
    { id: 'tl_3', time: '10:00 PM', timeAr: '10:00 مساءً', description: 'Someone enters through the kitchen door. Footprints appear on the foyer floor.', descriptionAr: 'شخص يدخل عبر باب المطبخ. تظهر آثار أقدام على أرضية البهو.' },
    { id: 'tl_4', time: '7:00 AM', timeAr: '7:00 صباحاً', description: 'Lady Weatherby discovers the necklace missing.', descriptionAr: 'السيدة ويذربي تكتشف فقدان العقد.' },
  ],
  solution: 'The thief was Sarah Reeves, the chambermaid. She used her knowledge of the household to access the study — she knew Lady Weatherby kept the key in the desk drawer lock. She left the tea cup as cover, having served tea earlier. Her muddy footprints gave her away: she entered through the kitchen door at 10 PM, went up the back stairs to her room, and hid the necklace under her mattress. The forced cabinet in the drawing room was a ruse — she broke it to suggest an outside thief was looking for valuables, but nothing was taken from it. Her lying statement about Lady Weatherby giving her the necklace collapsed when the truth came out: she stole it out of resentment after seven years of service.',
  solutionAr: 'السارقة هي سارة ريفز، خادمة الغرف. استخدمت معرفتها بالمنزل للوصول إلى المكتب — كانت تعرف أن السيدة ويذربي تترك المفتاح في قفل الدرج. تركت فنجان الشاي كغطاء، بعد أن خدمت الشاي في وقت سابق. آثار أقدامها الطينية كشفتها: دخلت عبر باب المطبخ في 10 مساءً، صعدت الدرج الخلفي إلى غرفتها، وأخفت العقد تحت فراشها. خزانة الفضة المكسورة في غرفة الاستقبال كانت خدعة — كسرتها لتوحي أن لصاً خارجياً كان يبحث عن أشياء ثمينة، لكن لم يؤخذ منها شيء. انهارت إفادتها الكاذبة عندما ظهرت الحقيقة: سرقته بدافع الاستياء بعد سبع سنوات من الخدمة.',
}
