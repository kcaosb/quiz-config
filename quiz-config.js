window.quizConfig = {
  version: "2026-02-25-2",
  startId: "intro_start",
  modals: {
    concernedPartyInfo: {
      titleHtml: "<strong>What is a Concerned Party</strong>?",
      bodyHtml:
        "<p>A Concerned Party is someone who receives your test results and helps support accountability.</p>" +
        "<p>This is often a co-parent, guardian, or attorney who plays a supportive role in your child’s wellbeing.</p>",
    },
  },
  nodes: {
    intro_start: {
      id: "intro_start",
      type: "start",
      text: "Answer a few questions to help us find the best device and plan for your needs.",
      image: {
        url: "https://.../hero.jpg",
        alt: "Help Me Choose",
      },
      primaryCta: { label: "Start Survey", nextId: "q1_useCase" },
    },
    q1_useCase: {
      id: "q1_useCase",
      type: "singleChoice",
      text: "How will you be using Soberlink?",
      options: [
        {
          value: "submitTests",
          labelHtml: "I will be submitting tests.",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/697c0608e42a435f446bed92_ce315f1326752a703132bbea97ca0058664832e1%20(1).avif",
            alt: "Submitting tests",
          },
          nextId: "qA2_reasons_submitter",
        },
        {
          value: "receiveResults",
          labelHtml: "I will be receiving test results.",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/697c060844a725d58758debe_180cc628c51370abdb7268fd9698565868052588.avif",
            alt: "Receiving results",
          },
          nextId: "qB2_reasons_receiver",
        },
      ],
    },
    postPlan_router: {
      id: "postPlan_router",
      type: "router",
      rules: [
        {
          whenEquals: { nodeId: "q1_useCase", value: "submitTests" },
          nextId: "qD1_paymentPreference",
        },
        {
          whenEquals: { nodeId: "q1_useCase", value: "receiveResults" },
          nextId: "res_final_plan_only_device_by_monitored_client",
        },
      ],
      defaultNextId: "res_final_plan_only_device_by_monitored_client",
    },
    qA2_reasons_submitter: {
      id: "qA2_reasons_submitter",
      type: "multiChoice",
      text: "Select the reason(s) you need monitoring.",
      options: [
        {
          value: "childCustody",
          labelHtml: "Child Custody",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f105e3b251bf554a158_child%20custody.png",
            alt: "Child custody",
          },
        },
        {
          value: "sobriety",
          labelHtml: "Sobriety",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f12e28a4ae509b1f527_sobriety.png",
            alt: "Sobriety",
          },
        },
        {
          value: "employment",
          labelHtml: "Employment",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f12c0c3add2adbd0a08_work.png",
            alt: "Employment",
          },
        },
        {
          value: "marriageRelationship",
          labelHtml: "Marriage/Relationship",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f10e36776c1e40d98f8_marriage%20relationships.png",
            alt: "Relationship",
          },
        },
        {
          value: "criminalJustice",
          labelHtml: "Criminal Justice",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f105c147f90eadeb96f_criminal%20justic.avif",
            alt: "Criminal justice",
          },
        },
      ],
      rules: [
        { whenIncludesAnyOf: ["childCustody"], nextId: "qA3_custody_context" },
        {
          whenIncludesAnyOf: ["sobriety", "employment", "marriageRelationship"],
          nextId: "qA3_share_contacts_submitter",
        },
        {
          whenOnly: ["criminalJustice"],
          nextId: "qA2_criminalJustice_end_submitter",
        },
      ],
      defaultNextId: "qA3_incomplete_other",
    },
    qA2_criminalJustice_end_submitter: {
      id: "qA2_criminalJustice_end_submitter",
      type: "info",
      text:
        "Soberlink is designed for family law, treatment, and recovery support.\n\n" +
        "For criminal justice monitoring, we recommend visiting bi.com.",
      primaryCta: { label: "Done", nextId: null },
    },
    qA3_custody_context: {
      id: "qA3_custody_context",
      type: "singleChoice",
      text: "We’ll tailor a plan that best fits your needs. Which option feels most like your situation?",
      options: [
        {
          value: "proactiveGettingAhead",
          labelHtml: "I am getting ahead of the game",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f10ef2493addcafbb32_icon%20ahead.png",
            alt: "arrow icon",
          },
          nextId: "qA4_testingFrequency_submitter",
        },
        {
          value: "proactiveFalselyAccused",
          labelHtml: "I am being falsely accused",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f1061c8412f197bf530_Accused.png",
            alt: "thumbs down",
          },
          nextId: "qA4_testingFrequency_submitter",
        },
        {
          value: "proveSoberParentingTime",
          labelHtml: "I need to prove I am sober during parenting time",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f127fc27e2065acf64e_Sober%20PT.png",
            alt: "person and check icons",
          },
          nextId: "qA4_testingFrequency_submitter",
        },
        {
          value: "fullAbstinenceKeepKids",
          labelHtml: "I need full abstinence in order to keep my kids",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f106ab22d06aa2f7922_Abstinence.png",
            alt: "stop sign",
          },
          nextId: "qA4_testingFrequency_submitter",
        },
      ],
    },
    qA4_testingFrequency_submitter: {
      id: "qA4_testingFrequency_submitter",
      type: "singleChoice",
      text: "Experts suggest testing every day. Which option sounds most like you?",

      options: [
        {
          value: "everyDay",
          labelHtml:
            "<span class='u-normal'>I am willing to</span> test every day",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f10cf15960ad2f62cb4_daily%20testing.avif",
            alt: "calendar with all days highlighted icon",
          },
          nextId: "qA6L2_shareScope_submitter",
        },
        {
          value: "notEveryDay",
          labelHtml:
            "<span class='u-normal'>I</span> don’t need <span class='u-normal'>to</span> test every day",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f106563beec4dbc11d9_icon-parenting-only-testing%201.avif",
            alt: "calendar icon with only several days highlighted",
          },
          nextId: "qA5L1_intro_submitter",
        },
        {
          value: "parentingDaysOnly",
          labelHtml:
            "<span class='u-normal'>I</span> only <span class='u-normal'>need to</span> test on parenting days",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/69810f106563beec4dbc11d9_icon-parenting-only-testing%201.avif",
            alt: "calendar icon with only several days highlighted",
          },
          nextId: "qA5L1_intro_submitter",
        },
      ],
    },
    qA6L2_shareScope_submitter: {
      id: "qA6L2_shareScope_submitter",
      type: "singleChoice",
      introText:
        "To keep everyone informed, your results must be shared with a “Concerned Party.”",
      infoIcon: {
        url: "https://cdn.prod.website-files.com/REPLACE/your-info-icon.png",
        alt: "More info",
      },
      infoLink: {
        type: "lightbox",
        id: "concernedPartyInfo",
        labelHtml: "Concerned Party info",
      },
      text: "Who do you need to share your results with?",
      options: [
        {
          value: "concernedOnly",
          labelHtml:
            "<span class='u-normal'>I need my</span> results shared <span class='u-normal'>with my</span> Concerned Party only",
          nextId: "qA7L2_notify_concernedOnly_submitter",
        },
        {
          value: "concernedAndOthers",
          labelHtml:
            "<span class='u-normal'>I need my</span> results shared <span class='u-normal'>with my</span> Concerned Party and <span class='u-normal'>other</span> contacts.",
          nextId: "qA7L2_notify_manyContacts_submitter",
        },
      ],
    },
    qA7L2_notify_concernedOnly_submitter: {
      id: "qA7L2_notify_concernedOnly_submitter",
      type: "singleChoice",
      text: "How would you like your progress recognized?",
      choiceLayout: "planCards",
      size: "lg",
      options: [
        {
          value: "emailNextDay",
          labelHtml:
            "<span class='u-normal'>My</span> test results <span class='u-normal'>will be</span> emailed the next day.",
          metaHtml:
            "<div style='color: #26BCD7; font-weight: bold;'>Basic Plan</div>",
          priceRef: {
            kind: "plan",
            program: "level_2",
            tier: "basic",
            cadence: "mo",
          },
          icon: { url: "https://.../mail-icon.png", alt: "Email" },
          nextId: "res_plan_level2_basic",
        },
        {
          value: "emailRealtime",
          labelHtml:
            "<span class='u-normal'>My</span> test results <span class='u-normal'>will be</span> emailed <span class='u-normal'>in</span> real-time.",
          metaHtml:
            "<div style='color: #00ABDF; font-weight: bold;'>Plus Plan</div>",
          priceRef: {
            kind: "plan",
            program: "level_2",
            tier: "plus",
            cadence: "mo",
          },
          icon: { url: "https://.../realtime-icon.png", alt: "Real-time" },
          nextId: "res_plan_level2_plus",
        },
        {
          value: "emailTextRealtime",
          labelHtml:
            "<span class='u-normal'>My</span> test results <span class='u-normal'>will be</span> emailed <span class='u-normal'>and</span> texted in real-time.",
          metaHtml:
            "<div style='color: #1C4A82; font-weight: bold;'>Premium Plan</div>",
          priceRef: {
            kind: "plan",
            program: "level_2",
            tier: "premium",
            cadence: "mo",
          },
          badge: {
            label: "50% OFF EXPERT TESTIMONY",
            icon: {
              url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6994c2f22b9a7cc99fa25884_Star%20Badge.png",
              alt: "star icon",
            },
          },
          icon: { url: "https://.../premium-icon.png", alt: "Premium" },
          nextId: "res_plan_level2_premium",
        },
      ],
    },
    qA7L2_notify_manyContacts_submitter: {
      id: "qA7L2_notify_manyContacts_submitter",
      type: "singleChoice",
      text: "How would you like your progress recognized?",
      choiceLayout: "planCards",
      size: "lg",
      options: [
        {
          value: "emailRealtime",
          labelHtml: "My test results will be emailed in real-time",
          metaHtml: "<span class='u-bold;'>Plus Plan</span>",
          priceRef: {
            kind: "plan",
            program: "level_2",
            tier: "plus",
            cadence: "mo",
          },
          icon: { url: "https://.../realtime-icon.png", alt: "Real-time" },
          nextId: "res_plan_level2_plus",
        },
        {
          value: "emailTextRealtime",
          labelHtml:
            "My test results will be emailed and texted in real-time (includes 50% OFF EXPERT TESTIMONY)",
          metaHtml: "<span class='u-bold;'>Premium Plan</span>",
          priceRef: {
            kind: "plan",
            program: "level_2",
            tier: "premium",
            cadence: "mo",
          },
          badge: {
            label: "50% OFF EXPERT TESTIMONY",
            icon: {
              url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6994c2f22b9a7cc99fa25884_Star%20Badge.png",
              alt: "star icon",
            },
          },
          nextId: "res_plan_level2_premium",
        },
      ],
    },
    qA5L1_intro_submitter: {
      id: "qA5L1_intro_submitter",
      type: "info",
      text:
        "We suggest our Level 1 - Parenting Time Only Program.\n\n" +
        "This plan allows you to test only on days that you need to show proof of sobriety.",
      primaryCta: { label: "Continue", nextId: "qA6L1_testingDays_submitter" },
    },
    qA6L1_testingDays_submitter: {
      id: "qA6L1_testingDays_submitter",
      type: "singleChoice",
      text: "Our Level 1 Program includes 20 days of testing each month.",
      options: [
        {
          value: "twentyEnough",
          labelHtml:
            "20 testing days per month is enough. Extra days at $15 each.",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/697c0608e42a435f446bed92_ce315f1326752a703132bbea97ca0058664832e1%20(1).avif",
            alt: "TODO",
          },
          nextId: "qA7L1_shareScope_submitter",
        },
        {
          value: "needMoreThanTwenty",
          labelHtml: "I need more than 20 testing days a month.",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/697c0608e42a435f446bed92_ce315f1326752a703132bbea97ca0058664832e1%20(1).avif",
            alt: "TODO",
          },
          nextId: "res_plan_level1_premium",
        },
      ],
    },
    qA7L1_shareScope_submitter: {
      id: "qA7L1_shareScope_submitter",
      type: "singleChoice",
      introText:
        "To keep everyone informed, your results must be shared with a “Concerned Party.”",
      infoIcon: {
        url: "https://cdn.prod.website-files.com/REPLACE/your-info-icon.png",
        alt: "More info",
      },
      infoLink: {
        type: "lightbox",
        id: "concernedPartyInfo",
        labelHtml: "Concerned Party info",
      },
      text: "Who do you need to share your results with?",
      options: [
        {
          value: "concernedOnly",
          labelHtml:
            "<span class='u-normal'>I need my</span> results shared <span class='u-normal'>with my</span> Concerned Party only",
          nextId: "qA8L1_notify_concernedOnly_submitter",
        },
        {
          value: "concernedAndOthers",
          labelHtml:
            "<span class='u-normal'>I need my</span> results shared <span class='u-normal'>with my</span> Concerned Party and <span class='u-normal'>other</span> contacts.",
          nextId: "qA8L1_notify_manyContacts_submitter",
        },
      ],
    },
    qA8L1_notify_concernedOnly_submitter: {
      id: "qA8L1_notify_concernedOnly_submitter",
      type: "singleChoice",
      text: "How would you like your progress recognized?",
      choiceLayout: "planCards",
      size: "lg",
      options: [
        {
          value: "emailNextDay",
          labelHtml:
            "<span class='u-normal'>My</span> test results <span class='u-normal'>will be</span> emailed the next day.",
          metaHtml:
            "<div style='color: #26BCD7; font-weight: bold;'>Basic Plan</div>",
          priceRef: {
            kind: "plan",
            program: "level_1",
            tier: "basic",
            cadence: "mo",
          },
          icon: { url: "https://.../mail-icon.png", alt: "Email" },
          nextId: "res_plan_level1_basic",
        },
        {
          value: "emailRealtime",
          labelHtml:
            "<span class='u-normal'>My</span> test results <span class='u-normal'>will be</span> emailed <span class='u-normal'>in</span> real-time.",
          metaHtml:
            "<div style='color: #00ABDF; font-weight: bold;'>Plus Plan</div>",
          priceRef: {
            kind: "plan",
            program: "level_1",
            tier: "plus",
            cadence: "mo",
          },
          icon: { url: "https://.../realtime-icon.png", alt: "Real-time" },
          nextId: "res_plan_level1_plus",
        },
        {
          value: "emailTextRealtime",
          labelHtml:
            "<span class='u-normal'>My</span> test results <span class='u-normal'>will be</span> emailed <span class='u-normal'>and</span> texted in real-time.",
          metaHtml:
            "<div style='color: #1C4A82; font-weight: bold;'>Premium Plan</div>",
          priceRef: {
            kind: "plan",
            program: "level_1",
            tier: "premium",
            cadence: "mo",
          },
          badge: {
            label: "50% OFF EXPERT TESTIMONY",
            icon: {
              url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6994c2f22b9a7cc99fa25884_Star%20Badge.png",
              alt: "star icon",
            },
          },
          icon: { url: "https://.../premium-icon.png", alt: "Premium" },
          nextId: "res_plan_level1_premium",
        },
      ],
    },
    qA8L1_notify_manyContacts_submitter: {
      id: "qA8L1_notify_manyContacts_submitter",
      type: "singleChoice",
      text: "How would you like your progress recognized?",
      size: "lg",
      choiceLayout: "planCards",
      options: [
        {
          value: "emailRealtime",
          labelHtml: "My test results will be emailed in real time",
          metaHtml: "<span class='u-bold;'>Plus Plan</span>",
          priceRef: {
            kind: "plan",
            program: "level_1",
            tier: "plus",
            cadence: "mo",
          },
          icon: { url: "https://.../realtime-icon.png", alt: "Real-time" },
          nextId: "res_plan_level1_plus",
        },
        {
          value: "emailTextRealtime",
          labelHtml:
            "My test results will be emailed + texted in real time (also comes with unlimited testing days)",
          metaHtml: "<span class='u-bold;'>Premium Plan</span>",
          priceRef: {
            kind: "plan",
            program: "level_1",
            tier: "premium",
            cadence: "mo",
          },
          icon: { url: "https://.../premium-icon.png", alt: "Premium" },
          badge: {
            label: "50% OFF EXPERT TESTIMONY",
            icon: {
              url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6994c2f22b9a7cc99fa25884_Star%20Badge.png",
              alt: "star icon",
            },
          },
          nextId: "res_plan_level1_premium",
        },
      ],
    },
    qA3_share_contacts_submitter: {
      id: "qA3_share_contacts_submitter",
      type: "singleChoice",
      text:
        "Let us help you prove your sobriety.\n" +
        "A “Contact” is a person who will receive your results.\n" +
        "This is typically a family member, friend, or treatment provider.",
      options: [
        {
          value: "oneContact",
          labelHtml: "I need my results shared with one contact",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/698131dd9b14c609f0ac6f6f_Two%20People%20%2B.png",
            alt: "one person",
          },
          nextId: "qA4_share_notify_oneContact_submitter",
        },
        {
          value: "moreThanOneContact",
          labelHtml: "I need my results shared with more than one Contact.",
          icon: {
            url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/698131dd4bad2f8d698ab385_One%20Person.png",
            alt: "two people",
          },
          nextId: "qA4_share_notify_manyContacts_submitter",
        },
      ],
    },
    qA4_share_notify_oneContact_submitter: {
      id: "qA4_share_notify_oneContact_submitter",
      type: "singleChoice",
      text: "How would you like your progress recognized?",
      size: "lg",
      choiceLayout: "planCards",
      options: [
        {
          value: "emailNextDay",
          labelHtml:
            "<span class='u-normal'>My</span> test results <span class='u-normal'>will be</span> emailed the next day.",
          metaHtml:
            "<div style='color: #26BCD7; font-weight: bold;'>Basic Plan</div>",
          priceRef: {
            kind: "plan",
            program: "share",
            tier: "basic",
            cadence: "mo",
          },
          icon: { url: "https://.../basic-icon.png", alt: "basic" },
          nextId: "res_plan_share_basic",
        },
        {
          value: "emailRealtime",
          labelHtml:
            "<span class='u-normal'>My</span> test results <span class='u-normal'>will be</span> emailed <span class='u-normal'>in</span> real-time.",
          metaHtml:
            "<div style='color: #00ABDF; font-weight: bold;'>Plus Plan</div>",
          priceRef: {
            kind: "plan",
            program: "share",
            tier: "plus",
            cadence: "mo",
          },
          icon: { url: "https://.../plus-icon.png", alt: "plus" },
          nextId: "res_plan_share_plus",
        },
        {
          value: "emailTextRealtime",
          labelHtml:
            "<span class='u-normal'>My</span> test results <span class='u-normal'>will be</span> emailed <span class='u-normal'>and</span> texted in real-time.",
          metaHtml:
            "<div style='color: #1C4A82; font-weight: bold;'>Premium Plan</div> ",
          priceRef: {
            kind: "plan",
            program: "share",
            tier: "premium",
            cadence: "mo",
          },
          badge: {
            label: "idk",
            icon: {
              url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6994c2f22b9a7cc99fa25884_Star%20Badge.png",
              alt: "star icon",
            },
          },
          icon: { url: "https://.../prem-icon.png", alt: "prem" },
          nextId: "res_plan_share_premium",
        },
      ],
    },
    qA4_share_notify_manyContacts_submitter: {
      id: "qA4_share_notify_manyContacts_submitter",
      type: "singleChoice",
      size: "lg",
      choiceLayout: "planCards",
      text: "How would you like your progress recognized?",
      options: [
        {
          value: "emailRealtime",
          labelHtml: "My test results will be emailed in real-time.",
          metaHtml: "<span class='u-bold;'>Plus Plan</span>",
          priceRef: {
            kind: "plan",
            program: "share",
            tier: "plus",
            cadence: "mo",
          },
          nextId: "res_plan_share_plus",
        },
        {
          value: "emailTextRealtime",
          labelHtml: "My test results will be emailed and texted in real-time.",
          metaHtml: "<span class='u-bold;'>Premium Plan</span>",
          priceRef: {
            kind: "plan",
            program: "share",
            tier: "premium",
            cadence: "mo",
          },
          badge: {
            label: "idk",
            icon: {
              url: "https://cdn.prod.website-files.com/5f001b69b01d2658098e3f5c/6994c2f22b9a7cc99fa25884_Star%20Badge.png",
              alt: "star icon",
            },
          },
          nextId: "res_plan_share_premium",
        },
      ],
    },
    qA3_incomplete_other: {
      id: "qA3_incomplete_other",
      type: "info",
      text: "[TODO] Employment / Marriage / Criminal Justice routes not yet defined.",
      primaryCta: {
        label: "Contact us for help choosing",
        nextId: "res_generic_contact",
      },
    },
    qB2_reasons_receiver: {
      id: "qB2_reasons_receiver",
      type: "multiChoice",
      text: "Check the reason(s) you need monitoring.",
      options: [
        { value: "childCustody", labelHtml: "Child Custody" },
        { value: "proofOfSobriety", labelHtml: "Proof of Sobriety" },
        { value: "criminalJustice", labelHtml: "Criminal Justice" },
      ],
      rules: [
        {
          whenIncludesAnyOf: ["childCustody"],
          nextId: "qB3_custody_storyIntro",
        },
        {
          whenIncludesAnyOf: ["proofOfSobriety"],
          nextId: "qB3_share_storyIntro",
        },
        {
          whenOnly: ["criminalJustice"],
          nextId: "qB2_criminalJustice_end_receiver",
        },
      ],
      defaultNextId: "qB2_incomplete_other",
    },
    qB2_criminalJustice_end_receiver: {
      id: "qB2_criminalJustice_end_receiver",
      type: "info",
      text:
        "Soberlink is designed for family law, treatment, and recovery support.\n\n" +
        "For criminal justice monitoring, we recommend visiting bi.com.",
      primaryCta: { label: "Done", nextId: null },
    },
    qB2_incomplete_other: {
      id: "qB2_incomplete_other",
      type: "info",
      text: "[TODO] Receiver route not yet defined for this combination.",
      primaryCta: {
        label: "Contact us for help choosing",
        nextId: "res_generic_contact",
      },
    },
    qB3_custody_storyIntro: {
      id: "qB3_custody_storyIntro",
      type: "info",
      text:
        "We'll tailor a plan that best fits your needs.\n\n" +
        "But first, take a look at some stories you might connect with.",
      links: [
        { labelHtml: "Woman's Story", type: "lightbox", id: "womanStory" },
        { labelHtml: "Man's Story", type: "lightbox", id: "manStory" },
      ],
      primaryCta: { label: "Continue", nextId: "qB4_monitoredClientFrequency" },
    },
    qB4_monitoredClientFrequency: {
      id: "qB4_monitoredClientFrequency",
      type: "singleChoice",
      text:
        "The “Monitored Client” is the person submitting Soberlink tests.\n" +
        "Experts suggest testing every day.\n\n" +
        "With your Monitored Client, which option most fits your situation?",
      options: [
        {
          value: "everyDay",
          labelHtml: "Your Monitored Client needs to test every day.",
          nextId: "res_plan_level2_generic_receiver",
        },
        {
          value: "parentingDaysOnly",
          labelHtml:
            "Your Monitored Client only needs to test on parenting days.",
          nextId: "qB4b_level1_intro_receiver",
        },
      ],
    },
    qB4b_level1_intro_receiver: {
      id: "qB4b_level1_intro_receiver",
      type: "info",
      text:
        "Because your Monitored Client only needs to test on parenting days, we suggest our:\n" +
        "Level 1 - Parenting Time Only Program.",
      primaryCta: { label: "Next", nextId: "qB5L1_testingDays_receiver" },
    },
    qB5L1_testingDays_receiver: {
      id: "qB5L1_testingDays_receiver",
      type: "singleChoice",
      text: "Our Level 1 Program includes 20 days of testing each month.",
      options: [
        {
          value: "twentyEnough",
          labelHtml:
            "20 testing days per month is enough. Extra days are $15 each.",
          nextId: "qB5a_concernedIntro_receiver",
        },
        {
          value: "needMoreThanTwenty",
          labelHtml:
            "The Monitored Client needs more than 20 testing days per month.",
          nextId: "res_plan_level1_premium",
        },
      ],
    },
    qB5a_concernedIntro_receiver: {
      id: "qB5a_concernedIntro_receiver",
      type: "info",
      text:
        "To keep everyone informed, the test results must be shared with you, the “Concerned Party.”\n\n" +
        "The “Concerned Party,” often a co-parent, guardian, or attorney, is someone who helps play a supportive role in the child’s wellbeing.",
      primaryCta: { label: "Continue", nextId: "qB6_shareScope_receiver" },
    },
    qB6_shareScope_receiver: {
      id: "qB6_shareScope_receiver",
      type: "singleChoice",
      text: "Who else do the results need to be shared with?",
      options: [
        {
          value: "onlyMe",
          labelHtml: "The results only need to be shared with me.",
          nextId: "qB7_notify_onlyMe_receiver",
        },
        {
          value: "meAndOthers",
          labelHtml:
            "The results need to be shared with me and other Contacts.",
          nextId: "qB7_notify_meAndOthers_receiver",
        },
      ],
    },
    qB7_notify_onlyMe_receiver: {
      id: "qB7_notify_onlyMe_receiver",
      type: "singleChoice",
      text: "How should we send you the results?",
      options: [
        {
          value: "emailNextDay",
          labelHtml:
            "<span class='u-normal'>I want the </span>test results emailed to me the next day",
          nextId: "res_plan_level1_basic",
        },
        {
          value: "emailRealtime",
          labelHtml:
            "<span class='u-normal'>I want the</span> test results emailed in real time",
          nextId: "res_plan_level1_plus",
        },
        {
          value: "emailTextRealtime",
          labelHtml:
            "<span class='u-normal'>I want the</span> test results emailed and texts in real time",
          nextId: "res_plan_level1_premium",
        },
      ],
    },
    qB7_notify_meAndOthers_receiver: {
      id: "qB7_notify_meAndOthers_receiver",
      type: "singleChoice",
      text: "How should we send you the results?",
      options: [
        {
          value: "emailRealtime",
          labelHtml: "I want the test results emailed in real time",
          nextId: "res_plan_level1_plus",
        },
        {
          value: "emailTextRealtime",
          labelHtml: "I want the test results emailed and texted in real time",
          nextId: "res_plan_level1_premium",
        },
      ],
    },
    qB3_share_storyIntro: {
      id: "qB3_share_storyIntro",
      type: "info",
      text:
        "We'll tailor a plan that best fits your needs:\n\n" +
        "But first, take a look at a story you might connect with.\n" +
        "MAX & CAMI VIDEO CLICK HERE.\n" +
        "(Lightbox)",
      links: [
        {
          labelHtml: "Max &amp; Cami Video",
          type: "lightbox",
          id: "maxCamiVideo",
        },
      ],
      primaryCta: { label: "Continue »", nextId: "qB4_share_scope_receiver" },
    },
    qB4_share_scope_receiver: {
      id: "qB4_share_scope_receiver",
      type: "singleChoice",
      text:
        "The Monitored Client's test results will be shared with you.\n" +
        "The results can also be shared with other Contacts like family members, friends, or treatment providers.",
      options: [
        {
          value: "onlyMe",
          labelHtml: "The results only need to be shared with me.",
          nextId: "qB5_share_notify_onlyMe_receiver",
        },
        {
          value: "meAndOthers",
          labelHtml:
            "The results need to be shared with me and other Contacts.",
          nextId: "qB5_share_notify_meAndOthers_receiver",
        },
      ],
    },
    qB5_share_notify_onlyMe_receiver: {
      id: "qB5_share_notify_onlyMe_receiver",
      type: "singleChoice",
      text: "How should we send you the results?",
      options: [
        {
          value: "emailNextDay",
          labelHtml:
            "<span class='u-normal'>I want the </span>test results emailed to me the next day",
          nextId: "res_plan_share_basic",
        },
        {
          value: "emailRealtime",
          labelHtml:
            "<span class='u-normal'>I want the</span> test results emailed in real tim",
          nextId: "res_plan_share_plus",
        },
        {
          value: "emailTextRealtime",
          labelHtml:
            "<span class='u-normal'>I want the</span> test results emailed and texts in real time",
          nextId: "res_plan_share_premium",
        },
      ],
    },

    qB5_share_notify_meAndOthers_receiver: {
      id: "qB5_share_notify_meAndOthers_receiver",
      type: "singleChoice",
      text: "How should we send you the results?",
      options: [
        {
          value: "emailRealtime",
          labelHtml: "I want the test results emailed in real-time.",
          nextId: "res_plan_share_plus",
        },
        {
          value: "emailTextRealtime",
          labelHtml: "I want the test results emailed and texted in real-time.",
          nextId: "res_plan_share_premium",
        },
      ],
    },
    qDeviceIntro_generic: {
      id: "qDeviceIntro_generic",
      type: "info",
      textHtml:
        "Your Monitored Client will be able to choose their Device.<br><br>" +
        "Devices start at {RENT_START}/mo to rent or {BUY_START} to buy.<br><br>" +
        "Soberlink is the ultimate investment in safety and trust - because peace of mind is priceless.<br><br>" +
        "Device - Monitored Client to Choose",
      textTokens: {
        RENT_START: { kind: "deviceMin", commitment: "rent 365" },
        BUY_START: { kind: "deviceMin", commitment: "buy" },
      },
      primaryCta: { label: "Continue", nextId: "qD1_paymentPreference" },
    },
    qD1_paymentPreference: {
      id: "qD1_paymentPreference",
      type: "singleChoice",
      text: "Which payment method do you prefer?",
      options: [
        {
          value: "own",
          labelHtml:
            "Own my device starting at {PRICE} (one-time purchase, higher upfront cost, no minimum plan commitment required)",
          priceRef: { kind: "deviceMin", commitment: "buy" },
          nextId: "qD2_own_chooseDevice",
        },
        {
          value: "rent",
          labelHtml:
            "Rent my device starting at {PRICE}/mo (low monthly payment, no upfront device costs, requires a monitoring plan)",
          priceRef: { kind: "deviceMin", commitment: "rent 365" },
          nextId: "qD2_rent_monitorDuration",
        },
      ],
    },
    qD2_own_chooseDevice: {
      id: "qD2_own_chooseDevice",
      type: "singleChoice",
      text: "Choose your device.",
      options: [
        {
          value: "connect",
          labelHtml:
            "Connect – Bluetooth device uses smartphone to transmit test results. Smartphone pairing required.",
          nextId: "res_final_own_connect",
        },
        {
          value: "cellular 2",
          labelHtml:
            "Cellular 2 – All-in-one device uses cellular data to transmit test results. No smartphone required.",
          nextId: "res_final_own_cellular2",
        },
      ],
    },
    qD2_rent_monitorDuration: {
      id: "qD2_rent_monitorDuration",
      type: "singleChoice",
      text: "How long do you plan on using Soberlink? Pay less by monitoring longer. Experts suggest at least 1 year of monitoring.",
      options: [
        {
          value: "oneYear",
          labelHtml:
            "I plan to monitor for at least one year. {PRICE}/mo device. Requires a 365-day Monitoring Commitment.",
          priceRef: {
            kind: "device",
            device: "connect",
            commitment: "rent 365",
          },
          nextId: "res_final_rent_connect_19_365",
        },
        {
          value: "fourMonths",
          labelHtml:
            "I plan to monitor for at least 4 months. {PRICE}/mo device. Requires 120-Day Monitoring Commitment.",
          priceRef: {
            kind: "device",
            device: "connect",
            commitment: "rent 120",
          },
          nextId: "res_final_rent_connect_29_120",
        },
      ],
    },
  },
  results: {
    res_plan_level2_basic: {
      id: "res_plan_level2_basic",
      type: "plan",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Level 2",
      plan: "Basic",
      text: "Now, let’s select your device.",
      nextId: "postPlan_router",
    },
    res_plan_level2_plus: {
      id: "res_plan_level2_plus",
      type: "plan",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Level 2",
      plan: "Plus",
      text: "Now, let’s select your device.",
      nextId: "postPlan_router",
    },
    res_plan_level2_premium: {
      id: "res_plan_level2_premium",
      type: "plan",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Level 2",
      plan: "Premium",
      text: "Now, let’s select your device.",
      nextId: "postPlan_router",
    },
    res_plan_level2_generic_receiver: {
      id: "res_plan_level2_generic_receiver",
      type: "plan",
      headlineHtml: "We’ve selected a plan for your Monitored Client:",
      program: "Level 2",
      plan: "Plus",
      text: "We’ve selected a Level 2 Program for your Monitored Client.\n\nNow, let’s select your device.",
      nextId: "postPlan_router",
    },
    res_plan_level1_basic: {
      id: "res_plan_level1_basic",
      type: "plan",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Level 1",
      plan: "Basic",
      text: "We’ve selected a plan for you: Level 1 Basic.\n\nNow, let’s select your device.",
      nextId: "postPlan_router",
    },
    res_plan_level1_plus: {
      id: "res_plan_level1_plus",
      type: "plan",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Level 1",
      plan: "Plus",
      text: "Now, let’s select your device.",
      nextId: "postPlan_router",
    },
    res_plan_level1_premium: {
      id: "res_plan_level1_premium",
      type: "plan",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Level 1",
      plan: "Premium",
      text: "Now, let’s select your device.",
      nextId: "postPlan_router",
    },
    res_plan_share_basic: {
      id: "res_plan_share_basic",
      type: "plan",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Share",
      plan: "Basic",
      text: "Now, let’s select your device.",
      nextId: "postPlan_router",
    },
    res_plan_share_plus: {
      id: "res_plan_share_plus",
      type: "plan",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Share",
      plan: "Plus",
      text: "Now, let’s select your device.",
      nextId: "postPlan_router",
    },
    res_plan_share_premium: {
      id: "res_plan_share_premium",
      type: "plan",
      headlineHtml: "We’ve selected a plan for you:",
      program: "Share",
      plan: "Premium",
      text: "Now, let’s select your device.",
      nextId: "postPlan_router",
    },
    res_generic_contact: {
      id: "res_generic_contact",
      type: "info",
      text:
        "Your situation doesn’t fit neatly into one of our standard paths yet.\n\n" +
        "The best next step is to talk with a specialist who can help tailor a solution.",
      primaryCta: { label: "Done", nextId: null },
    },
    res_final_plan_only_device_by_monitored_client: {
      id: "res_final_plan_only_device_by_monitored_client",
      type: "final",
      programFromPlan: true,
      planFromPlan: true,
      device: "Monitored Client to Choose",
      pricing: null,
      text:
        "Our Recommendation\n\n" +
        "You've poured your heart into making this work. Soberlink turns promises into proof, giving trust a solid foundation—because what you’ve built is worth it.\n\n" +
        "LEVEL, PLAN,\n" +
        "PRICING\n\n" +
        "Device\n" +
        "Monitored Client to Choose\n\n" +
        "Email Recommendations »",
      nextId: null,
    },
    res_final_own_connect: {
      id: "res_final_own_connect",
      type: "final",
      programFromPlan: true,
      planFromPlan: true,
      device: "Connect",
      ownership: "own",
      pricing: {
        devicePriceRef: {
          kind: "device",
          device: "connect",
          commitment: "buy",
        },
        devicePricePrefix: "starting at ",
        devicePriceSuffix: " (one-time purchase)",
        commitment: "no minimum plan commitment required",
      },
      text:
        "Our Recommendation\n\n" +
        "Soberlink is the ultimate investment in safety and trust—because time with your kids is priceless.\n\n" +
        "LEVEL & PLAN (from your previous selection),\n" +
        "CONNECT + PRICING.\n\n" +
        "Add to Cart »  |  Email Recommendations »",
      nextId: null,
    },

    res_final_own_cellular2: {
      id: "res_final_own_cellular2",
      type: "final",
      programFromPlan: true,
      planFromPlan: true,
      device: "Cellular 2",
      ownership: "own",
      pricing: {
        devicePriceRef: {
          kind: "device",
          device: "cellular 2",
          commitment: "buy",
        },
        devicePricePrefix: "starting at ",
        devicePriceSuffix: " (one-time purchase)",
        commitment: "no minimum plan commitment required",
      },
      text:
        "Our Recommendation\n\n" +
        "Soberlink is the ultimate investment in safety and trust—because time with your kids is priceless.\n\n" +
        "LEVEL & PLAN (from your previous selection),\n" +
        "CELLULAR 2 + PRICING.\n\n" +
        "Add to Cart »  |  Email Recommendations »",
      nextId: null,
    },

    res_final_rent_connect_19_365: {
      id: "res_final_rent_connect_19_365",
      type: "final",
      programFromPlan: true,
      planFromPlan: true,
      device: "Connect",
      ownership: "rent",
      pricing: {
        monthlyRef: {
          kind: "device",
          device: "connect",
          commitment: "rent 365",
          cadence: "mo",
        },
        commitment: "365-day monitoring commitment",
      },
      text:
        "Our Recommendation\n\n" +
        "Soberlink is the ultimate investment in safety and trust—because time with your kids is priceless.\n\n" +
        "LEVEL & PLAN (from your previous selection),\n" +
        "CONNECT + $19/mo.\n\n" +
        "Add to Cart »  |  Email Recommendations »",
      nextId: null,
    },

    res_final_rent_connect_29_120: {
      id: "res_final_rent_connect_29_120",
      type: "final",
      programFromPlan: true,
      planFromPlan: true,
      device: "Connect",
      ownership: "rent",
      pricing: {
        monthlyRef: {
          kind: "device",
          device: "connect",
          commitment: "rent 120",
          cadence: "mo",
        },
        commitment: "120-day monitoring commitment",
      },
      text:
        "Our Recommendation\n\n" +
        "Soberlink is the ultimate investment in safety and trust—because time with your kids is priceless.\n\n" +
        "LEVEL & PLAN (from your previous selection),\n" +
        "CONNECT + $29/mo.\n\n" +
        "Add to Cart »  |  Email Recommendations »",
      nextId: null,
    },
  },
};
