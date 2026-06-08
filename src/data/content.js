/**
 * Portfolio content — edit this file to update your site.
 * Add projects, experience entries, skills, and personal info here.
 */

export const site = {
  title: "Ashish Sharma",
  tagline: "Thinker · Problem Solver · Storyteller",
  role: "Data Engineer with a full-stack foundation",
  description:
    "Data Engineer who thinks deeply, solves messy problems, and tells clear stories with data — pipelines, dashboards, and healthcare analytics.",
  keywords:
    "Ashish Sharma, Data Engineer, ETL, Healthcare Analytics, Medicare, Python, SQL, AWS, Full Stack Developer",
  location: "New Delhi, India",
  email: "ashishsharma.sde@gmail.com",
  resume: "/ashish-portfolio/resume.pdf",
  social: {
    github: "https://github.com/AshishSharmaSDE",
    linkedin: "https://www.linkedin.com/in/ashish-sharma-sde/",
    twitter: "https://x.com/AshishSharmaSde",
  },
};

export const traits = [
  {
    id: "thinker",
    title: "Thinker",
    tagline: "Question before you code",
    description:
      "I start with why — mapping stakeholders, constraints, and edge cases before touching a pipeline or dashboard. Good data work begins with clarity, not tooling.",
  },
  {
    id: "solver",
    title: "Problem Solver",
    tagline: "Messy data, clean outcomes",
    description:
      "Broken joins, conflicting reports, legacy spreadsheets — I dig in, reconcile sources, and ship reliable systems that teams actually trust on Monday morning.",
  },
  {
    id: "storyteller",
    title: "Storyteller",
    tagline: "Make the numbers speak",
    description:
      "A pipeline alone isn't enough. I craft dashboards and narratives so sales leaders see the story behind quota gaps, conversion drops, and regional wins.",
  },
];

export const approach = {
  quote:
    "Data without context is noise. My job is to find the signal, fix what's broken, and tell the story so the right people can act.",
  process: [
    {
      step: "01",
      title: "Listen & map",
      text: "Understand the business question, the audience, and what \"good\" looks like before writing a single query.",
    },
    {
      step: "02",
      title: "Design & deliver",
      text: "Build pipelines, models, and checks — iterative, documented, and built to survive real-world data chaos.",
    },
    {
      step: "03",
      title: "Show & refine",
      text: "Turn outputs into dashboards and stories stakeholders use — then iterate from their feedback.",
    },
  ],
};

