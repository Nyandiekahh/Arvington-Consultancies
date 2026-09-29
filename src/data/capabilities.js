// Advisory Services — the 8 categories from "3. WHAT WE DO" in the site
// content spec. Each category's `subServices` are the numbered line items
// under it (e.g. 3.1.1.1, 3.1.1.2 ...), and `relatedVerticalIds` are the
// `id` values from data/verticals.js for the Consulting Verticals listed
// under that category in the spec.
export const capabilities = [
  {
    id: 'strategy-transformation',
    code: '3.1.1',
    name: 'Strategy & Business Transformation',
    short: 'Direction, choice and institutional ambition.',
    description:
      'We help Boards and leadership determine where the institution must go, the choices required to get there, and the architecture capable of carrying those choices into reality — spanning corporate strategy, growth, market entry, organisational transformation, operating model design, executive advisory and performance improvement.',
    strapline: 'Strategy becomes consequential when the institution is designed to carry it.',
    subServices: [
      'Corporate Strategy Development',
      'Business & Growth Strategy',
      'Market Entry & Expansion Strategy',
      'Organizational Transformation',
      'Operating Model Design',
      'Executive Advisory',
      'Performance Improvement Programmes',
    ],
    relatedVerticalIds: [2, 5],
  },
  {
    id: 'ai-digital',
    code: '3.1.2',
    name: 'AI, Data & Digital Transformation',
    short: 'Turning data into intelligence. Intelligence into decision advantage.',
    description:
      'We connect data, statistical methods, machine learning, AI, visualisation and digital infrastructure within the institutional context in which decisions are made and executed — from readiness assessment and use-case development through to intelligent automation and cybersecurity.',
    strapline: 'We build the intelligence infrastructure through which institutions understand more, decide better and act with greater precision.',
    subServices: [
      'AI Strategy & Readiness Assessment',
      'AI Use-Case Development',
      'Predictive Analytics Projects',
      'Business Intelligence Solutions',
      'Data Strategy & Governance',
      'Digital Transformation Advisory',
      'Intelligent Automation Projects',
      'Cybersecurity Assessments',
    ],
    relatedVerticalIds: [1, 14],
  },
  {
    id: 'investment-finance-risk',
    code: '3.1.3',
    name: 'Investment, Finance & Risk Advisory',
    short: 'The economic logic and financial architecture behind consequential decisions.',
    description:
      'We establish the quantitative foundations on which institutions allocate capital, assess opportunity, evaluate trade-offs and determine strategic direction — spanning investment readiness, financial modelling, valuation, due diligence, feasibility, capital raising and enterprise risk.',
    strapline: 'We turn financial complexity into the clarity required to underwrite a decision.',
    subServices: [
      'Investment Readiness Assessment',
      'Investment & Funding Strategy',
      'Financial Modelling',
      'Business Valuation',
      'Commercial Due Diligence',
      'Feasibility & Investment Appraisal',
      'Capital Raising Advisory',
      'Enterprise Risk Assessment',
    ],
    relatedVerticalIds: [5, 4, 11],
  },
  {
    id: 'research-economics-policy',
    code: '3.1.4',
    name: 'Research, Economics & Policy Advisory',
    short: 'Establishing what is true before determining what should be done.',
    description:
      'We apply scientific inquiry, statistical rigour and evidence synthesis to questions where the quality of knowledge determines the quality of institutional action — market research, economic impact and forecasting, policy and regulatory analysis, statistical consulting, survey design and evaluation.',
    strapline: 'We establish the evidence on which institutions can reason with confidence.',
    subServices: [
      'Market Research Studies',
      'Economic Impact Assessment',
      'Economic Forecasting & Modelling',
      'Policy Research & Analysis',
      'Regulatory Impact Assessment',
      'Statistical Consulting',
      'Survey Design & Analysis',
      'Monitoring, Evaluation & Learning',
      'Impact Evaluation',
    ],
    relatedVerticalIds: [3, 4, 19],
  },
  {
    id: 'technology-engineering-innovation',
    code: '3.1.5',
    name: 'Technology, Engineering & Innovation',
    short: 'Engineering rigour applied to what should be built, and whether it will pay back.',
    description:
      'We bring together engineering feasibility, technoeconomic assessment, manufacturing improvement, process optimisation and innovation commercialisation, connecting technical possibility with the economics required to scale it.',
    strapline: 'We connect engineering and innovation with the economics required to make it durable.',
    subServices: [
      'Engineering Feasibility Studies',
      'Technoeconomic Assessments',
      'Manufacturing Improvement',
      'Process Optimization',
      'Product Development Advisory',
      'Innovation Commercialization',
      'Technology Transfer Advisory',
      'Emerging Technology Advisory',
    ],
    relatedVerticalIds: [12, 18],
  },
  {
    id: 'government-development',
    code: '3.1.6',
    name: 'Government, Development & Institutional Advisory',
    short: 'Architecture, governance and capability for public institutions.',
    description:
      'We work with public institutions to strengthen the architecture through which they are governed, organised and sustained — public sector transformation, institutional reform, digital government, governance assessment, development programme design and donor advisory.',
    strapline: 'We strengthen the structures through which public institutions govern themselves and endure across administrations.',
    subServices: [
      'Public Sector Transformation',
      'Institutional Reform',
      'Digital Government Strategy',
      'GovTech Advisory',
      'Governance Assessments',
      'Development Programme Design',
      'Donor & Grant Advisory',
      'Institutional Capacity Strengthening',
    ],
    relatedVerticalIds: [10, 7],
  },
  {
    id: 'sector-infrastructure-sustainability',
    code: '3.1.7',
    name: 'Sector, Infrastructure & Sustainability Advisory',
    short: 'The sectoral systems economies and societies depend on.',
    description:
      'We advise across the sectoral and infrastructure systems that shape economic and social possibility — health systems, climate and sustainability, energy transition, agribusiness, infrastructure feasibility, transport, geospatial intelligence, supply chain and procurement.',
    strapline: 'We bring sectoral depth to the systems on which long-term institutional performance depends.',
    subServices: [
      'Health Systems Advisory',
      'Climate Risk Assessment',
      'Sustainability & ESG Advisory',
      'Energy Transition Studies',
      'Agribusiness Advisory',
      'Infrastructure Feasibility Studies',
      'Transport & Mobility Studies',
      'GIS & Geospatial Intelligence Projects',
      'Supply Chain Optimization',
      'Procurement Advisory',
    ],
    relatedVerticalIds: [8, 9, 16, 15, 13, 17],
  },
  {
    id: 'projects-training-capability',
    code: '3.1.8',
    name: 'Projects, Training & Institutional Capability',
    short: 'The discipline that carries ambition through to delivery.',
    description:
      'We establish the governance, accountability and delivery architecture through which complex programmes move from strategic intent to measurable outcomes, and build the people, leadership and workforce capability required to sustain that performance.',
    strapline: 'We strengthen delivery and capability as core institutional functions, not isolated project work.',
    subServices: [
      'Project Management Office (PMO) Advisory',
      'Programme Management',
      'Portfolio Management',
      'Project Performance Reviews',
      'Project Risk & Quality Assurance',
      'Executive Training Programmes',
      'Leadership Development',
      'Workforce Skills Development',
      'Institutional Capacity Building',
    ],
    relatedVerticalIds: [6, 20],
  },
]

