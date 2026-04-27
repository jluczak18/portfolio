export interface Project {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  tags: string[];
  image: string;
  heroImage?: string;
  techStack: string[];
  github?: string;
  liveUrl?: string;
  useCaseDoc?: string;
  sections: {
    overview: string;
    problem: string;
    approach: string;
    results: string;
  };
  screenshots?: string[];
}

export const projects: Project[] = [
  {
    slug: "jira-reporting-automation",
    title: "Jira Report Automation",
    description:
      "JIRA is a software development tool to help plan, track, and deploy work throughout the software development lifecycle (SDLC). During my time at CCC, my team had a need to understand our sprint velocity but were constrained by the functionality of reporting within the JIRA software. I decided to take matters into my own hands and use my Python and Tableau skills to build our own custom reporting solution to support our line of business.",
    excerpt: "Custom Sprint reporting through API access",
    tags: ["Process Automation", "Data Engineering"],
    image: "/images/jira_logo.png",
    heroImage: "/images/jira_velocity_demo.png",
    techStack: ["Python", "Tableau"],
    github: "https://github.com/jluczak18/WorkExamples/blob/main/sprint_summary.py",
    // useCaseDoc: "/documents/churn-use-case.pdf",
    sections: {
      overview:
        "By building our own reporting solution on JIRA we got visibility into performance improvements and bottlenecks.",
      problem:
        "JIRA's reporting solutions were very limited not allowing for customization to fit our use case leading to lack of visibility on team velocity.",
      approach:
        "Defined the report I was looking to create and created a quick prototype of the data output before diving into code. Once I received alignment on data fields and structure, I leveraged Python to pull data form Jira REST API and publish directly to our Tableau server. Leveraging Github actions, our script runs daily to keep our reporting always relevant.",
      results:
        "Assisted our team with improving worklife balance by finally understanding our true capacity. This has also resulted in a 15% increase in overall velocity.",
    }
  },
  {
    slug: "automated-release-notes",
    title: "Automated Release Notes",
    description:
      "Provided a weekly email to various business stakeholders outlining what was deployed from our product development team. This ensured strong stakeholder communication, the ability to ask for further details, and the removal of manual intervention in product updates.",
    excerpt: "Weekly email to business stakeholders without human intervention.",
    tags: ["Stakeholder Communication", "Process Automation"],
    image: "/images/jira_logo.png",
    heroImage: "/images/release-notes-hero.png",
    techStack: ["Python", "HTML", "CSS", "JavaScript", "Github"],
    // github: "https://example.com",
    // useCaseDoc: "/documents/nlbi-use-case.pdf",
    sections: {
      overview:
        "Weekly email that provides details of what was deployed and what was upcoming the following week for visibility to business",
      problem:
        "Business stakeholders were seeking for better communication from our team on what was being deployed and when. Existing process to provide these updates were very manual requiring 4-6 hours of work.",
      approach:
        "Customized our JIRA workspaces to create a new field that could be used to identify which items to socialize. After this, worked with development team to create a Python script that scrapes JIRA stories and formats into a weekly email to a set group of individuals.",
      results:
        "Saved 4-6 hours a week of manual processing."
    }
    },
  {
    slug: "sprint-showcase-deck",
    title: "Sprint Showcase Deck Creation",
    description: 
      "Every development sprint, my team would be required to update a PowerPoint deck with what was completed in that sprint for further discussions.",
    excerpt: "Documentation Creation through Rules",
    tags: ["Process Automation", "Data Engineering"],
    image: "/images/jira_logo.png",
    heroImage: "/images/sprint-showcase-demo.png",
    techStack: ["Python", "MicrosoftGraph"],
    github: "https://github.com/jluczak18/WorkExamples/blob/main/sprint_review.py",
    // useCaseDoc: "",
    sections: {
      overview: 
        "Built an automated process that runs every other Tuesday to produces a formatted PowerPoint deck with details of all work completed in the sprint.",
      problem:
      "In preparation of our Sprint Review Meeting, each Product Owner would have to spend 1+ hours formatting a slide deck with updates for their project. Often times they would forget to add and the meeting would be cancelled.",
      approach: 
      "Built a python script that pulls data from Jira and auto creates a Python script. Worked directly with our Microsoft Admin to automatically publish this PowerPoint deck to our companies Sharepoint site.",
      results: 
      "Our automated process eliminated 5+ hours of manual intervention every 2 weeks and ensured our sprint review meeting happened 100% of the time."
    }
    },
  {
    slug: "incident-triaging-agent",
    title: "Incident Triaging Agent",
    description:
      "Agentic AI orchestration that listens to incident tickets reported in BMC RemedyForce and triages the ticket through reading documentation and querying our database. Provides users with what action was taken for the user to take the next steps.",
    excerpt: "Triaging incident tickets and providing human in the loop next steps.",
    tags: ["AI", "Incident Management", "RAG"],
    image: "/images/strands-logo.png",
    heroImage: "/images/incident-triage.png",
    techStack: ["Strands", "Python"],
    sections: {
      overview:
        "Multi-agent framework that aims to review newly reported incidents and reduce time for human review.",
      problem:
        "When tickets come into our system, it requires development and Product Owner time to diagnose and identify the issue at hand. This leads to context switching and commonly leads to existing work being delayed.",
      approach:
        "Created requirement specifications to outline the two use cases to address out the gate. Built a detailed product overview that we inserted into a knowledgebase. After this we designed multiple agents to assist with translating incidents to Jira defects, add context to the question by defining source and database table impacts, query our database, and validate the output prior to handing back to a human for further review.",
      results:
        "For the few examples we ran through this agentic framework, resolution cycle time went from 1-2 days to under 5 minutes.",
    }
  }
];

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
  return Array.from(tags).sort();
}
