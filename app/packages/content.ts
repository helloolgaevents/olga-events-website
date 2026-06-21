// All /packages copy lives here in one structured object so it can be
// translated to RU / AR later (add sibling objects keyed by locale and select
// at render). English now. Prices live in ./pricing.ts (single source of truth).

const styling = [
  "Entrance styling",
  "Venue styling with artificial flowers (entrance, arch, accents)",
  "Lighting system",
  "Transport & logistics",
];

export const packagesContent = {
  hero: {
    kicker: "Olga Events · Dubai",
    title: "Wedding Packages",
    sub: "Wedding Planning & Décor · All Emirates",
  },

  who: {
    heading: "Calm, reliable, to the point.",
    paras: [
      "A team with experience and an eye for detail, on the level of Dubai's best planners. No loud words, we simply do our work and see it through to the result.",
      "We are especially in love with flowers. For us a wedding is born from the small things: thoughtful décor, fresh flowers, the right rhythm of the evening. We don't just decorate, we lead and coordinate the whole day so it feels warm, heartfelt and truly family.",
      "A full-service team is priceless: otherwise the timeline, invitations, vendors, the programme and permits fall on the couple. We carry it for you, so on your day you are guests, not managers.",
    ],
  },

  how: {
    heading: "How it works",
    steps: [
      { n: "01", title: "Consultation", text: "Vision, culture, guests, budget." },
      { n: "02", title: "Choose your path", text: "Planning “to budget” or a ready package." },
      { n: "03", title: "Design", text: "Concept, palette, flowers, made for you." },
      { n: "04", title: "Your day", text: "We hold the coordination." },
    ],
  },

  book: {
    heading: "How to book, two ways to begin",
    lead: "With Olga Events everything starts with planning, the team that leads your wedding and is responsible for every moment. We add décor to the planning, and here you have two comfortable paths: take both packages at once for the best price, or start with planning and add décor later. This is how we organise every project to give you the best experience and allocate the right resources. Below we show which path is closer to you.",
    recommended: {
      tag: "Recommended · best price",
      title: "Planning + décor together",
      intro:
        "Take both packages at once and we run your wedding as one project from day one. Why it's the best choice:",
      points: [
        {
          h: "Best price.",
          t: "Décor goes at a special, reduced price, and your saving grows with the guest count.",
        },
        {
          h: "Fast decision.",
          t: "In one step you close both planning and styling, cutting prep time by 60–70%. Especially valuable if the wedding is near.",
        },
        {
          h: "Complete peace of mind.",
          t: "Everything is booked at once, no worrying about finding vendors in time or prices rising.",
        },
        {
          h: "One vision, one team.",
          t: "Planning and décor are created together, one style, nothing lost between stages.",
        },
        {
          h: "Price locked today.",
          t: "Décor at today's price, no seasonal increase.",
        },
        {
          h: "Payment on booking:",
          t: "50% of the total (a comfortable start, no full prepayment).",
        },
      ],
      note: "The special décor price is our thank-you for trusting us with both planning and styling at once, so we meet you on price.",
      forText:
        "Ideal if the wedding is near, or you want to settle everything in one step, calmly and at the best price.",
    },
    flexible: {
      tag: "Planning only · flexible",
      title: "Open budget",
      intro: "Start with the planning package, add décor later. Why this path is convenient:",
      points: [
        { h: "Calm start.", t: "Pay only for planning, no large sum up front." },
        {
          h: "Budget flexibility.",
          t: "We choose décor later, to your final budget.",
        },
        {
          h: "Trust gradually.",
          t: "First see our work in action, then expand.",
        },
        { h: "Your own pace.", t: "Spread decisions and payments over time." },
      ],
      pricingLine:
        "Here standard prices, no discount: planning from AED 7,000, décor added later from AED 47,000 (grows with guest count).",
      note: "The special discount applies to both packages only when booked together. Here you go calmer and more flexibly, but both planning and décor are at standard price.",
      suitableTitle: "Suitable if:",
      suitable: [
        "you have time before the wedding and want to start light;",
        "you've already planned or are planning décor with another company, but need professional support from a wedding planner and coordination team.",
      ],
    },
    closing:
      "Both paths lead to the same dream wedding. If there's still time and you want to go calmly, start with planning. If the wedding is near or you want the best price, one style and to close everything in one step, take both packages at once, it's faster and better value.",
  },

  planning: {
    heading: "Planning, the foundation of your wedding.",
    lead: "The planning package is not an extra service, it's the foundation of the whole wedding. Before we begin the design, we need to understand your celebration.",
    understandTitle: "What we understand at this stage:",
    understand: [
      "scale of the celebration",
      "level of support required",
      "amount of coordination",
      "size of the team",
      "resources and time to allocate",
    ],
    letsTitle: "Planning lets us:",
    lets: [
      "assign the right team",
      "reserve time and resources",
      "organise vendors and schedules",
      "guide you through the whole process",
      "save you from stress and uncertainty",
    ],
    everyCouple:
      "Every couple is unique, so we offer several planning levels for different budgets and levels of support.",
    tiers: [
      {
        key: "essential",
        name: "Essential Planning",
        subtitle: "Start & coordination",
        groups: [
          {
            title: "Planning basics",
            items: [
              "Digital invitation (eCard)",
              "Wedding design concept",
              "Concept revisions up to 2",
            ],
          },
          { title: "Floor plan", items: ["Basic floor plan (CAD & Canva)"] },
          {
            title: "Vendors",
            items: [
              "Management of external vendors (you book vendors yourself and give us the list; we coordinate and manage them on the day)",
            ],
          },
          { title: "Timings", items: ["Set-up · ceremony · reception"] },
          {
            title: "Wedding day",
            items: [
              "Coordinator up to 8 hours",
              "1 coordinator for set-up, ceremony, reception",
            ],
          },
          { title: "Systems", items: ["Access to the online planning portal"] },
        ],
      },
      {
        key: "classic",
        name: "Classic Planning",
        subtitle: "Partial planning",
        popular: true,
        adds: [
          "Help selecting & booking the venue",
          "Vendors from our base at special rates + full management",
          "2D seating layout",
          "Wedding-programme coordinator",
        ],
        groups: [
          {
            title: "Venue & guests",
            items: [
              "Help selecting & booking the venue",
              "Digital invitation (eCard)",
              "Simple online RSVP",
            ],
          },
          {
            title: "Design & concept",
            items: [
              "Design concept · revisions up to 3",
              "Floor plan (CAD & Canva)",
              "2D layout (seating)",
            ],
          },
          {
            title: "Vendors",
            items: [
              "Vendor selection from our base (at the special agency rates)",
              "Full management & negotiation (we negotiate and fully manage vendors, ours and your external ones)",
            ],
          },
          {
            title: "Timings",
            items: ["Set-up · bridal prep · ceremony · reception"],
          },
          {
            title: "Wedding day",
            items: [
              "Coordinators up to 8 hours",
              "Set-up coordinator",
              "Wedding-programme coordinator",
            ],
          },
          { title: "Systems", items: ["Online planning portal"] },
        ],
      },
      {
        key: "luxury",
        name: "Luxury Planning",
        subtitle: "Full planning",
        adds: [
          "Full 3D venue render",
          "Vendor payments handled via Olga Events",
          "Team works in shifts",
          "Ceremony, entertainment & set-up coordinators",
          "Bridal assistant + 2 hostesses",
        ],
        groups: [
          {
            title: "Venue & guests",
            items: [
              "Help selecting & booking the venue",
              "Digital invitation (eCard)",
              "Advanced online RSVP",
            ],
          },
          {
            title: "Design & concept",
            items: [
              "Concept · revisions up to 5",
              "Floor plan (CAD & Canva) · 2D overview",
              "Full 3D venue render",
            ],
          },
          {
            title: "Vendors",
            items: [
              "Vendor selection from our base (special agency rates)",
              "Full management & negotiation",
              "Vendor payments via Olga Events (you transfer us the invoiced amount and we settle with all vendors)",
            ],
          },
          {
            title: "Timings",
            items: ["Set-up · bridal prep · ceremony · reception"],
          },
          {
            title: "Wedding day",
            items: [
              "Team works in shifts, up to 8 hours",
              "Set-up coordination",
              "Reception coordinator",
              "Ceremony coordinator",
              "Entertainment coordinator",
              "Bridal assistant",
              "2 hostesses (greeting guests)",
            ],
          },
          { title: "Comms & systems", items: ["Team chat · online portal"] },
        ],
      },
    ],
  },

  // Side-by-side comparison matrix (all open) for the 3 planning tiers.
  // Each row cell: true = included (✓), false = not included (, ),
  // string = included with a detail note.
  planningComparison: {
    cols: [
      { key: "essential", name: "Essential", subtitle: "Start & coordination" },
      {
        key: "classic",
        name: "Classic",
        subtitle: "Partial planning",
        popular: true,
      },
      { key: "luxury", name: "Luxury Planning", subtitle: "Full planning" },
    ],
    groups: [
      {
        title: "Venue & guests",
        rows: [
          { label: "Help selecting & booking the venue", cells: [false, true, true] },
          { label: "Digital invitation (eCard)", cells: [true, true, true] },
          { label: "Online RSVP", cells: [false, "Simple", "Advanced"] },
        ],
      },
      {
        title: "Design & concept",
        rows: [
          { label: "Wedding design concept", cells: [true, true, true] },
          { label: "Concept revisions", cells: ["up to 2", "up to 3", "up to 5"] },
          { label: "Floor plan (CAD & Canva)", cells: ["Basic", true, true] },
          { label: "2D layout (seating)", cells: [false, true, true] },
          { label: "Full 3D venue render", cells: [false, false, true] },
        ],
      },
      {
        title: "Vendors",
        rows: [
          { label: "Manage your external vendors", cells: [true, true, true] },
          {
            label: "Vendor selection from our base (special rates)",
            cells: [false, true, true],
          },
          { label: "Full management & negotiation", cells: [false, true, true] },
          { label: "Vendor payments via Olga Events", cells: [false, false, true] },
        ],
      },
      {
        title: "Wedding day",
        rows: [
          { label: "Coordination up to 8 hours", cells: [true, true, true] },
          { label: "Set-up coordinator", cells: [true, true, true] },
          {
            label: "Reception / programme coordinator",
            cells: [false, true, true],
          },
          { label: "Ceremony coordinator", cells: [false, false, true] },
          { label: "Entertainment coordinator", cells: [false, false, true] },
          { label: "Bridal assistant", cells: [false, false, true] },
          { label: "2 hostesses (greeting guests)", cells: [false, false, true] },
          { label: "Team works in shifts", cells: [false, false, true] },
        ],
      },
      {
        title: "Systems",
        rows: [
          { label: "Online planning portal", cells: [true, true, true] },
          { label: "Team chat", cells: [false, false, true] },
        ],
      },
    ],
    choose: "Choose",
  },

  decor: {
    heading: "Décor packages, everything for a beautiful wedding.",
    lead: "Each package includes everything needed for a beautiful wedding in a standard format, the core styling elements gathered into one solution with a clear price. Prices are shown for 100 guests; move the slider to your guest count and the price recalculates. What changes it: the number of chairs and the table styling in the chosen package. Florals included; décor is arranged separately from the planning package.",
    sliderLabel: "Guests",
    tiers: [
      {
        key: "bloom",
        name: "Bloom",
        level: "Décor · level 1",
        addon:
          "Extra table of 10 guests: + AED 850 (10 chairs + 1 Standard centerpiece)",
        groups: [
          {
            title: "Stage & structures",
            items: [
              "Dance floor 5×5 m",
              "Stage 5 m with step",
              "Backdrop (arches from collection)",
            ],
          },
          {
            title: "Tables & guests",
            items: ["10 Standard centerpieces, fresh flowers", "100 VIP chairs"],
          },
          { title: "Styling & logistics", items: styling },
        ],
      },
      {
        key: "signature",
        name: "Signature",
        level: "Décor · level 2",
        badge: "Most chosen",
        addon:
          "Extra table of 10 guests: + AED 1,300 (10 chairs + 1 Premium centerpiece)",
        groups: [
          {
            title: "Stage & structures",
            items: [
              "Dance floor 6×6 m",
              "Stage 8 m with step",
              "Full-width backdrop",
            ],
          },
          {
            title: "Tables & guests",
            items: [
              "10 Premium centerpieces, fresh flowers (fuller)",
              "100 VIP chairs",
            ],
          },
          { title: "Styling & logistics", items: styling },
        ],
      },
      {
        key: "elegance",
        name: "Elegance",
        level: "Décor · level 3",
        addon:
          "Extra table of 10 guests: + AED 2,000 (10 chairs + 1 Exclusive centerpiece)",
        groups: [
          {
            title: "Stage & structures",
            items: [
              "Dance floor 6×6 m",
              "Stage 13 m with step",
              "Catwalk ~10 m",
              "Full-width backdrop",
            ],
          },
          {
            title: "Tables & guests",
            items: [
              "10 Exclusive centerpieces, fresh flowers (large, premium)",
              "100 VIP chairs · 4 VIP tables",
              "4 lounge sets (sofas)",
              "Flowers for cocktail tables",
            ],
          },
          { title: "Styling & logistics", items: styling },
        ],
      },
    ],
    compareParagraph:
      "Packages differ by level of styling, and so by price. Bloom, a neat base: compact centerpieces, a basic choice of flowers and candles. Signature, a step up: medium-sized arrangements, more flowers and candles, more expressive candle holders. Elegance, the premium level: large, luxurious arrangements, premium flowers and crystal candelabra. The higher the package, the richer the stage, backdrop and florals, hence the price difference.",
    callout: {
      lead: "Each package is a ready set of everything needed for a beautiful wedding: stage, dance floor, backdrop, fresh-flower centerpieces, venue styling with artificial flowers, VIP chairs, entrance styling, light, transport & logistics. A convenient starting point with a clear price.",
      optionalTitle:
        "Additional elements stay optional, since every venue and every wedding are different. These may include:",
      optional: [
        "Staircase decoration",
        "Entrance styling",
        "Floor covering",
        "Wall covering",
        "Ceiling installations",
        "Hanging arrangements",
        "Photo areas",
        "Custom structures",
      ],
      afterText:
        "Many couples simply don't need these. So we keep the package base simple and don't make you pay for what you may never use, we let each wedding grow to your style, priorities and budget. And if you want a fully custom approach, it's convenient to start with the open budget: take planning and fill the décor with exactly what you need.",
    },
    individual: {
      title: "Individual décor, how it works",
      items: [
        {
          h: "Minimum order from AED 47,000.",
          t: "Covers logistics and preparation.",
        },
        {
          h: "Depends on guest count.",
          t: "The more guests, the higher the minimum (see the slider above).",
        },
        {
          h: "Décor your way.",
          t: "Within the amount you can remove or swap: more flowers instead of a dance floor; a catwalk or arch instead of a big stage.",
        },
        {
          h: "Reasonable limits.",
          t: "Everything has a budget by our costs, so we agree the mix with your planner: we'll tell you what realistically fits and where a top-up is needed.",
        },
      ],
    },
    notes: [
      {
        title: "Flowers",
        body: "Centerpieces, fresh flowers. The rest of the styling, quality artificial flowers.",
      },
      {
        title: "Florals by table shape",
        body: "Round / rectangular / S-shape, calculated individually.",
      },
      {
        title: "Candles",
        body: "Live candles in tall glass cylinders are part of the package: the water inside makes the flame safe, so they suit outdoors and indoors where open flame is allowed. We place them in centerpieces, on the floor and on stands around the décor; if open flame isn't allowed, we use elegant electronic candles. Natural wax candles by request and at extra cost: only premium wax with no drips on linens or holders; colour and quantity chosen individually.",
      },
      {
        title: "Why two prices",
        body: "The figure on top is the usual price for décor on its own. The large figure is the special price when booking décor together with planning. The difference is your saving.",
      },
      {
        title: "Price & guest count",
        body: "Price is for 100 guests. With each extra table of 10 guests it rises by a fixed amount (new chairs and a centerpiece for that table). The calculator recomputes automatically.",
      },
    ],
  },

  estimate: {
    heading: "Build your proposal in a minute.",
    lead: "Choose planning, décor and the number of guests to see the total. Everything included: transport and VAT. Then just place your order.",
  },

  additional: {
    heading: "Additional décor & services.",
    lead: "The packages include everything needed for a beautiful wedding. If you'd like more, we add it to your budget. Pricing discussed separately, on request, only if you truly need it.",
    columns: [
      {
        title: "Structures & production",
        items: [
          "Floor covering",
          "Wall covering",
          "Ceiling décor",
          "Truss structures",
          "Stage / catwalk / dance-floor extension",
          "Bar counter",
          "Acrylic & mirror elements",
        ],
      },
      {
        title: "Light & effects",
        items: [
          "Extra / truss lighting",
          "Chandeliers & stands",
          "Smoke / low fog",
          "Cold sparks",
          "CO₂ / confetti",
          "Photo booth",
          "Hanging LED string lights",
        ],
      },
      {
        title: "Flowers & table",
        items: [
          "Floral chandeliers & hanging installations",
          "Floral arch · entrance décor · ceremony aisle",
          "Premium fresh flowers",
          "Cake-table styling",
          "Premium chairs · charger plates · linens",
          "Welcome sign · table numbers · printing",
          "Extra lounge areas",
        ],
      },
    ],
    note: "We offer what a standard wedding needs. Anything beyond is by your wish and budget; prices discussed individually.",
  },

  transparent: {
    heading: "Transparent.",
    formula: "Planning + Décor package + Number of guests + Optional add-ons.",
    para: "The planning package is the work of the team and your peace of mind. The décor package is everything guests see and feel. Any add-ons, by request: we show 2–3 options at different prices in advance, you pick the one you like (often you can save), and if needed we find a solution exactly for your budget. We always confirm the final cost with you before work starts.",
  },

  howWeWork: {
    heading: "How we work and why it's important to book early.",
    lead: "We want to be fully open with you, so you understand how our work is structured and trust us calmly.",
    blocks: [
      {
        title: "What's in the packages is already ready.",
        body: "These elements are in our collection, with thought-through designs and clear prices. We assemble this standard set confidently and on time, no waiting.",
      },
      {
        title: "Everything additional is created for your wedding.",
        body: "Floor and wall covering, canopies and ceiling structures, hanging arrangements, photo zones and stands, each such element we plan and cost separately, for your venue, its size, zones and theme.",
      },
    ],
    whyTimeTitle:
      "Why additional décor takes time. To give you an accurate price we may need to:",
    whyTime: [
      "inspect the venue",
      "discuss the project with designers",
      "calculate flowers and materials",
      "coordinate with the production team",
      "check our inventory",
      "order decorative elements from abroad",
      "make custom pieces in acrylic, foam and glass",
      "involve specialised suppliers and factories",
      "run tests when needed",
    ],
    whyTimeNote: "Production itself often takes months.",
    inventoryTitle: "Our inventory exists, but it constantly needs:",
    inventory: [
      "repainting",
      "restoration",
      "modifications",
      "adaptation for each wedding",
    ],
    inventoryNote: "Luxury weddings are not assembled overnight.",
    timeline: [
      { label: "Venue selection", range: "20–60 days" },
      { label: "Design", range: "30–90 days" },
      { label: "Vendor selection", range: "20–60 days" },
      { label: "Production", range: "3–6 months" },
    ],
    idealTitle: "Why 12 months is the ideal timeline. This amount of time lets:",
    ideal: [
      "the couple enjoy life and work without pressure",
      "designers create beautiful concepts",
      "the production team prepare properly",
      "everyone make better decisions",
    ],
    closing:
      "Shorter timelines raise the pace and pressure for both the couple and the team. So we stay in touch from day one and are sincerely grateful to couples who plan ahead, this is our care for the result.",
  },

  custom: {
    heading: "Fully tailored to you.",
    para: "Packages are a convenient starting point, not a frame. If you'd like to build everything from scratch, take the planning package and we calmly run the project to your budget, openly showing the cost of each element. No pressure, at your pace.",
  },

  cta: {
    heading: "Let's start with a consultation.",
    para: "Tell us your vision and we'll put together a proposal made for you. Free, no obligation.",
    button: "Book a free consultation",
  },
};

export type PackagesContent = typeof packagesContent;
