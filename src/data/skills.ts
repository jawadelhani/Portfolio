import {
  SiExpress,
  SiNextdotjs,
  SiFastapi,
  SiMysql,
  SiBootstrap,
  SiKubernetes,
  SiGitlab,
  SiAnsible,
  SiArgo,
  SiPrometheus,
  SiSpringboot,
  SiVercel,
  SiGo,
} from "react-icons/si";
import { ReactRouterDomIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import ViteSvg from "@/public/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database
import PostgressSvg from "@/public/icons/postgresql.svg";
import MongoDBSvg from "@/public/icons/mongodb.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      { name: "HTML", icon: HtmlSvg },
      { name: "CSS", icon: CsssSvg },
      { name: "Javascript", icon: JavascriptSvg },
      { name: "TypeScript", icon: TypescriptSvg },
      { name: "Python", icon: PythonSvg },
      { name: "Go", icon: SiGo, color: "#00ADD8" },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      { name: "React", icon: ReactjsSvg },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React Router", icon: ReactRouterDomIcon },
      { name: "Tailwind CSS", icon: TailwindcssSvg },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Vite", icon: ViteSvg },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      { name: "Node.js", icon: NodejsSvg },
      { name: "Express", icon: SiExpress },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    ],
  },
  {
    sectionName: "Databases",
    skills: [
      { name: "PostgreSQL", icon: PostgressSvg },
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: MongoDBSvg },
    ],
  },
  {
    sectionName: "DevOps",
    skills: [
      { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
      { name: "GitLab", icon: SiGitlab, color: "#FC6D26" },
      { name: "Ansible", icon: SiAnsible, color: "#EE0000" },
      { name: "ArgoCD", icon: SiArgo, color: "#EF7B4D" },
      { name: "Prometheus", icon: SiPrometheus, color: "#E6522C" },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      { name: "Git", icon: GitSvg },
      { name: "Docker", icon: DockerSvg },
      { name: "Postman", icon: PostmanSvg },
      { name: "Vercel", icon: SiVercel, color: "#000000" },
    ],
  },
];