export const about = {
  headline: "I don't just move data — I make it mean something.",
  bio: `I'm a Data Engineer with a full-stack foundation. At EXL, I build Medicare sales pipelines and dashboards that field teams rely on every week. Before data engineering, I spent four years shipping healthcare apps — so I think in systems, not silos. Whether it's reconciling commission files or explaining a funnel drop to leadership, I connect the technical work to the human decision behind it.`,
  highlights: [
    "Think first — stakeholder context before architecture",
    "Solve deeply — quality, lineage, and trust in the numbers",
    "Tell clearly — dashboards that drive action, not confusion",
  ],
  stats: [
    { value: "6+", label: "Years in software" },
    { value: "2+", label: "Years in data engineering" },
    { value: "Healthcare", label: "Medicare & payer domain" },
  ],
  floatingCard: {
    label: "Currently",
    value: "Data Engineer @ EXL",
  },
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

/** Short labels for mobile bottom nav */
export const mobileNav = [
  { label: "Home", href: "#hero", icon: "home" },
  { label: "About", href: "#about", icon: "about" },
  { label: "Work", href: "#projects", icon: "work" },
  { label: "Skills", href: "#skills", icon: "skills" },
  { label: "Contact", href: "#contact", icon: "contact" },
];

/** Add new roles here — newest first. track: "data" | "fullstack" */
export const experience = [
  {
    id: "exl-de",
    track: "data",
    role: "Data Engineer",
    company: "EXL Service",
    location: "Noida, IN",
    start: "Jun 2024",
    end: "Present",
    summary:
      "Building data pipelines and sales analytics for Medicare operations — from ingestion to dashboard delivery.",
    responsibilities: [
      "Designed batch ETL pipelines ingesting Medicare enrollment, lead, and commission data from multiple source systems into a curated analytics layer.",
      "Built interactive sales dashboards tracking quota attainment, conversion rates, agent performance, and regional trends for the Medicare sales leadership team.",
      "Implemented data quality checks and reconciliation jobs that reduced reporting discrepancies by 35% and improved trust in weekly KPI reviews.",
      "Partnered with sales ops and engineering to define dimensional models and self-serve metrics used across 50+ field agents.",
      "Automated pipeline orchestration and monitoring with scheduled jobs, alerting, and documentation for downstream analysts.",
    ],
    skills: [
      "Python",
      "SQL",
      "ETL/ELT",
      "AWS",
      "Data Modeling",
      "Power BI",
      "MySQL",
    ],
    projects: [
      "Medicare Sales Analytics Dashboard",
      "Enrollment & Commission Data Pipeline",
    ],
  },
  {
    id: "exl-fs",
    track: "fullstack",
    role: "Sr. Software Engineer",
    company: "EXL Service",
    location: "Noida, IN",
    start: "May 2023",
    end: "May 2024",
    summary:
      "Full-stack engineering on healthcare platforms before transitioning into a dedicated data engineering role.",
    responsibilities: [
      "Led migration of healthcare TCL workflows to TypeScript, reducing processing time by 40% and eliminating 90% of runtime errors.",
      "Engineered component optimization strategies that cut page load times by 40% and increased user engagement by 25%.",
      "Mentored team members on TypeScript, SQL fundamentals, and project delivery — bridging application and data concerns.",
    ],
    skills: ["TypeScript", "TCL", ".NET", "MySQL", "Git", "JavaScript"],
    projects: ["JCS to JEDI", "CareRadius"],
  },
  {
    id: "gspann",
    track: "fullstack",
    role: "Software Engineer",
    company: "GSPANN Technologies",
    location: "Gurgaon, IN",
    start: "Mar 2022",
    end: "May 2023",
    summary:
      "Python dashboards, data visualization, and AWS deployments — early foundation for analytics-focused work.",
    responsibilities: [
      "Developed Python-based customized dashboards with advanced data visualization and AI modelling for business stakeholders.",
      "Implemented Git version control and Jenkins CI/CD pipelines for reliable, repeatable deployments.",
      "Orchestrated deployment of 3 projects on AWS with 99.99% uptime, meeting all client deadlines.",
    ],
    skills: ["Python", "Pandas", "AWS", "Git", "Dashboards"],
    projects: ["Customized Dashboard & AI Modelling Project"],
  },
  {
    id: "navisite",
    track: "fullstack",
    role: "Software Engineer",
    company: "NaviSite India Ltd.",
    location: "Gurgaon, IN",
    start: "Feb 2020",
    end: "Mar 2022",
    summary:
      "Full-stack development with Angular, Python Flask, and AWS — monitoring and legacy modernization.",
    responsibilities: [
      "Built an Angular application with Python-Flask backend, reducing infrastructure downtime by 25% through real-time monitoring.",
      "Led CAM Core legacy system migration from Python 2 to Python 3 with zero production disruption.",
      "Delivered projects 15% under budget and 20% ahead of schedule using TypeScript, Angular, and AWS.",
    ],
    skills: ["TypeScript", "Angular", "Python", "Flask", "Git", "AWS"],
    projects: [
      "CAM Core Python 2 → 3 Migration",
      "Sentry: Alert Management System",
    ],
  },
];

/**
 * Add new projects here.
 * category: "dataEngineering" | "fullStack"
 * Set featured: true to highlight at the top.
 * sourceLink: null for internal / professional work without a public repo.
 */
export const projects = [
  {
    id: "medicare-sales-dashboard",
    category: "dataEngineering",
    title: "Medicare Sales Analytics Dashboard",
    description:
      "Executive and field-facing dashboard suite for a Medicare sales team — quota tracking, lead funnel conversion, agent leaderboards, and regional performance. Built on curated data marts with drill-down from monthly targets to daily activity.",
    tags: ["Power BI", "SQL", "Python", "Healthcare", "KPI Design"],
    sourceLink: null,
    liveLink: null,
    featured: true,
  },
  {
    id: "medicare-etl-pipeline",
    category: "dataEngineering",
    title: "Medicare Enrollment & Commission Pipeline",
    description:
      "End-to-end batch pipeline ingesting enrollment files, CRM exports, and commission spreadsheets — validated, transformed, and loaded into a warehouse layer with lineage tracking and automated reconciliation against source totals.",
    tags: ["Python", "ETL", "AWS S3", "SQL", "Airflow", "Data Quality"],
    sourceLink: null,
    liveLink: null,
    featured: true,
  },
  {
    id: "member-attribution-mart",
    category: "dataEngineering",
    title: "Member Attribution Data Mart",
    description:
      "Dimensional model linking leads, enrollments, and agent assignments for Medicare member attribution — enabling accurate commission calculations and cohort analysis for sales leadership.",
    tags: ["Data Modeling", "Star Schema", "MySQL", "dbt-style SQL", "Analytics"],
    sourceLink: null,
    liveLink: null,
    featured: false,
  },
  {
    id: "sales-ops-reporting",
    category: "dataEngineering",
    title: "Automated Sales Ops Reporting",
    description:
      "Scheduled reporting jobs delivering weekly pipeline snapshots, stale-lead alerts, and enrollment trend summaries to sales managers — replacing manual Excel workflows.",
    tags: ["Python", "Pandas", "Automation", "Email Reports", "Scheduling"],
    sourceLink: null,
    liveLink: null,
    featured: false,
  },
  {
    id: "sentry-alerts",
    category: "fullStack",
    title: "Sentry: Alert Management System",
    description:
      "Angular + Python Flask application for real-time infrastructure alerting and proactive maintenance — reduced downtime through centralized alert routing and escalation.",
    tags: ["Angular", "Python", "Flask", "Monitoring", "Full Stack"],
    sourceLink: null,
    liveLink: null,
    featured: false,
  },
  {
    id: "healthcare-api-platform",
    category: "fullStack",
    title: "Healthcare Platform Modernization",
    description:
      "TypeScript migration and component architecture overhaul for a healthcare operations platform — improved reliability, cut processing time by 40%, and established patterns reused across modules.",
    tags: ["TypeScript", "React", ".NET", "Healthcare", "Migration"],
    sourceLink: null,
    liveLink: null,
    featured: false,
  },
  {
    id: "alumni-scheduler",
    category: "fullStack",
    title: "Student-Alumni Scheduler",
    description:
      "Angular application enabling students to connect with alumni and book conversation time slots — full CRUD scheduling with role-based views.",
    tags: ["Angular", "Scheduling", "REST API"],
    sourceLink: "https://github.com/AshishSharmaSDE/Sudent-Alumni-Scheduler",
    liveLink: null,
    featured: false,
  },
  {
    id: "dummy-netflix",
    category: "fullStack",
    title: "Dummy Netflix API",
    description:
      "Backend service for fetching and managing movies through custom REST APIs — JWT auth, pagination, and MongoDB persistence.",
    tags: ["Node.js", "REST API", "MongoDB", "JWT"],
    sourceLink: "https://github.com/AshishSharmaSDE/dummy-netflix",
    liveLink: null,
    featured: false,
  },
  {
    id: "curlgo",
    category: "fullStack",
    title: "CurlGoClone",
    description:
      "Go CLI replicating curl functionality — built to explore HTTP client design, flags parsing, and performance-conscious tooling.",
    tags: ["Go", "CLI", "HTTP"],
    sourceLink: "https://github.com/AshishSharmaSDE/curlGoClone",
    liveLink: null,
    featured: false,
  },
  {
    id: "ai-dashboard-gspann",
    category: "fullStack",
    title: "Custom Analytics Dashboard",
    description:
      "Python-powered dashboard with data visualization and AI modelling hooks — deployed on AWS with CI/CD for a consulting engagement.",
    tags: ["Python", "Pandas", "AWS", "Visualization", "CI/CD"],
    sourceLink: null,
    liveLink: null,
    featured: false,
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "dataEngineering", label: "Data Engineering" },
  { id: "fullStack", label: "Full Stack" },
];

/** Group skills by category — add or remove items freely */
export const skills = {
  dataEngineering: [
    "Python",
    "SQL",
    "ETL / ELT",
    "Data Modeling",
    "Apache Airflow",
    "Data Quality",
  ],
  cloud: ["AWS (S3, Lambda, Glue)", "Docker", "Jenkins", "Git", "CI/CD"],
  visualization: ["Power BI", "Pandas", "Custom Dashboards", "KPI Design"],
  databases: ["MySQL", "PostgreSQL", "MongoDB", "Data Warehousing"],
  fullStack: ["React", "TypeScript", "Angular", "Node.js", "REST / GraphQL"],
};

export const workflow = [
  "Design batch pipelines with validation, idempotency, and monitoring",
  "Build dimensional models and curated marts for self-serve analytics",
  "Deliver sales & ops dashboards tied to real business KPIs",
  "Document lineage, data contracts, and quality thresholds",
  "Full-stack background for APIs, UIs, and cloud deployment when needed",
];

export const contact = {
  heading: "Let's connect",
  subheading:
    "Open to data engineering roles, healthcare analytics work, and opportunities where pipeline craft meets product thinking. I typically respond within 48 hours.",
  formAction: "https://formsubmit.co/ashishsharma.sde@gmail.com",
};