export const industries = [
  {
    id: 'governments',
    name: 'Governments',
    description: 'Public institutions, ministries, agencies and local authorities.',
  },
  {
    id: 'corporates',
    name: 'Corporates',
    description: 'Large enterprises, SMEs and multinational organisations.',
  },
  {
    id: 'financial-institutions',
    name: 'Financial Institutions',
    description: 'Banks, insurers, investors, funds and financial intermediaries.',
  },
  {
    id: 'development-partners',
    name: 'Development Partners',
    description: 'International organisations, development agencies and NGOs.',
  },
  {
    id: 'universities',
    name: 'Universities & Research Institutions',
    description: 'Universities, research centres and scientific organisations.',
  },
  {
    id: 'health-life-sciences',
    name: 'Health & Life Sciences',
    description: 'Pharmaceuticals, biotechnology, healthcare systems and life sciences organisations.',
  },
  {
    id: 'infrastructure-industry',
    name: 'Infrastructure & Industry',
    description: 'Engineering, manufacturing, energy, transport and infrastructure institutions.',
  },
]

export const pillars = [
  {
    id: 'multidisciplinary',
    name: 'Multidisciplinary',
    description:
      'Complex institutional questions demand multiple lenses, integrated around a single objective. We assemble the expertise required by the institution and the consequence at hand.',
  },
  {
    id: 'evidence-led',
    name: 'Evidence-Led',
    description:
      'We ground consequential decisions in evidence, rigorous analysis, research and intelligence capable of withstanding scrutiny.',
  },
  {
    id: 'institutional',
    name: 'Institutional',
    description:
      'We work beyond the immediate assignment to strengthen capability, governance, systems and institutional value that endure beyond our involvement.',
  },
  {
    id: 'integrated',
    name: 'Integrated',
    description:
      'We connect strategy, technology, economics, finance, intelligence and execution within one architecture, creating coherence from decision to implementation.',
  },
  {
    id: 'independent',
    name: 'Independent',
    description:
      'We exercise independent judgement and intellectual honesty, giving Boards and leadership the analysis the institution requires, even when it challenges prevailing assumptions.',
  },
]

export const pipelineStages = [
  { id: 'data', label: 'Data', note: 'Evidence & Information' },
  { id: 'analytics', label: 'Analytics', note: 'Modelling & Analysis' },
  { id: 'intelligence', label: 'Intelligence', note: 'Interpretation & Foresight' },
  { id: 'strategy', label: 'Strategy', note: 'Direction & Choices' },
  { id: 'decision', label: 'Decision', note: 'Executive Judgement' },
  { id: 'execution', label: 'Execution', note: 'Implementation' },
  { id: 'impact', label: 'Impact', note: 'Institutional Value' },
]