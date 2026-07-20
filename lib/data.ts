export const siteConfig = {
  name: "Yashant Sharma",
  title: "Meet Yashant",
  tagline: "Strategy • Consulting • Systems Thinking • Human-Centered Leadership",
  headline:
    "I solve complex business problems by combining behavioral science, systems thinking, strategy, and execution.",
  email: "yashant.sharma@example.com",
  linkedin: "https://linkedin.com/in/yashantsharma",
  location: "India",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/journey", label: "Journey" },
  { href: "/projects", label: "Projects" },
  { href: "/leadership", label: "Leadership" },
  { href: "/Yashant_Sharma_Resume.pdf", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export const aboutNarrative = {
  intro:
    "I haven't changed careers — I've intentionally built transferable capabilities across industries. Every chapter of my journey reflects the same core strengths: understanding people, designing better systems, and driving execution.",
  pillars: [
    {
      title: "Understanding People",
      description:
        "Rooted in education and psychology, I bring behavioral science to every problem — decoding motivations, reducing friction, and designing for how people actually think and act.",
    },
    {
      title: "Designing Better Systems",
      description:
        "From social impact ventures to enterprise consulting, I architect systems that connect strategy to operations — clear structures that scale with clarity and purpose.",
    },
    {
      title: "Driving Execution",
      description:
        "Ideas only matter when they ship. I thrive in ambiguity, aligning stakeholders, building momentum, and delivering outcomes that hold up under real-world pressure.",
    },
  ],
};

export const timeline = [
  {
    id: "ashoka",
    title: "Ashoka University",
    period: "Foundation",
    description:
      "Built a rigorous intellectual foundation in liberal arts and interdisciplinary thinking — learning to ask better questions before jumping to answers.",
    highlight: "Critical thinking & research foundations",
  },
  {
    id: "oxford",
    title: "University of Oxford",
    period: "Academic Excellence",
    description:
      "Deepened expertise in education and psychology at one of the world's leading institutions — grounding my work in evidence-based understanding of human behavior.",
    highlight: "Education & behavioral science",
  },
  {
    id: "social-impact",
    title: "Education & Social Impact",
    period: "Purpose-Driven Work",
    description:
      "Applied academic insights to real communities — designing programs, managing stakeholders, and creating measurable impact in education and social development.",
    highlight: "Community impact at scale",
  },
  {
    id: "farm-to-folks",
    title: "Farm To Folks",
    period: "Entrepreneurship",
    description:
      "Founded and scaled an agri-tech venture — building operations from zero, managing supply chains, and solving complex stakeholder problems across rural and urban ecosystems.",
    highlight: "Zero-to-one venture building",
  },
  {
    id: "consulting",
    title: "Strategy & Consulting",
    period: "Advisory",
    description:
      "Transitioned into strategic consulting — helping organizations navigate complexity, align leadership teams, and translate vision into executable roadmaps.",
    highlight: "Cross-industry advisory",
  },
  {
    id: "pwc",
    title: "PwC",
    period: "Enterprise Consulting",
    description:
      "Delivering high-stakes consulting engagements for global clients — combining analytical rigor with human-centered problem solving at enterprise scale.",
    highlight: "Enterprise-scale delivery",
  },
  {
    id: "future",
    title: "Future",
    period: "What's Next",
    description:
      "Continuing to build at the intersection of strategy, systems, and human behavior — seeking opportunities to solve problems that matter at scale.",
    highlight: "Open to what's next",
    isFuture: true,
  },
];

export type Project = {
  id: string;
  title: string;
  organization: string;
  category: string;
  summary: string;
  challenge: string;
  approach: string;
  impact: string;
  lessons: string;
  gradient: string;
};

export const projects: Project[] = [
  {
    id: "pwc",
    title: "Enterprise Strategy Transformation",
    organization: "PwC",
    category: "Consulting",
    summary:
      "Led strategic advisory engagements helping global organizations navigate complex transformations with clarity and stakeholder alignment.",
    challenge:
      "A multinational client faced fragmented strategy execution across business units, with misaligned priorities and declining stakeholder confidence in the transformation roadmap.",
    approach:
      "Conducted stakeholder diagnostics, mapped behavioral and operational bottlenecks, and co-designed a unified strategy framework with clear ownership, milestones, and governance structures.",
    impact:
      "Delivered a actionable 18-month transformation roadmap adopted by C-suite leadership, with measurable improvement in cross-functional alignment and program delivery velocity.",
    lessons:
      "Strategy without stakeholder buy-in is just a document. The hardest part isn't the analysis — it's designing systems that people actually want to execute.",
    gradient: "from-blue-600/20 via-indigo-600/10 to-violet-600/20",
  },
  {
    id: "farm-to-folks",
    title: "Agri-Tech Supply Chain Platform",
    organization: "Farm To Folks",
    category: "Entrepreneurship",
    summary:
      "Built and scaled a farm-to-consumer platform connecting rural producers with urban markets through technology-enabled logistics.",
    challenge:
      "Smallholder farmers lacked direct market access while urban consumers wanted fresh, traceable produce — with fragmented supply chains creating waste and inefficiency on both sides.",
    approach:
      "Designed an end-to-end supply chain system with farmer onboarding, quality protocols, cold-chain logistics, and a consumer-facing platform — built for operational reliability, not just tech novelty.",
    impact:
      "Created sustainable livelihoods for farming communities while reducing supply chain waste, proving that social impact and business viability can coexist.",
    lessons:
      "Building in ambiguous environments requires extreme versatility. You can't optimize one part of the system — you have to design the whole thing to work together.",
    gradient: "from-emerald-600/20 via-teal-600/10 to-cyan-600/20",
  },
  {
    id: "wisdom-tree",
    title: "Learning Experience Design",
    organization: "Wisdom Tree",
    category: "Education",
    summary:
      "Designed and delivered innovative learning programs that bridge academic rigor with practical skill development for diverse learner populations.",
    challenge:
      "Traditional education models weren't meeting the needs of learners who required both conceptual depth and applied, career-relevant skills in fast-changing environments.",
    approach:
      "Applied behavioral science principles to curriculum design — creating modular learning pathways, formative assessment systems, and engagement frameworks grounded in how people actually learn.",
    impact:
      "Improved learner engagement and outcomes through human-centered program design, demonstrating that education works best when it respects cognitive and motivational realities.",
    lessons:
      "The best learning systems aren't content-heavy — they're behavior-aware. Design for attention, motivation, and retention, not just information delivery.",
    gradient: "from-amber-600/20 via-orange-600/10 to-rose-600/20",
  },
  {
    id: "jamboree",
    title: "Student Engagement & Growth",
    organization: "Jamboree",
    category: "Education",
    summary:
      "Drove student engagement and program growth through data-informed strategy, stakeholder management, and operational excellence in test prep education.",
    challenge:
      "Competitive test prep market required differentiated student experiences and scalable operations while maintaining quality outcomes across diverse student cohorts.",
    approach:
      "Built data-driven engagement systems, optimized program operations, and aligned cross-functional teams around student success metrics — combining analytics with human touchpoints.",
    impact:
      "Increased student engagement and program efficiency through systematic improvements in operations, communication, and performance tracking.",
    lessons:
      "In education businesses, your product is human transformation. Operations and empathy aren't opposites — they're multipliers when designed together.",
    gradient: "from-purple-600/20 via-fuchsia-600/10 to-pink-600/20",
  },
  {
    id: "social-impact",
    title: "Community Development Programs",
    organization: "Social Impact Initiatives",
    category: "Social Impact",
    summary:
      "Designed and managed community development programs focused on education access, skill building, and sustainable local impact.",
    challenge:
      "Underserved communities needed scalable, locally relevant programs that could create lasting change without creating dependency on external resources.",
    approach:
      "Co-created programs with community stakeholders, built local capacity, and designed measurement frameworks that tracked both immediate outcomes and long-term sustainability indicators.",
    impact:
      "Delivered measurable improvements in education access and skill development while building local leadership capacity for sustained community-driven growth.",
    lessons:
      "Impact work taught me that the best solutions emerge from the community, not for it. Facilitation beats prescription every time.",
    gradient: "from-sky-600/20 via-blue-600/10 to-indigo-600/20",
  },
];

export const leadershipPhilosophy = [
  {
    id: "human-centered",
    title: "Human-Centered Leadership",
    description:
      "People aren't resources to be optimized — they're the system. I lead by understanding motivations, building trust, and creating environments where teams do their best work.",
    icon: "Heart",
  },
  {
    id: "behavioral-systems",
    title: "Behavioral Systems Thinking",
    description:
      "Every organization is a system of human behaviors. I design interventions that account for incentives, friction, and feedback loops — not just org charts.",
    icon: "Brain",
  },
  {
    id: "stakeholder",
    title: "Stakeholder Management",
    description:
      "Complex problems have many owners. I map stakeholder landscapes, align interests, and build coalitions that sustain momentum beyond any single project.",
    icon: "Users",
  },
  {
    id: "execution",
    title: "Execution Under Ambiguity",
    description:
      "Clarity is a luxury. I operate effectively when the path isn't clear — making decisions with incomplete information and iterating toward outcomes.",
    icon: "Zap",
  },
  {
    id: "problem-solving",
    title: "Problem Solving",
    description:
      "I decompose complex challenges into tractable components, identify leverage points, and build solutions that address root causes, not symptoms.",
    icon: "Lightbulb",
  },
  {
    id: "versatility",
    title: "Versatility",
    description:
      "I've built capabilities across education, entrepreneurship, and consulting — not by changing careers, but by recognizing that the same skills transfer everywhere.",
    icon: "Layers",
  },
];

export const skills = [
  "Strategy",
  "Consulting",
  "Stakeholder Management",
  "Behavioral Science",
  "Program Management",
  "Operations",
  "Research",
  "Leadership",
  "Business Development",
  "Data Analysis",
  "Communication",
  "System Design",
];

export const resumeSections = [
  {
    title: "Experience",
    items: [
      {
        role: "Consulting Professional",
        org: "PwC",
        period: "Present",
        points: [
          "Lead strategic advisory engagements for global enterprise clients",
          "Design transformation roadmaps with stakeholder alignment frameworks",
          "Deliver complex consulting projects under tight timelines",
        ],
      },
      {
        role: "Founder & CEO",
        org: "Farm To Folks",
        period: "Entrepreneurship",
        points: [
          "Built agri-tech platform connecting farmers to urban consumers",
          "Designed end-to-end supply chain and operations systems",
          "Managed cross-functional teams across rural and urban operations",
        ],
      },
      {
        role: "Strategy & Program Lead",
        org: "Jamboree",
        period: "Education",
        points: [
          "Drove student engagement through data-informed program design",
          "Optimized operations and cross-functional team alignment",
          "Built performance tracking and growth systems",
        ],
      },
      {
        role: "Program Designer",
        org: "Wisdom Tree",
        period: "Education",
        points: [
          "Designed learning experiences grounded in behavioral science",
          "Created modular curriculum and assessment frameworks",
          "Improved learner engagement and outcomes",
        ],
      },
    ],
  },
  {
    title: "Education",
    items: [
      {
        role: "Education & Psychology",
        org: "University of Oxford",
        period: "Graduate Studies",
        points: [
          "Advanced study in education, psychology, and human behavior",
          "Research in learning systems and behavioral interventions",
        ],
      },
      {
        role: "Liberal Arts",
        org: "Ashoka University",
        period: "Undergraduate",
        points: [
          "Interdisciplinary foundation in critical thinking and research",
          "Cross-domain problem solving and analytical frameworks",
        ],
      },
    ],
  },
];
