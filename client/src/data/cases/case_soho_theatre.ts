import type { Case } from '../../types/game'

export const sohoTheatreCase: Case = {
  id: 'soho_theatre',
  title: 'The Soho Theatre Strangling',
  titleAr: 'خنق مسرح سو هو',
  subtitle: 'A celebrated actress is found dead in her dressing room between acts. The theatre is full of suspects — and secrets.',
  subtitleAr: 'ممثلة مشهورة توجد ميتة في غرفة ملابسها بين الفصول. المسرح مليء بالمشتبه بهم — والأسرار.',
  brief: 'The body of Miss Cordelia Vance, 34, leading lady of the Lyceum Theatre in Soho, was discovered during the second act of "The Duchess of Malfi" on the night of 3rd December 1891. She had been strangled with a silk scarf from her own costume trunk. The dressing room door was locked from the inside — but a hidden panel behind the costume rack leads to the stage-left corridor. The theatre was packed. The killer was someone who knew the theatre intimately.',
  briefAr: 'جثة الآنسة كورديليا فانس، 34 عاماً، نجمة مسرح ليسيوم في سو هو، اكتُشفت خلال الفصل الثاني من مسرحية "دوقة مالفاي" ليلة 3 ديسمبر 1891. خُنقت بوشاح حريري من صندوق ملابسها. باب غرفة الملابس كان مقفلاً من الداخل — لكن لوحاً مخفياً خلف حامل الملابس يؤدي إلى ممر ما وراء الكواليس. المسرح كان مكتظاً. القاتل كان شخصاً يعرف المسرح intimately.',
  setting: 'Lyceum Theatre, Soho, London — December 1891',
  settingAr: 'مسرح ليسيوم، سو هو، لندن — ديسمبر 1891',
  difficulty: 'medium',
  victim: 'Miss Cordelia Vance',
  victimAr: 'الآنسة كورديليا فانس',
  killerId: 'alex_cordelia_brother',
  startingRoom: 'stage_backstage',
  rooms: [
    {
      id: 'stage_backstage',
      name: 'Backstage Corridor',
      nameAr: 'ممر ما وراء الكواليس',
      atmosphere: 'A narrow gaslit corridor behind the stage. Ropes and sandbags hang overhead. The air smells of dust, paint, and gas. Costume racks line the walls. Footsteps echo from the stage — the performance continues, oblivious. A single door stands ajar: Cordelia\'s dressing room.',
      atmosphereAr: 'ممر ضيق مضاء بالغاز خلف المسرح. حبال وأكياس رمل معلقة في الأعلى. رائحة الغبار والطلاء والغاز. أرفف الملابس على الجدران. أصداء خطى من المسرح — العرض مستمر، غافل. باب واحد مفتوح قليلاً: غرفة ملابس كورديليا.',
      connectedTo: ['dressing_room', 'green_room'],
      clues: [
        {
          id: 'costume_rack',
          name: 'Disturbed Costume Rack',
          nameAr: 'حامل ملابس مضطرب',
          digest: 'A heavy costume rack has been pushed aside, revealing a hidden panel in the wall.',
          digestAr: 'حامل ملابس ثقيل دُفع جانباً، كاشفاً عن لوح مخفي في الجدار.',
          observation: 'A heavy wooden costume rack on wheels has been moved approximately two feet from its usual position — the dust marks on the floorboards show where it normally sits. Behind it, a section of the wall panel is loose — a secret door, approximately three feet wide, leading directly to the stage-left wing. The latch is well-oiled, recently used. The crack in the panel reveals a glimpse of the stage lights beyond.',
          observationAr: 'حامل ملابس خشبي ثقيل بعجلات دُفع مسافة قدمين تقريباً من موضعه المعتاد — علامات الغبار على ألواح الأرضية تظهر مكانه الطبيعي. خلفه، لوح من الجدار مرتخٍ — باب سري، عرضه حوالي ثلاثة أقدام، يؤدي مباشرة إلى جناح يسار المسرح. المزلاج مزيت جيداً، استُعمل حديثاً. الشق في اللوح يكشف لمحة من أضواء المسرح في الخارج.',
        },
        {
          id: 'dropped_program',
          name: 'Torn Programme',
          nameAr: 'برنامج ممزق',
          digest: 'A theatre programme, torn in half, found near the hidden panel.',
          digestAr: 'برنامج مسرحي، ممزق إلى نصفين، وُجد بالقرب من اللوح المخفي.',
          observation: 'A single-page programme for tonight\'s performance of "The Duchess of Malfi" lies crumpled on the floor near the costume rack. It has been torn in half — the tear is fresh, the paper still crisp. The torn edge reveals a handwritten note in the margin: "C — I know. Meet me after the show. We need to talk. — A" The handwriting is elegant, clearly male, written with a fountain pen. The ink has not fully dried — written within the last hour.',
          observationAr: 'برنامج من صفحة واحدة لعرض الليلة من "دوقة مالفاي" ملقى مجعداً على الأرض بالقرب من حامل الملابس. ممزق إلى نصفين — التمزق حديث، الورق ما زال نظيفاً. الحافة الممزقة تكشف عن ملاحظة مكتوبة بخط اليد في الهامش: "ك — أعرف. قابليني بعد العرض. نحتاج للتحدث. — أ" الخط أنيق، يبدو ذكراً، كتب بقلم حبر. الحبر لم يجف تماماً — كتب خلال الساعة الماضية.',
        },
      ],
      characters: [],
    },
    {
      id: 'dressing_room',
      name: 'Cordelia\'s Dressing Room',
      nameAr: 'غرفة ملابس كورديليا',
      atmosphere: 'A small, cluttered room. A lighted mirror surrounded by bulbs, a chaise lounge, costume trunks stacked against one wall. The air is thick with face powder, perfume, and something metallic — blood. A silk scarf lies coiled on the floor beside the overturned vanity stool. The room was the scene of a struggle.',
      atmosphereAr: 'غرفة صغيرة مزدحمة. مرآة مضاءة محاطة بالمصابيح، أريكة استرخاء، صناديق ملابس مكدسة على أحد الجدران. الهواء كثيف ببودرة الوجه والعطر وشيء معدني — دم. وشاح حريري ملتف على الأرض بجانب كرسي الزينة المقلوب. الغرفة كانت مسرح عراك.',
      connectedTo: ['stage_backstage'],
      clues: [
        {
          id: 'silk_scarf',
          name: 'Silk Scarf',
          nameAr: 'الوشاح الحريري',
          digest: 'A torn silk scarf on the floor. The murder weapon. Monogrammed "A.M." at one corner.',
          digestAr: 'وشاح حريري ممزق على الأرض. أداة الجريمة. مطرز بالأحرف "A.M." في إحدى الزوايا.',
          observation: 'A long silk scarf in deep burgundy, torn at one end, lies on the floor beside the overturned stool. The fabric is strong but has been twisted and pulled with force — the tear is lengthwise, indicating the fabric was pulled tight around something and gave way. A monogram at one corner reads "A.M." in gold thread. The scarf is from a recent production — the costume tag still attached reads "The Duchess of Malfi — Act II — C.V."',
          observationAr: 'وشاح حريري طويل باللون العنابي الداكن، ممزق من أحد طرفيه، ملقى على الأرض بجانب الكرسي المقلوب. القماش قوي لكنه لُوي وشُد بقوة — التمزق طولي، مما يشير إلى أن القماش شُد بإحكام حول شيء ثم انقطع. حروف مطرزة في إحدى الزوايا تقرأ "A.M." بخيط ذهبي. الوشاح من إنتاج حديث — بطاقة الملابس لا تزال ملصقة تقرأ "دوقة مالفاي — الفصل الثاني — ك.ف."',
        },
        {
          id: 'overturned_chair',
          name: 'Overturned Vanity Stool',
          nameAr: 'كرسي الزينة المقلوب',
          digest: 'The vanity stool is overturned. A broken fingernail lies under it.',
          digestAr: 'كرسي الزينة مقلوب. ظفر مكسور تحته.',
          observation: 'The velvet vanity stool has been knocked over — it lies on its side, one leg cracked. Beneath it: a single broken fingernail, painted deep red, with a small fragment of dark fabric caught under the nail. The nail is real, broken at the quick — there is a trace of blood at the base. The fabric fragment is dark wool, not silk — possibly from the attacker\'s clothing.',
          observationAr: 'كرسي الزينة المخملي مقلوب — على جانبه، إحدى قوائمه متشققة. تحته: ظفر مكسور واحد، مطلي بالأحمر الداكن، مع شظية صغيرة من القماش الداكن عالقة تحت الظفر. الظفر حقيقي، مكسور من الجذر — هناك أثر دم في القاعدة. شظية القماش من صوف داكن، ليست حريراً — ربما من ملابس المهاجم.',
        },
        {
          id: 'cordial_letter',
          name: 'Unsigned Letter',
          nameAr: 'رسالة غير موقعة',
          digest: 'A crumpled letter in the wastebasket: "You have one week to pay what you owe. I will not ask again."',
          digestAr: 'رسالة مجعدة في سلة المهملات: "لديك أسبوع واحد لتدفع ما عليك. لن أسأل مرة أخرى."',
          observation: 'A crumpled letter retrieved from the wastepaper basket. The paper is expensive, watermarked. The message is typed — a Remington typewriter, the same model used by the theatre\'s box office. Two lines only: "You have one week to pay what you owe. I will not ask again." No signature, no address. The envelope is missing. The paper carries a faint scent of lavender — the same perfume Cordelia wore.',
          observationAr: 'رسالة مجعدة استُخرجت من سلة المهملات. الورق ثمين، عليه علامة مائية. الرسالة مكتوبة على آلة كاتبة — ريمينغتون، نفس النوع المستخدم في شباك التذاكر. سطران فقط: "لديك أسبوع واحد لتدفع ما عليك. لن أسأل مرة أخرى." لا توقيع، لا عنوان. الظرف مفقود. الورق يحمل رائحة خزامى خفيفة — نفس عطر كورديليا.',
        },
      ],
      characters: [],
    },
    {
      id: 'green_room',
      name: 'Green Room',
      nameAr: 'غرفة الانتظار',
      atmosphere: 'A comfortable lounge where actors wait between scenes. Overstuffed sofas, a piano in the corner, faded playbills on the walls. A tea urn sits on a sideboard. Tonight, the room is unusually quiet — the cast mills about in hushed clusters, stealing glances at the dressing room door.',
      atmosphereAr: 'صالة استراحة مريحة حيث ينتظر الممثلون بين المشاهد. أريكة وثيرة، بيانو في الزاوية، إعلانات مسرحية باهتة على الجدران. إبريق شاي على خزانة جانبية. الليلة، الغرفة هادئة بشكل غير معتاد — طاقم التمثيل يتجول في مجموعات هادئة، يرمقون نظرات خاطفة نحو باب غرفة الملابس.',
      connectedTo: ['stage_backstage'],
      clues: [
        {
          id: 'rehearsal_schedule',
          name: 'Rehearsal Schedule',
          nameAr: 'جدول البروفات',
          digest: 'A rehearsal schedule pinned to the notice board. Someone has crossed out Cordelia\'s name and written "FINAL" beside it.',
          digestAr: 'جدول بروفات مثبت على لوحة الإعلانات. شخص ما شطب اسم كورديليا وكتب "نهائي" بجانبه.',
          observation: 'A printed rehearsal schedule for the week pinned to the corkboard. Cordelia\'s name appears for every evening session. Someone has crossed through her name on tomorrow\'s entry with a single red line and added "FINAL" in the margin, underlined twice, in red ink. The pen used is still on the sideboard — a red fountain pen, recently used, the cap left off.',
          observationAr: 'جدول بروفات مطبوع للأسبوع مثبت على لوحة الفلين. اسم كورديليا يظهر في كل جلسة مسائية. شخص ما شطب اسمها في مدخلة الغد بخط أحمر واحد وأضاف "نهائي" في الهامش، تحته خط مرتين، بحبر أحمر. القلم المستخدم لا يزال على الخزانة الجانبية — قلم حبر أحمر، استُعمل حديثاً، الغطاء متروك.',
        },
        {
          id: 'financial_ledger',
          name: 'Theatre Ledger',
          nameAr: 'دفتر حسابات المسرح',
          digest: 'A small ledger book behind the piano. Several pages are torn out.',
          digestAr: 'دفتر حسابات صغير خلف البيانو. عدة صفحات ممزقة.',
          observation: 'A small leather-bound ledger, left carelessly behind the piano. The cover reads "Lyceum Theatre — Private Accounts." Inside, several pages have been torn out — the stubs remain, showing columns of figures. The most recent entry, partially legible, reads: "...alance owed: £840. Payment due 5 Dec. Note: C.V. has been notified twice." The writing is precise, clearly male, matching the torn programme note.',
          observationAr: 'دفتر حسابات صغير مجلد بالجلد، ترك بإهمال خلف البيانو. الغلاف يقرأ "مسرح ليسيوم — حسابات خاصة." في الداخل، عدة صفحات ممزقة — بقايا الصفحات تظهر أعمدة أرقام. أحدث مدخلة، مقروءة جزئياً: "...balance owed: £840. Payment due 5 Dec. Note: C.V. has been notified twice." الكتابة دقيقة، يبدو أنها لرجل، تطابق الملاحظة في البرنامج الممزق.',
        },
      ],
      characters: [
        {
          id: 'alex_cordelia_brother',
          name: 'Alexander Vance',
          nameAr: 'ألكسندر فانس',
          role: 'Stage Manager / Brother',
          roleAr: 'مدير المسرح / الأخ',
          sceneObservation: 'Standing near the green room door, arms crossed, watching the corridor. He is pale, his collar loosened, but his eyes are dry. He speaks to no one — only watches.',
          sceneObservationAr: 'واقف قرب باب غرفة الانتظار، ذراعاه متقاطعتان، يراقب الممر. شاحب، ياقته مفتوحة، لكن عيناه جافتان. لا يتحدث مع أحد — فقط يراقب.',
          statement: 'I was in the lighting booth during the first act. I saw nothing. Cordelia and I had our differences — she was my sister, I loved her, but she was impossible. The debt was real. I was trying to protect the theatre, not kill her.',
          statementAr: 'كنت في غرفة الإضاءة خلال الفصل الأول. لم أر شيئاً. كان بيني وبين كورديليا خلافات — كانت أختي، أحببتها، لكنها كانت مستحيلة. الدين كان حقيقياً. كنت أحاول حماية المسرح، لا قتلها.',
          isLying: true,
          trueStatement: 'I killed her. She was draining the theatre dry — £840 in debts, and more every month. I am the stage manager and her own brother. She thought I would always cover for her. Tonight I told her I would not. She laughed at me. I did not mean to kill her — only to frighten her. The scarf was too tight.',
          trueStatementAr: 'أنا قتلتها. كانت تستنزف المسرح — £840 ديوناً، والمزيد كل شهر. أنا مدير المسرح وأخوها. ظنت أنني سأستمر في تغطيتها. الليلة أخبرتها أنني لن أفعل. ضحكت علي. لم أقصد قتلها — فقط إخافتها. الوشاح كان ضيقاً جداً.',
          psychProfile: 'A man who has spent his life cleaning up after others. His love for his sister was real but exhausted — he has been paying her debts for years. The killing was not planned but the confrontation was inevitable. He is in shock, not grief.',
          psychProfileAr: 'رجل أمضى حياته في تنظيف فوضى الآخرين. حبه لأخته كان حقيقياً لكنه استنفد — كان يدفع ديونها لسنوات. القتل لم يكن مخططاً لكن المواجهة كانت حتمية. هو في حالة صدمة، لا حزن.',
          secretBackground: 'Cordelia\'s debts threatened to close the theatre. Alexander had taken out a personal loan to cover her previous shortfall. He was facing financial ruin.',
          secretBackgroundAr: 'ديون كورديليا هددت بإغلاق المسرح. ألكسندر حصل على قرض شخصي لتغطية عجزها السابق. كان يواجه الخراب المالي.',
          motive: 'Financial desperation. His sister\'s debts were destroying the theatre and his life.',
          motiveAr: 'يأس مالي. ديون أخته كانت تدمر المسرح وحياته.',
          alibi: 'Claims he was in the lighting booth. No one can confirm — the booth was empty for ten minutes during the scene change.',
          alibiAr: 'يدّعي أنه كان في غرفة الإضاءة. لا أحد يستطيع التأكيد — المقصورة كانت فارغة لمدة عشر دقائق أثناء تغيير المشهد.',
          isKiller: true,
        },
        {
          id: 'roland_march',
          name: 'Roland March',
          nameAr: 'رولاند مارش',
          role: 'Leading Man',
          roleAr: 'الممثل الرئيسي',
          sceneObservation: 'Pacing in the green room, still in costume. His face is streaked with stage makeup and tears, but the tears are careful — theatrical. He keeps glancing at the dressing room door, then away.',
          sceneObservationAr: 'يمشي بقلق في غرفة الانتظار، لا يزال بزي المسرح. وجهه ملطخ بمكياج المسرح والدموع، لكن الدموع محسوبة — مسرحية. يلقي نظرات خاطفة نحو باب غرفة الملابس، ثم يحيد بصره.',
          statement: 'Cordelia and I were to be married. I loved her. I would never harm her. Yes, we argued — she had a temper, but so do I. It meant nothing. I was on stage when it happened — forty witnesses saw me.',
          statementAr: 'كنا سنتزوج أنا وكورديليا. أحببتها. لم أكن لأؤذيها أبداً. نعم، تشاجرنا — كانت حادة الطبع، وأنا كذلك. لم يكن يعني شيئاً. كنت على المسرح حين حدث ذلك — أربعون شاهداً رأوني.',
          isLying: false,
          psychProfile: 'A performer through and through, even in grief. His emotions are genuine but he cannot express them without performance. His love for Cordelia was real, but their relationship was volatile and exhausting.',
          psychProfileAr: 'ممثل حتى النخاع، حتى في الحزن. عواطفه حقيقية لكنه لا يستطيع التعبير عنها دون تمثيل. حبه لكورديليا كان حقيقياً، لكن علاقتهما كانت متقلبة ومرهقة.',
          secretBackground: 'Cordelia had broken off their engagement three days ago. He has not told anyone. The argument in the green room last night was witnessed by the stagehands.',
          secretBackgroundAr: 'كورديليا فسخت خطوبتهما قبل ثلاثة أيام. لم يخبر أحداً. الشجار في غرفة الانتظار الليلة الماضية شهده عمال المسرح.',
          motive: 'Jealousy and rejection. Furious at being humiliated.',
          motiveAr: 'غيرة ورفض. غاضب من الإذلال.',
          alibi: 'On stage during the murder — confirmed by the cast and crew.',
          alibiAr: 'على المسرح أثناء الجريمة — يؤكده طاقم التمثيل والعمال.',
          isKiller: false,
        },
      ],
    },
    {
      id: 'lighting_booth',
      name: 'Lighting Booth',
      nameAr: 'غرفة الإضاءة',
      atmosphere: 'A cramped platform above the stage-right wing. Gas valves and control levers line the walls. A small window overlooks the stage. The room smells of oil and hot metal. A stool stands before the control panel.',
      atmosphereAr: 'منصة ضيقة فوق الجناح الأيمن للمسرح. صمامات الغاز وأذرع التحكم على الجدران. نافذة صغيرة تطل على المسرح. رائحة الزيت والمعدن الساخن. كرسي أمام لوحة التحكم.',
      connectedTo: ['stage_backstage'],
      isLocked: true,
      unlockedBy: 'backstage_key',
      clues: [
        {
          id: 'bloody_cufflink',
          name: 'Bloodied Cufflink',
          nameAr: 'زر كم ملطخ بالدم',
          digest: 'A gold cufflink with the initial "V" found on the booth floor. Traces of blood on the edge.',
          digestAr: 'زر كم ذهبي بالحرف "V" وُجد على أرضية المقصورة. آثار دم على الحافة.',
          observation: 'A single gold cufflink, monogrammed "V", lies on the floor of the lighting booth near the control panel. The edge is smeared with a dark red substance — not stage paint, not rust. The cufflink is expensive, heavy — the kind worn by a man of means. The shirt it came from would have been dark wool. The floor beneath it is dusty, undisturbed until this moment.',
          observationAr: 'زر كم ذهبي واحد، مطرز بالحرف "V"، على أرضية غرفة الإضاءة بالقرب من لوحة التحكم. الحافة ملطخة بمادة حمراء داكنة — ليس طلاء مسرح، ليس صدأ. زر الكم ثمين، ثقيل — من النوع الذي يرتديه ميسور الحال. القميص الذي أتى منه كان من الصوف الداكن. الأرضية تحته مغبرة، غير مضطربة حتى هذه اللحظة.',
        },
        {
          id: 'backstage_key',
          name: 'Booth Key',
          nameAr: 'مفتاح المقصورة',
          digest: 'A brass key labelled "DR — Dressing Room" on a hook beside the booth door.',
          digestAr: 'مفتاح نحاسي مكتوب عليه "غ.م — غرفة ملابس" على خطاف بجانب باب المقصورة.',
          observation: 'A brass key hangs on a hook beside the lighting booth door. A small paper tag is attached: "DR — Dressing Room." The key is labelled clearly, visible to anyone who enters the booth. The key is warm to the touch — recently used. The lighting booth has a clear view of the hidden panel entrance to Cordelia\'s dressing room through a gap in the floorboards.',
          observationAr: 'مفتاح نحاسي معلق على خطاف بجانب باب غرفة الإضاءة. بطاقة ورقية صغيرة ملصقة: "غ.م — غرفة ملابس." المفتاح واضح، مرئي لأي شخص يدخل المقصورة. المفتاح دافئ عند اللمس — استُعمل حديثاً. غرفة الإضاءة لها رؤية واضحة لمدخل اللوح المخفي لغرفة كورديليا من خلال فجوة في ألواح الأرضية.',
        },
      ],
      characters: [],
    },
  ],
  characters: [
    {
      id: 'alex_cordelia_brother',
      name: 'Alexander Vance',
      nameAr: 'ألكسندر فانس',
      role: 'Stage Manager / Brother',
      roleAr: 'مدير المسرح / الأخ',
      sceneObservation: 'Standing near the green room door, arms crossed, watching.',
      sceneObservationAr: 'واقف قرب باب غرفة الانتظار، ذراعاه متقاطعتان، يراقب.',
      statement: 'I was in the lighting booth during the first act. I saw nothing.',
      statementAr: 'كنت في غرفة الإضاءة خلال الفصل الأول. لم أر شيئاً.',
      isLying: true,
      trueStatement: 'I killed her. She was draining the theatre dry. The scarf was too tight.',
      trueStatementAr: 'أنا قتلتها. كانت تستنزف المسرح. الوشاح كان ضيقاً جداً.',
      psychProfile: 'A man exhausted by cleaning up after others. His love for his sister was real but spent.',
      psychProfileAr: 'رجل منهك من تنظيف فوضى الآخرين. حبه لأخته كان حقيقياً لكنه استنفد.',
      secretBackground: 'Cordelia\'s debts threatened to close the theatre. Alexander had taken out a personal loan.',
      secretBackgroundAr: 'ديون كورديليا هددت بإغلاق المسرح. ألكسندر حصل على قرض شخصي.',
      motive: 'Financial desperation. His sister\'s debts were destroying the theatre.',
      motiveAr: 'يأس مالي. ديون أخته كانت تدمر المسرح.',
      alibi: 'Claims he was in the lighting booth. No confirmation for a 10-minute gap.',
      alibiAr: 'يدّعي أنه كان في غرفة الإضاءة. لا تأكيد لفجوة 10 دقائق.',
      isKiller: true,
    },
    {
      id: 'roland_march',
      name: 'Roland March',
      nameAr: 'رولاند مارش',
      role: 'Leading Man',
      roleAr: 'الممثل الرئيسي',
      sceneObservation: 'Pacing in the green room, still in costume. Tears mixed with stage makeup.',
      sceneObservationAr: 'يمشي بقلق في غرفة الانتظار، لا يزال بزي المسرح. دموع ممتزجة بمكياج المسرح.',
      statement: 'Cordelia and I were to be married. I loved her. I would never harm her.',
      statementAr: 'كنا سنتزوج أنا وكورديليا. أحببتها. لم أكن لأؤذيها أبداً.',
      isLying: false,
      psychProfile: 'A performer even in grief. His emotions are genuine but theatrical.',
      psychProfileAr: 'ممثل حتى في الحزن. عواطفه حقيقية لكنها مسرحية.',
      secretBackground: 'Cordelia broke off their engagement three days ago. He has not told anyone.',
      secretBackgroundAr: 'كورديليا فسخت خطوبتهما قبل ثلاثة أيام. لم يخبر أحداً.',
      motive: 'Jealousy and rejection.',
      motiveAr: 'غيرة ورفض.',
      alibi: 'On stage. Confirmed by 40 witnesses.',
      alibiAr: 'على المسرح. يؤكده 40 شاهداً.',
      isKiller: false,
    },
    {
      id: 'lavinia_cordelia_maid',
      name: 'Lavinia Croft',
      nameAr: 'لافينيا كروفت',
      role: 'Lady\'s Maid',
      roleAr: 'خادمة شخصية',
      sceneObservation: 'Sitting alone in a corner of the green room, clutching a handkerchief. She is crying quietly, but her eyes are sharp — watching everyone who enters.',
      sceneObservationAr: 'جالسة وحدها في زاوية غرفة الانتظار، ممسكة بمنديل. تبكي بهدوء، لكن عينيها حادتان — تراقب كل من يدخل.',
      statement: 'I was ironing Cordelia\'s costume for the third act in the laundry room. I heard nothing, saw nothing. She was a good mistress. A hard mistress. But good.',
      statementAr: 'كنت أكوي زي كورديليا للفصل الثالث في غرفة الغسيل. لم أسمع شيئاً، لم أر شيئاً. كانت سيدة جيدة. قاسية. لكن جيدة.',
      isLying: true,
      trueStatement: 'I saw Alexander go into the lighting booth just before the second act. He was not there when I came back past. I did not tell anyone because I was frightened. And because Cordelia owed me six months\' wages, and now I will never be paid.',
      trueStatementAr: 'رأيت ألكسندر يدخل غرفة الإضاءة قبل الفصل الثاني مباشرة. لم يكن هناك عندما مررت مجدداً. لم أخبر أحداً لأنني كنت خائفة. ولأن كورديليا كانت مدينة لي بستة أشهر أجر، والآن لن أتقاضاه أبداً.',
      psychProfile: 'Loyal but pragmatic. She served Cordelia faithfully but without illusion. She has her own grievances, but she is not a killer — she is a witness who chose silence for her own protection.',
      psychProfileAr: 'مخلصة لكن عملية. خدمت كورديليا بأمانة لكن دون أوهام. لديها مظالمها الخاصة، لكنها ليست قاتلة — هي شاهدة اختارت الصمت لحماية نفسها.',
      secretBackground: 'Cordelia owed her £36 in back wages. She has a son in a sanatorium — she sends money weekly.',
      secretBackgroundAr: 'كورديليا مدينة لها بـ £36 من الأجور المتأخرة. لديها ابن في مصحة — ترسل له مالاً أسبوعياً.',
      motive: 'Unpaid wages. Motive exists but she had no opportunity.',
      motiveAr: 'أجور غير مدفوعة. الدافع موجود لكن لم تتح لها الفرصة.',
      alibi: 'In the laundry room. Confirmed by the stagehand who collected the costume at 9:15 PM.',
      alibiAr: 'في غرفة الغسيل. يؤكده عامل المسرح الذي جمع الزي في 9:15 مساءً.',
      isKiller: false,
    },
    {
      id: 'mr_finch_theatre_owner',
      name: 'Mr. Cornelius Finch',
      nameAr: 'السيد كورنيليوس فينش',
      role: 'Theatre Owner',
      roleAr: 'صاحب المسرح',
      sceneObservation: 'In his private box overlooking the stage. He has not moved since the body was discovered. He stares at the empty stage, smoking a cigarette with deliberate calm.',
      sceneObservationAr: 'في مقصورته الخاصة المطلة على المسرح. لم يتحرك منذ اكتشاف الجثة. يحدق في المسرح الفارغ، يدخن سيجارة بهدوء متعمد.',
      statement: 'I was in my office counting the night\'s receipts. My clerk can confirm I was there from 8:30 until the interruption. Miss Vance was a talented actress but a terrible investment. The theatre will survive her death. I will survive it.',
      statementAr: 'كنت في مكتبي أحصي إيرادات الليلة. كاتبي يمكنه التأكيد أنني كنت هناك من 8:30 حتى الانقطاع. الآنسة فانس كانت ممثلة موهوبة لكنها استثمار فاشل. المسرح سيبقى بعد موتها. سأبقى أنا.',
      isLying: false,
      psychProfile: 'A cold, pragmatic businessman. He viewed Cordelia as an asset, not a person. He is not grieving — he is calculating. But he did not kill her; he only profits from her death.',
      psychProfileAr: 'رجل أعمال بارد عملي. نظر إلى كورديليا كأصل لا كشخص. إنه لا يحزن — إنه يحسب. لكنه لم يقتلها؛ هو فقط يستفيد من موتها.',
      secretBackground: 'Finch had recently taken out a large insurance policy on Cordelia\'s life — £2,000 — with the theatre as beneficiary. He is the only person who profits directly from her death.',
      secretBackgroundAr: 'فينش حصل مؤخراً على وثيقة تأمين كبيرة على حياة كورديليا — £2,000 — المسرح هو المستفيد. هو الشخص الوحيد الذي يستفيد مباشرة من موتها.',
      motive: 'Financial gain from insurance. Cold but calculated.',
      motiveAr: 'ربح مالي من التأمين. بارد لكنه محسوب.',
      alibi: 'In his office. Confirmed by his clerk.',
      alibiAr: 'في مكتبه. يؤكده كاتبه.',
      isKiller: false,
    },
  ],
  archive: [
    {
      id: 'arch_strangulation',
      title: 'Manual & Ligature Strangulation — Forensic Distinction',
      titleAr: 'الخنق اليدوي وبالأداة — التمييز الجنائي',
      tags: ['strangulation', 'ligature', 'silk', 'scarf', 'neck', 'force', 'fabric', 'tear', 'struggle'],
      content: `FORENSIC NOTES — STRANGULATION
─────────────────────────────────────
Manual strangulation: Bruising from fingers, crescent nail marks
Ligature strangulation: Horizontal mark, fabric weave pattern visible

LIGATURE NOTES:
  • Silk leaves a distinctive smooth compression mark
  • Fabric width determines mark width
  • Struggle indicators: torn scarf, broken nails, overturned furniture
  • Perpetrator usually positioned behind the victim
  • Victim often scratches at the ligature — broken nails common`,
      contentAr: `ملاحظات جنائية — الخنق
─────────────────────────────────────
الخنق اليدوي: كدمات من الأصابع، علامات أظافر هلالية
الخنق بأداة: علامة أفقية، نمط نسج القماش مرئي`,
      suggestedQuestions: ['Ask about the position of the body and any signs of struggle.', 'Ask if the scarf was intact or torn — struggle vs. clean kill.'],
      suggestedQuestionsAr: ['اسأل عن وضع الجثة وأي علامات عراك.', 'اسأل إذا كان الوشاح سليماً أم ممزقاً — عراك مقابل قتل نظيف.'],
    },
    {
      id: 'arch_cufflinks',
      title: 'Monogrammed Accessories — Birmingham Gold Register',
      titleAr: 'الإكسسوارات المطرزة — سجل الذهب في برمنغهام',
      tags: ['cufflink', 'gold', 'monogram', 'initial', 'jewellery', 'tracking', 'register', 'V'],
      content: `GOLD CUFFLINK REGISTRATION
─────────────────────────────────────
Birmingham Assay Office (1890-1891):
  • Registered makers: 47
  • Gold purity mark: 18ct, 15ct, or 9ct
  • Custom monograms: 3-6 weeks delivery

MONOGRAM NOTES:
  Single initial "V" on a cufflink → could be:
  • Vance (family name)
  • Given name beginning with V
  • Theatre costume piece (character initial)

Locating the matching cufflink can identify the wearer.`,
      contentAr: `سجل أزرار الأكمام الذهبية
─────────────────────────────────────
مكتب برمنغهام للاختبار (1890-1891):
  • المصنعون المسجلون: 47
  • علامة نقاء الذهب: 18ct، 15ct، أو 9ct
  • الأحرف المطرزة المخصصة: 3-6 أسابيع`,
      suggestedQuestions: ['Ask your partner where the cufflink was found exactly. The location is very important.', 'Ask if the cufflink appears expensive or cheap — this narrows the owner.'],
      suggestedQuestionsAr: ['اسأل شريكك أين وجد زر الكم بالضبط. الموقع مهم جداً.', 'اسأل إذا كان زر الكم يبدو ثميناً أم رخيصاً — هذا يضيق دائرة المالك.'],
    },
    {
      id: 'arch_debt_collection',
      title: 'Victorian Debt Collection Methods — Theatre Industry',
      titleAr: 'طرق تحصيل الديون الفيكتورية — صناعة المسرح',
      tags: ['debt', 'letter', 'typed', 'remington', 'threat', 'payment', 'ledger', 'collection', 'due'],
      content: `DEBT COLLECTION IN THE THEATRE WORLD
─────────────────────────────────────
Standard practice: Written notice, then legal action
Timeline: 30 days notice → 7 day final warning → court

WARNING LETTERS:
  • First notice: polite, formal
  • Second notice: firm, references previous correspondence
  • Final notice: threat of legal action, typed (for record)

A THREATENING LETTER TYPED ON A
REMINGTON TYPEWRITER IS CONSISTENT WITH:
  • Formal debt collection
  • Business dispute (not personal)
  • Someone who wants a paper trail`,
      contentAr: `تحصيل الديون في عالم المسرح
─────────────────────────────────────
الممارسة القياسية: إشعار كتابي، ثم إجراء قانوني
الجدول الزمني: 30 يوماً إشعار → 7 أيام إنذار نهائي → محكمة`,
      suggestedQuestions: ['Ask about the letter in the wastebasket — was it typed by a machine or handwritten? This tells you if it was personal or official.'],
      suggestedQuestionsAr: ['اسأل عن الرسالة في سلة المهملات — هل كانت مكتوبة على آلة كاتبة أم بخط اليد؟ هذا يخبرك إذا كانت شخصية أم رسمية.'],
    },
  ],
  documents: [
    {
      id: 'doc_insurance',
      title: 'Life Insurance Policy — Cordelia Vance',
      titleAr: 'وثيقة تأمين على الحياة — كورديليا فانس',
      type: 'record',
      content: `INSURANCE POLICY — STANDARD LIFE ASSURANCE
─────────────────────────────────────
Policy Holder: Mr. Cornelius Finch
Insured: Miss Cordelia Vance
Value: £2,000
Date: 1st November 1891
Beneficiary: Lyceum Theatre Co.

NOTE: Policy taken out 32 days before death.
Standard clause: Full payout after 30 days.
Policy is valid and will pay out in full.`,
      contentAr: `وثيقة تأمين — شركة الحياة القياسية
─────────────────────────────────────
حامل الوثيقة: السيد كورنيليوس فينش
المؤمن عليها: الآنسة كورديليا فانس
القيمة: £2,000
التاريخ: 1 نوفمبر 1891
المستفيد: شركة مسرح ليسيوم`,
      tags: ['insurance', 'finch', 'life', 'policy', 'payout', '2000', 'november'],
    },
    {
      id: 'doc_casting',
      title: 'Casting Sheet — The Duchess of Malfi',
      titleAr: 'ورقة التمثيل — دوقة مالفاي',
      type: 'record',
      content: `LYCEUM THEATRE — DECEMBER 1891
THE DUCHESS OF MALFI

CAST:
  Cordelia Vance ........ The Duchess
  Roland March .......... Ferdinand
  Henry Graves .......... Cardinal
  Alice Morton .......... Cariola
  Thomas Webb ........... Bosola

STAFF:
  Alexander Vance ....... Stage Manager
  Lavinia Croft ......... Wardrobe / Lady's Maid
  Cornelius Finch ....... Theatre Owner`,
      contentAr: `مسرح ليسيوم — ديسمبر 1891
دوقة مالفاي

طاقم التمثيل:
  كورديليا فانس ........ الدوقة
  رولاند مارش ......... فرديناند
  ألكسندر فانس ........ مدير المسرح
  لافينيا كروفت ........ خزانة الملابس
  كورنيليوس فينش ........ صاحب المسرح`,
      tags: ['cast', 'roles', 'staff', 'vance', 'march', 'finch', 'croft'],
    },
  ],
  timeline: [
    { id: 'tl_1', time: '7:30 PM', timeAr: '7:30 مساءً', description: 'Curtain rises on Act I. Cordelia on stage throughout.', descriptionAr: 'يرتفع الستار للفصل الأول. كورديليا على المسرح طوال الفصل.' },
    { id: 'tl_2', time: '8:30 PM', timeAr: '8:30 مساءً', description: 'Interval. Cordelia returns to her dressing room.', descriptionAr: 'استراحة. كورديليا تعود إلى غرفة ملابسها.' },
    { id: 'tl_3', time: '8:45 PM', timeAr: '8:45 مساءً', description: 'Alexander goes to the lighting booth. Lavinia sees him.', descriptionAr: 'ألكسندر يذهب إلى غرفة الإضاءة. لافينيا تراه.' },
    { id: 'tl_4', time: '8:50 PM', timeAr: '8:50 مساءً', description: 'Act II begins. Cordelia is not on stage until Scene 3.', descriptionAr: 'يبدأ الفصل الثاني. كورديليا ليست على المسرح حتى المشهد الثالث.' },
    { id: 'tl_5', time: '9:10 PM', timeAr: '9:10 مساءً', description: 'Cordelia\'s dresser finds her body. Screams. The performance stops.', descriptionAr: 'مساعد ملابس كورديليا يجد جثتها. صرخات. يتوقف العرض.' },
  ],
  solution: 'Alexander Vance killed his sister, Cordelia. The motive was financial: Cordelia owed £840 to the theatre and Alexander, as stage manager and her brother, was personally liable. He had been covering her debts for years and was facing ruin. The torn programme note was from Alexander — "C — I know. Meet me after the show" — but Cordelia found it first and confronted him during the interval. He followed her to her dressing room through the hidden panel, which he knew about from his years as stage manager. In the struggle, he grabbed the nearest object — her costume scarf — and strangled her. The torn scarf, the overturned stool, the broken nail (Cordelia\'s defensive wound), and the bloodied cufflink (torn from Alexander\'s sleeve during the struggle) all confirm the account. After the killing, Alexander returned to the lighting booth through the hidden panel, locked the booth door behind him, and re-emerged only when the body was discovered. The cufflink fell from his shirt in the booth. Lavinia Croft saw him go to the booth but chose silence because Cordelia owed her wages.',
  solutionAr: 'ألكسندر فانس قتل أخته كورديليا. الدافع كان مالياً: كورديليا مدينة بـ £840 للمسرح، وألكسندر كمدير مسرح وأخوها كان مسؤولاً شخصياً. كان يغطي ديونها لسنوات وكان يواجه الخراب. ملاحظة البرنامج الممزق كانت من ألكسندر — "ك — أعرف. قابليني بعد العرض" — لكن كورديليا وجدتها أولاً وواجهته خلال الاستراحة. تبعها إلى غرفة ملابسها من خلال اللوح المخفي، الذي كان يعرفه من سنوات كمدير مسرح. في العراك، أمسك بأقرب شيء — وشاحها المسرحي — وخنقها. الوشاح الممزق، الكرسي المقلوب، الظفر المكسور (جرح كورديليا الدفاعي)، وزر الكم الملطخ بالدم (ممزق من كم ألكسندر خلال العراك) كلها تؤكد الرواية. بعد القتل، عاد ألكسندر إلى غرفة الإضاءة عبر اللوح المخفي، أغلق باب المقصورة خلفه، وخرج فقط عندما اكتُشفت الجثة. زر الكم سقط من قميصه في المقصورة. لافينيا كروفت رأته يذهب إلى المقصورة لكنها اختارت الصمت لأن كورديليا كانت مدينة لها بأجرها.',
}
