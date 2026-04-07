import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Optyro — SEO Audit SaaS",
    href: "/#projects",
    tags: ["FastAPI", "Next.js", "Tailwind CSS", "Lemon Squeezy", "Docker"],
    image: {
      LIGHT: "/images/projects/optyro.png",
      DARK: "/images/projects/optyro.png",
    },
  },
  {
    index: 1,
    title: "Game Hub",
    href: "/#projects",
    tags: ["React", "TypeScript", "Bootstrap", "RAWG API", "Vercel"],
    image: {
      LIGHT: "/images/projects/gamehub.png",
      DARK: "/images/projects/gamehub.png",
    },
  },
  {
    index: 2,
    title: "LR E-commerce",
    href: "/#projects",
    tags: ["React", "Node.js", "PostgreSQL", "Express"],
    image: {
      LIGHT: "/images/projects/ecommerce-products.png",
      DARK: "/images/projects/ecommerce-products.png",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Optyro — Automated SEO Audit SaaS",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/optyro.png"],
    description:
      "SaaS platform delivering automated SEO audits optimized for AI models (LLMs). Stabilized FastAPI backend, implemented secure payments via Lemon Squeezy, built dynamic PDF report generation, and deployed a Next.js + Tailwind CSS interface. Focus on scalability, automation, and real-world SaaS deployment.",
    sourceCodeHref: "https://github.com/jawadelhani",
    liveWebsiteHref: undefined,
  },
  {
    name: "Game Hub",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/gamehub.png"],
    description:
      "Game discovery app with real-time search, dark/light mode, and responsive design. Powered by RAWG API with React Query and Axios. Built with React, TypeScript, and Bootstrap. Deployed on Vercel.",
    sourceCodeHref: "https://github.com/jawadelhani/game-hub",
    liveWebsiteHref: "https://game-hub-alpha-sooty.vercel.app",
  },
  {
    name: "LR E-commerce",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/ecommerce-products.png",
      "/images/projects/ecommerce-login.png",
    ],
    description:
      "Full-stack e-commerce website built with React, Node.js, PostgreSQL, and Express. Covers product listing, cart, and backend API.",
    sourceCodeHref: "https://github.com/jawadelhani",
    liveWebsiteHref: undefined,
  },
  {
    name: "Multi-Agent Project Management System (in progress)",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/multi-agent.png"],
    description:
      "Autonomous AI agent platform (Product Owner, Planning, Risk Manager, Coach) focused on project management intelligence: user story generation, backlog prioritization, and risk anticipation.",
    sourceCodeHref: "https://github.com/jawadelhani",
    liveWebsiteHref: undefined,
  },
  {
    name: "Load Balancer (Spring Boot, Go)",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/load-balancer.png"],
    description:
      "Built an HTTP reverse proxy that distributes requests across three backend servers using multiple strategies (including Round Robin and Least Connections), with runtime metrics for traffic/performance optimization.",
    sourceCodeHref: "https://github.com/jawadelhani/Load_Balancer",
    liveWebsiteHref: undefined,
  },
  {
    name: "DevOps Travelo",
    favicon: "/favicon.ico",
    imageUrl: ["/images/projects/devops-travelo.png"],
    description:
      "Implemented a full DevOps pipeline: 3-tier containerization (React, Spring Boot, MySQL), CI/CD with security scans via GitLab CI, GitOps deployment with ArgoCD, and secure secrets management using Vault.",
    sourceCodeHref: "https://github.com/jawadelhani",
    liveWebsiteHref: undefined,
  },
  {
    name: "Store API (Spring Boot)",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/store-api-1.png",
      "/images/projects/store-api-2.png",
      "/images/projects/store-api-3.png",
      "/images/projects/store-api-4.png",
    ],
    description:
      "Spring Boot e-commerce backend with JWT auth, refresh tokens (HttpOnly cookie), RBAC (USER/ADMIN), products/carts/users modules, Bean Validation, Flyway migrations, and Swagger docs. Built with Java 23, Spring Boot 3.4, MySQL, and MapStruct.",
    sourceCodeHref: "https://github.com/jawadelhani/spring-api",
    liveWebsiteHref: undefined,
  },
];
