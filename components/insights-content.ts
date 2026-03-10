export type InsightArticle = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  intro: string;
  metadataTitle: string;
  metadataDescription: string;
  sections: {
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
  }[];
  related: string[];
};

export const insightArticles: InsightArticle[] = [
  {
    slug: 'how-bridge-loans-work',
    title: 'How Bridge Loans Work for Real Estate Investors',
    category: 'Bridge Lending',
    excerpt:
      'A practical guide to bridge financing for acquisitions, lease-up, repositioning, and transitional real estate strategies.',
    intro:
      'Bridge debt is designed for projects that need speed, structure, and a clear path to stabilization or exit. For experienced operators, it can provide execution certainty when timing matters.',
    metadataTitle: 'How Bridge Loans Work | Northline Capital',
    metadataDescription:
      'Learn how bridge loans work for acquisitions, lease-up, repositioning, and transitional real estate assets.',
    sections: [
      {
        heading: 'What a bridge loan is',
        paragraphs: [
          'A bridge loan is short-term business-purpose financing used to acquire, refinance, or recapitalize an asset that is not yet positioned for permanent debt.',
          'The structure is typically interest-only and built around a specific business plan, such as renovating units, improving occupancy, or completing operational repositioning.'
        ]
      },
      {
        heading: 'Common use cases',
        bullets: [
          'Acquiring a value-add multifamily or mixed-use property',
          'Refinancing an existing loan before maturity while the project is still transitioning',
          'Funding lease-up for a recently improved or re-tenanted asset',
          'Executing a short hold before agency or bank takeout'
        ]
      },
      {
        heading: 'Typical loan terms',
        paragraphs: [
          'Terms often range from 6 to 24 months depending on asset type and business plan complexity. Proceeds are generally sized to loan-to-value and, where relevant, loan-to-cost constraints.',
          'Pricing, origination points, extension options, and reserve requirements vary by sponsor profile, market conditions, and exit clarity.'
        ]
      },
      {
        heading: 'What lenders look for',
        bullets: [
          'Sponsor execution history with similar business plans',
          'Basis relative to current and projected asset value',
          'Realistic timeline to stabilization and refinance or sale',
          'Liquidity, contingency capacity, and risk controls'
        ]
      },
      {
        heading: 'When bridge debt makes sense',
        paragraphs: [
          'Bridge financing is often the right tool when an asset needs transitional capital and the borrower has a defined path to permanent financing.',
          'If you are evaluating options, review our Bridge Loans program and process expectations at /loan-programs/bridge-loans and /loan-process.'
        ]
      }
    ],
    related: ['bridge-loan-vs-hard-money', 'loan-to-cost-vs-loan-to-value', 'how-ground-up-construction-loans-work']
  },
  {
    slug: 'bridge-loan-vs-hard-money',
    title: 'Bridge Loan vs. Hard Money Loan: What’s the Difference?',
    category: 'Bridge Lending',
    excerpt:
      'A clear comparison of bridge loans and hard money structures, including underwriting depth, collateral, and borrower fit.',
    intro:
      'Bridge and hard money are often discussed together, but they are not identical products. Understanding the differences helps borrowers choose financing that aligns with both execution needs and risk profile.',
    metadataTitle: 'Bridge Loan vs Hard Money Loan | Northline Capital',
    metadataDescription:
      'Compare bridge loans and hard money loans for real estate investors, including structure, underwriting, and use cases.',
    sections: [
      {
        heading: 'Definitions',
        paragraphs: [
          'Bridge loans are generally structured transitional loans for business-purpose real estate with a defined exit strategy and institutional underwriting discipline.',
          'Hard money often refers to shorter-term, collateral-driven loans that may place less emphasis on full business-plan underwriting.'
        ]
      },
      {
        heading: 'Key differences',
        bullets: [
          'Underwriting depth: bridge debt often includes more comprehensive project analysis',
          'Asset scope: bridge programs can cover a broader set of transitional property types',
          'Structure: bridge terms may provide more tailored reserves and extension mechanics',
          'Borrower profile: repeat operators often prefer lenders with repeatable execution frameworks'
        ]
      },
      {
        heading: 'When borrowers use each',
        paragraphs: [
          'Borrowers may use hard money for very short timelines or highly collateral-driven scenarios. Bridge debt is commonly used when the project requires a structured path from transitional operations to stabilized takeout financing.'
        ]
      },
      {
        heading: 'Which may be a better fit',
        paragraphs: [
          'For borrowers prioritizing institutional communication, underwriting clarity, and predictable execution, bridge financing is often the stronger long-term platform choice.',
          'Explore program details at /loan-programs/bridge-loans and the closing process at /loan-process.'
        ]
      }
    ],
    related: ['how-bridge-loans-work', 'loan-to-cost-vs-loan-to-value', 'what-is-a-dscr-loan']
  },
  {
    slug: 'what-is-a-dscr-loan',
    title: 'What Is a DSCR Loan?',
    category: 'DSCR',
    excerpt:
      'Understand DSCR lending fundamentals, cash-flow underwriting, and when DSCR debt is a practical fit for rental investors.',
    intro:
      'DSCR lending is centered on property cash flow rather than borrower wage income. For rental investors, this can create efficient financing aligned with portfolio operations.',
    metadataTitle: 'What Is a DSCR Loan? | Northline Capital',
    metadataDescription:
      'Learn how DSCR loans work for rental property investors and how lenders evaluate property-level cash flow.',
    sections: [
      {
        heading: 'What DSCR means',
        paragraphs: [
          'DSCR stands for debt service coverage ratio. It measures how much net operating income a property generates relative to required debt payments.',
          'A DSCR of 1.0x means income is equal to debt service. Higher ratios indicate stronger coverage and typically more lender comfort.'
        ]
      },
      {
        heading: 'How lenders calculate it',
        paragraphs: [
          'Lenders generally compare underwritten rental income against principal-and-interest obligations, while also accounting for vacancy assumptions and operating expenses.',
          'Specific methodologies vary, but the core focus remains consistent: can the property support its debt payments under realistic assumptions?'
        ]
      },
      {
        heading: 'Why investors use DSCR loans',
        bullets: [
          'Qualification tied to property performance',
          'Scalable structure for portfolio growth',
          'Useful for acquisitions and refinances of stabilized rentals'
        ]
      },
      {
        heading: 'Common requirements',
        bullets: [
          'Minimum DSCR threshold',
          'Property condition and marketability review',
          'Acceptable leverage and sponsor liquidity',
          'Entity structure and documentation readiness'
        ]
      },
      {
        heading: 'When a DSCR loan fits',
        paragraphs: [
          'DSCR programs fit borrowers with stabilized rental assets and a property-level operating approach.',
          'See our Rental / DSCR loan program at /loan-programs/rental-dscr and full process expectations at /loan-process.'
        ]
      }
    ],
    related: ['how-airbnb-financing-works', 'loan-to-cost-vs-loan-to-value', 'how-bridge-loans-work']
  },
  {
    slug: 'how-airbnb-financing-works',
    title: 'How Airbnb Financing Works for Short-Term Rental Investors',
    category: 'STR Financing',
    excerpt:
      'A lender perspective on financing Airbnb and VRBO properties, including market risk, income volatility, and deal structure.',
    intro:
      'Short-term rental financing requires underwriting that balances property performance, local market demand, and operator capability. Strong structures are built on real operating data and clear exit planning.',
    metadataTitle: 'Airbnb Financing & Short-Term Rental Loans | Northline Capital',
    metadataDescription:
      'Learn how financing works for Airbnb, VRBO, and other short-term rental properties.',
    sections: [
      {
        heading: 'What short-term rental financing is',
        paragraphs: [
          'Short-term rental loans are business-purpose products for properties operated as vacation or transient rentals through channels such as Airbnb and VRBO.',
          'These structures are typically used by investors focused on occupancy management, pricing discipline, and operational consistency.'
        ]
      },
      {
        heading: 'How underwriting differs from traditional rental loans',
        paragraphs: [
          'Compared with long-term DSCR models, STR underwriting places greater emphasis on seasonality, booking trends, and market-level tourism demand.',
          'Lenders often evaluate whether reported performance is durable across market cycles rather than relying solely on peak-period revenue.'
        ]
      },
      {
        heading: 'What lenders evaluate',
        bullets: [
          'Historical income quality and stability',
          'Property location and demand drivers',
          'Operator experience in short-term rental management',
          'Leverage, reserves, and refinance exit path'
        ]
      },
      {
        heading: 'Common use cases',
        bullets: [
          'Acquisition of stabilized Airbnb or VRBO assets',
          'Refinancing high-performing STR properties',
          'Bridge structures prior to longer-term debt'
        ]
      },
      {
        heading: 'Property and market considerations',
        paragraphs: [
          'Regulatory environment, local permitting trends, and demand depth are critical variables. Borrowers should model conservative scenarios before finalizing leverage.',
          'Review current product details at /loan-programs/short-term-rental-loans and loan execution workflow at /loan-process.'
        ]
      }
    ],
    related: ['what-is-a-dscr-loan', 'how-bridge-loans-work', 'how-ground-up-construction-loans-work']
  },
  {
    slug: 'loan-to-cost-vs-loan-to-value',
    title: 'Loan-to-Cost vs. Loan-to-Value: What Borrowers Need to Know',
    category: 'Underwriting',
    excerpt:
      'A straightforward breakdown of LTC and LTV and why both metrics matter for pricing, proceeds, and risk management.',
    intro:
      'LTC and LTV are core underwriting controls. Borrowers who understand both can structure deals more effectively and avoid late-stage surprises in sizing.',
    metadataTitle: 'Loan-to-Cost vs Loan-to-Value | Northline Capital',
    metadataDescription:
      'Understand the difference between LTC and LTV and how lenders use both metrics in real estate underwriting.',
    sections: [
      {
        heading: 'What LTC means',
        paragraphs: [
          'Loan-to-cost compares loan proceeds to total project cost. It is especially relevant in renovation and construction scenarios where basis and budget discipline are essential.'
        ]
      },
      {
        heading: 'What LTV means',
        paragraphs: [
          'Loan-to-value compares proceeds to collateral value. It helps lenders control downside risk if market conditions or business-plan execution deteriorate.'
        ]
      },
      {
        heading: 'How they differ',
        bullets: [
          'LTC anchors leverage to cost basis and budget',
          'LTV anchors leverage to collateral valuation',
          'Either metric can be the binding constraint depending on deal profile'
        ]
      },
      {
        heading: 'Why lenders use both',
        paragraphs: [
          'Using both metrics provides a more complete risk view. LTC protects against overleveraging project costs, while LTV protects against valuation risk and market shifts.'
        ]
      },
      {
        heading: 'Why borrowers should care',
        paragraphs: [
          'Understanding where your deal is constrained helps you set realistic expectations for proceeds, equity requirements, and timeline.',
          'See how these constraints apply across our Bridge and Construction programs at /loan-programs/bridge-loans and /loan-programs/construction.'
        ]
      }
    ],
    related: ['how-bridge-loans-work', 'how-ground-up-construction-loans-work', 'bridge-loan-vs-hard-money']
  },
  {
    slug: 'how-ground-up-construction-loans-work',
    title: 'How Ground-Up Construction Loans Work',
    category: 'Construction',
    excerpt:
      'An overview of construction loan structure, draw administration, underwriting priorities, and exit planning.',
    intro:
      'Ground-up construction financing requires tight alignment between budget, timeline, and sponsor execution capability. Clear draw administration and disciplined underwriting are central to successful outcomes.',
    metadataTitle: 'How Ground-Up Construction Loans Work | Northline Capital',
    metadataDescription:
      'Learn how ground-up construction loans work, including draw process, underwriting, and common borrower requirements.',
    sections: [
      {
        heading: 'What a construction loan is',
        paragraphs: [
          'A construction loan is business-purpose financing for new development projects, typically advanced through staged funding rather than one-time disbursement.'
        ]
      },
      {
        heading: 'How draw structures work',
        paragraphs: [
          'Borrowers generally fund initial costs and then request reimbursements against completed milestones. Lenders verify progress through draw inspections and documentation before releasing capital.'
        ]
      },
      {
        heading: 'What lenders evaluate',
        bullets: [
          'Sponsor development and project-management history',
          'Budget realism and contingency depth',
          'Schedule feasibility and contractor strength',
          'Market absorption assumptions and exit path'
        ]
      },
      {
        heading: 'Typical risks and requirements',
        paragraphs: [
          'Construction projects face execution, cost-overrun, and market-timing risk. Lenders typically require liquidity support, reserves, and clear documentation controls to mitigate those risks.'
        ]
      },
      {
        heading: 'Exit strategy considerations',
        paragraphs: [
          'Borrowers should define whether takeout comes from sale, refinance, or stabilization hold before closing. Exit clarity is a key factor in construction credit decisions.',
          'Program details and process guidance are available at /loan-programs/construction and /loan-process.'
        ]
      }
    ],
    related: ['loan-to-cost-vs-loan-to-value', 'how-bridge-loans-work', 'what-is-a-dscr-loan']
  }
];

export const insightBySlug = Object.fromEntries(insightArticles.map((article) => [article.slug, article])) as Record<
  string,
  InsightArticle
>;
