export interface Project {
  slug: string;
  thumbnail: string;
  screenshots?: { src: string; caption: string }[];
  techStack: string[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  videos?: Partial<Record<string, string>>;
}

export const projects: Project[] = [
  {
    slug: "bemer-crm",
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
    videos: {
      en: "/videos/bemer-crm-demo-en.mp4",
      hu: "/videos/bemer-crm-demo-hu.mp4",
    },
  },
  {
    slug: "vuln-scorer",
    thumbnail: "/images/vuln-scorer-1-main.png",
    screenshots: [
      { src: "/images/vuln-scorer-1-main.png", caption: "Dashboard — configurable scoring weights and CVE upload interface" },
      { src: "/images/vuln-scorer-2-results.png", caption: "Results — prioritized CVE list with composite scores, severity, EPSS, and CVSS columns" },
    ],
    techStack: ["Python", "Streamlit", "Pandas", "NVD API"],
    featured: true,
    githubUrl: "https://github.com/tczaban/vuln-prioritization-scorer",
  },
  {
    slug: "sales-dashboard",
    thumbnail: "/images/sales-dashboard-1-kpis.png",
    screenshots: [
      { src: "/images/sales-dashboard-1-kpis.png", caption: "KPI Overview — total revenue, orders, avg order value, and MoM comparison chart" },
      { src: "/images/sales-dashboard-2-revenue.png", caption: "Revenue & Products — revenue trend, product breakdown, and churn signals" },
      { src: "/images/sales-dashboard-3-customers.png", caption: "Customer Insights — new vs returning, top customers by revenue, and full customer table" },
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    featured: true,
    demoUrl: "https://sales.czaban.dev/dashboard",
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
