import Head from "next/head";

import { NextSeo } from "next-seo";

import LandingHero from "@/components/landing-hero";
import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import SkillsShowcase from "@/components/skills/skills-showcase";
import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { SKILLS_DATA } from "@/data/skills";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Jawad El Hani | Software Engineering Student"
        description="Portfolio of Jawad El Hani, software engineering student at INPT. Full-stack and frontend development with React, Next.js, TypeScript, FastAPI, and Node.js. Internships at ADII and B2BLink."
        canonical={siteMetadata.siteUrl}
        openGraph={{
          url: siteMetadata.siteUrl,
          title: "Jawad El Hani - Software Engineering Student",
          description:
            "Full-stack and frontend developer. Explore projects in SEO SaaS, game discovery, and e-commerce. INPT student with experience in React, Next.js, FastAPI, and Node.js.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Jawad El Hani - Portfolio",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Jawad El Hani, Software Engineering Student, Full-Stack Developer, Frontend Developer, React, Next.js, TypeScript, FastAPI, Node.js, INPT, Portfolio",
          },
        ]}
      />
      <Head>
        {siteMetadata.googleSiteVerification && (
          <meta
            name="google-site-verification"
            content={siteMetadata.googleSiteVerification}
          />
        )}
      </Head>
      <LandingHero />
      <section id="about" className="scroll-mt-24">
        <AboutHero />
        <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
        <ExperienceShowcaseList title="Education" details={EDUCATION} />
      </section>
      <section id="skills" className="scroll-mt-24">
        <SkillsShowcase skills={SKILLS_DATA} />
      </section>
      <section id="projects" className="scroll-mt-24">
        <div className="mx-auto mb-40 mt-6 w-full gap-20 px-6 py-32 sm:mt-12 sm:px-14 md:px-20">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-semibold text-foreground md:text-4xl">
              Projects
            </h2>
            <div className="my-2">
              <span className="text-sm text-muted-foreground">
                Here are some of the projects I&apos;d like to share
              </span>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
              {PROJECTS_CARD.map((card, index) => (
                <ProjectCard key={index} {...card} />
              ))}
            </div>
            <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
              <span className="text-xl font-bold md:text-2xl">
                I&apos;m building new projects and deepening my full-stack and
                backend skills.
              </span>
              <p className="mt-10 text-base md:text-xl">
                Visit my github to see some of the latest projects{" "}
                <a
                  href={`${siteMetadata.github}?tab=repositories`}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
                >
                  Github
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
