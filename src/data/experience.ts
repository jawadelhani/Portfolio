import { type ExperienceShowcaseListItemProps } from "@/components/experience/experience-showcase-list-item";

export const EXPERIENCE: ExperienceShowcaseListItemProps[] = [
  {
    title: "Intern - Full-Stack Web Development",
    organisation: {
      name: "Administration des Douanes et Impôts Indirects (ADII)",
      href: "https://www.douane.gov.ma/",
    },
    date: "June 2025 - July 2025",
    location: "Morocco",
    description:
      "Developed a full-stack web application for searching and downloading customs regulation texts (RDII). Designed the front-end with React + TypeScript (React Query, Zustand, Zod, Bootstrap) and implemented the back-end with Node.js + MySQL, including secure authentication with JWT. Used Docker for deployment, Postman for API testing, and GitHub for version control.",
  },
  {
    title: "Intern - Software Development (SEO SaaS Project)",
    organisation: {
      name: "B2BLink",
      href: "https://b2blink.com/",
    },
    date: "August 2025",
    location: "Remote",
    description:
      "Worked on Optyro, an innovative SaaS platform for automated SEO audits optimized for AI (LLM). Contributed to stabilizing the FastAPI backend, integrating secure payments with Lemon Squeezy, generating dynamic PDF reports, and deploying a Next.js + Tailwind interface. Strengthened skills in web development, automation, and SEO in an agile environment.",
  },
  {
    title: "Speaker — Beyond Traditional SEO: How LLMs Are Redefining Search",
    organisation: {
      name: "BizTech Conference",
      href: "#",
    },
    date: "December 2025",
    location: "Quickie (15min) · Business Track",
    description:
      "SEO is facing its biggest shift since Google. Over 40% of users now turn to ChatGPT, Claude, or Perplexity instead of traditional search engines. This talk explored how entrepreneurs and digital leaders can stay visible in the AI-driven search era, with practical insights on the llm.txt standard and metadata optimization for LLMs.",
  },
];
