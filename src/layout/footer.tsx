import Link from "next/link";

import { Playfair_Display } from "next/font/google";

import { siteMetadata } from "@/data/siteMetaData.mjs";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

function FooterDotIcon() {
  return (
    <span
      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/30"
      aria-hidden
    >
      <span className="h-2 w-2 rounded-full bg-accent" />
    </span>
  );
}

function FooterInfoBlock(props: {
  title: string;
  lines: string[];
  href?: string;
}) {
  const content = (
    <div className="flex gap-4">
      <FooterDotIcon />
      <div>
        <p className="text-base font-semibold text-zinc-100 sm:text-lg">
          {props.title}
        </p>
        {props.lines.map((line) => (
          <p
            key={line}
            className="mt-1 text-sm leading-relaxed text-zinc-400 sm:text-base"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );

  if (props.href) {
    return (
      <Link
        href={props.href}
        className="group transition-opacity hover:opacity-80"
      >
        {content}
      </Link>
    );
  }

  return content;
}

function FooterSocialLink(props: { href: string; label: string }) {
  return (
    <a
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className="text-base text-zinc-300 transition-colors hover:text-accent sm:text-lg"
    >
      {props.label}
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/3 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:px-14 lg:px-20">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-between gap-16 lg:min-h-[320px]">
            <h2
              className={`${playfair.className} max-w-md text-4xl leading-tight text-zinc-50 sm:text-5xl md:text-6xl`}
            >
              Let&apos;s create together
            </h2>

            <div>
              <p
                className={`${playfair.className} text-sm italic text-zinc-500 sm:text-base`}
              >
                Get in touch
              </p>
              <a
                href={`mailto:${siteMetadata.email}`}
                className="mt-3 inline-block border-b border-zinc-600 pb-1 text-xl font-medium text-zinc-100 transition-colors hover:border-accent hover:text-accent sm:text-2xl md:text-3xl"
              >
                {siteMetadata.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-12 lg:min-h-[320px]">
            <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-10">
              <FooterInfoBlock
                title="Rabat, Morocco"
                lines={[
                  "INPT — Software Engineering",
                  "Full-stack & backend development",
                ]}
              />
              <FooterInfoBlock
                title="Open to opportunities"
                lines={["Internships & collaborations", "Remote or on-site"]}
              />
              <FooterInfoBlock
                title="About"
                lines={["Background, experience & education"]}
                href="/#about"
              />
              <FooterInfoBlock
                title="Projects"
                lines={["Selected work & open-source repos"]}
                href="/#projects"
              />
            </div>

            <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
              <nav
                aria-label="Footer social links"
                className="flex flex-col gap-3"
              >
                <FooterSocialLink href={siteMetadata.github} label="GitHub" />
                {siteMetadata.linkedin ? (
                  <FooterSocialLink
                    href={siteMetadata.linkedin}
                    label="LinkedIn"
                  />
                ) : null}
              </nav>

              <p className="text-sm text-zinc-500 sm:text-right">
                © {year} All rights reserved. {siteMetadata.author}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
