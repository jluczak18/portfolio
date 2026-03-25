interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string[];
}

const experiences: TimelineItem[] = [
  {
    year: "2024 — Present",
    title: "Associate Manager, Product Owner",
    company: "CCC Intelligent Solutions",
    description: [
      "Lead the end-to-end delivery of customer-facing enterprise automation and AI solutions, partnering with engineering and UX from discovery through launch to deliver measurable business value.",
      "Partner with leadership to evaluate AI opportunities, define use cases, and prioritize roadmap initiatives aligned with customer impact and business value.",
      "Spearheaded development and enterprise implementation of a generative AI application enabling non-technical users to query structured data via natural language. Supported adoption through demos and user guidance that reduced reliance on traditional dashboard reporting and accelerated time-to-insight.",
      "Designed and implemented an AI-driven workflow to triage incoming product incidents and generate structured findings for human validation, improving incident response efficiency and enabling scalable operational automation.",
      "Translate business and AI use cases into functional and non-functional requirements, PRDs, user stories, and acceptance criteria while coordinating closely with engineering teams and supporting testing, validation, and user acceptance activities prior to release.",
      "Partner with engineering, data, and security teams to ensure AI solutions align with enterprise standards for data governance, security, and responsible AI while monitoring emerging AI risks and implementation considerations.",
    ],
  },
  {
    year: "2022 — 2024",
    title: "Senior Business Analyst",
    company: "CCC Intelligent Solutions",
    description: [
      "Conducted discovery sessions with Sales, Customer Support, and engineering stakeholders to identify workflow inefficiencies and reporting bottlenecks, translating business needs into prioritized technology enhancements.",
      "Designed and validated solution prototypes to assess technical feasibility and inform functional requirements, reducing development cycle time by 25% and supporting roadmap prioritization.",
      "Led iterative improvements to customer-facing product features using usage data and stakeholder feedback, contributing to over $2M in incremental revenue impact.",
      "Established standardized requirements documentation and delivery artifacts to improve alignment between stakeholders and engineering teams, increasing delivery reliability and reducing rework by 20%.",
      "Recognized company-wide for innovation and customer impact (2023 Hackathon Winner – Best Strategic Value; 2022 CCC Way Award)."

    ],
  },
  {
    year: "2021 — 2022",
    title: "Business Analyst",
    company: "CCC Intelligent Solutions",
    description: [
      "Delivered actionable insights using SQL, Python, and Tableau to support product strategy, roadmap planning, and operational decision-making.",
      "Performed root cause analysis and data diagnostics to identify systemic issues, improving product reliability and informing feature improvements.",
      "Analyzed usage trends and performance data to uncover growth opportunities, contributing to a 12% increase in product adoption and improved customer experience."

    ],
  }
];

export default function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 h-full w-px bg-border" />
      <div className="space-y-10">
        {experiences.map((item, i) => (
          <div key={i} className="relative pl-12">
            <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-background" />
            <p className="text-sm text-accent font-medium mb-1">{item.year}</p>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-muted text-sm mb-2">{item.company}</p>
            <ul className="list-disc list-outside pl-4 space-y-1">
              {item.description.map((bullet, j) => (
                <li key={j} className="text-muted leading-relaxed">{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
