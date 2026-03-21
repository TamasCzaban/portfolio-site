export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  thumbnail: string;
  screenshots?: { src: string; caption: string }[];
  techStack: string[];
  featured: boolean;
  problem: string;
  solution: string[];
  results: string[];
  architectureDescription?: string;
  demoUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "bemer-crm",
    title: "BEMER CRM",
    subtitle: "Full-stack CRM for medical device distributors",
    description:
      "A production CRM built for BEMER medical device distributors in Hungary. Manages rentals, sales, clients, contracts, and Stripe billing — replacing spreadsheets and paper processes with a streamlined web application.",
    thumbnail: "/images/bemer-crm-1-devices.png",
    screenshots: [
      { src: "/images/bemer-crm-1-devices.png", caption: "Device inventory — own and partner-borrowed devices with full rental history" },
      { src: "/images/bemer-crm-2-clients.png", caption: "Client management — renters with contact details and transaction history" },
      { src: "/images/bemer-crm-3-rentals.png", caption: "Rental overview — active rentals with availability and revenue tracking" },
      { src: "/images/bemer-crm-4-contracts.png", caption: "Contract management — auto-generated contracts with client and billing details" },
      { src: "/images/bemer-crm-5-reminders.png", caption: "Reminders — automated alerts for overdue rentals and upcoming actions" },
    ],
    techStack: ["Python", "Streamlit", "Firebase", "Stripe", "Pandas"],
    featured: true,
    problem:
      "BEMER medical device distributors in Hungary manage rentals, sales, clients, and contracts manually using spreadsheets and paper. There is no visibility into device availability, rental overlaps, or revenue. Contract generation is tedious and error-prone.",
    solution: [
      "Built a full CRM in Streamlit + Firebase + Stripe",
      "Device inventory management (owned + partner-borrowed devices)",
      "Client management (renters + buyers) with contact details",
      "Rental transaction system with calendar-based availability checking",
      '"Possession Envelope Rule" — validates sub-rental dates fall within B2B possession windows',
      "Automated contract generation (HTML → PDF, client-side)",
      "Stripe subscription billing (free vs pro tier)",
      "Multi-entity billing support (individual + company)",
      "Google + Facebook OAuth with email verification",
    ],
    results: [
      "Production app with real paying users",
      "391 automated tests across 7 modules",
      "Atomic batch writes for data consistency",
      "Optimistic UI with intelligent cache invalidation",
      '"Mum Test" UX philosophy — built for non-technical users',
    ],
    architectureDescription:
      "Streamlit UI → Firebase Auth + Firestore → Stripe Billing",
  },
  {
    slug: "vuln-scorer",
    title: "Vulnerability Prioritization Scorer",
    subtitle: "Data-driven CVE risk scoring tool",
    description:
      "A Streamlit application that helps security teams prioritize CVE vulnerabilities by combining CVSS scores with real-world exploit data, threat intelligence, and asset context to produce actionable risk scores.",
    thumbnail: "/images/vuln-scorer-1-main.png",
    screenshots: [
      { src: "/images/vuln-scorer-1-main.png", caption: "Dashboard — configurable scoring weights and CVE upload interface" },
      { src: "/images/vuln-scorer-2-results.png", caption: "Results — prioritized CVE list with composite scores, severity, EPSS, and CVSS columns" },
    ],
    techStack: ["Python", "Streamlit", "Pandas", "NVD API"],
    featured: true,
    problem:
      "Security teams face thousands of CVEs and need to decide which vulnerabilities to patch first. Raw CVSS scores alone don't account for real-world exploitability, threat actor activity, or the specific asset context of an organization.",
    solution: [
      "Built a scoring engine that combines multiple data sources",
      "Integrates CVSS base scores with EPSS exploit prediction data",
      "Factors in CISA KEV (Known Exploited Vulnerabilities) catalog",
      "Allows custom asset criticality weighting",
      "Produces a prioritized, actionable list of vulnerabilities to remediate",
    ],
    results: [
      "Reduces noise from thousands of CVEs to a focused remediation list",
      "Combines multiple threat intelligence sources into a single score",
      "Open-source tool available on GitHub",
    ],
    githubUrl: "https://github.com/tczaban/vuln-prioritization-scorer",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
