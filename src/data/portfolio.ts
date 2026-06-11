import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Josh Bowden",
    pronouns: "He/Him",
    headline:
      "Technical Lead & Engineering Mentor · Design Systems · Accessibility",
    location: "Greater Boston",
    email: "joshbowdenconcepts@gmail.com",
    linkedin: "https://www.linkedin.com/in/joshua-bowden/",
    photo: "/profile-photo.jpg",
    skills: [
      "Design Systems",
      "React",
      "TypeScript",
      "Accessibility",
      "Leadership",
    ],
  },
  about:
    "Design System Engineer specializing in creating scalable, high-impact solutions that drive efficiency and consistency across engineering organizations. With a passion for designing systems that not only meet technical needs but also foster creativity and collaboration.",
  work: [
    {
      id: "american-express",
      company: "American Express",
      location: "Remote",
      summary:
        "Technical lead for design systems supporting Global Dining products—unified tokens, CI/CD, visual regression testing, and governance that drove adoption across four major products.",
      roles: [
        {
          title: "Senior Software Engineer II, Design Systems @ Global Dining",
          startDate: "Apr 2025",
          highlights: [
            "Technical Lead for the Design System Team with 89% adoption of the net-new design system across a large product refresh.",
            "Led architecture, strategy, and rollout of a unified design token system as the single source of truth across four major products.",
            "Owned infrastructure: CI/CD pipelines, Storybook environments, automated icon workflows, and custom visual regression testing.",
            "Established governance, quality, and accessibility standards while mentoring engineers.",
          ],
          articleSlug: "visual-regression-custom-testing",
        },
        {
          title: "Senior Software Engineer II, Design Systems @ Tock",
          startDate: "Oct 2023",
          endDate: "Apr 2025",
          highlights: [
            "Spearheaded pitch, planning, and development of a custom token system adopted across the engineering organization in Q4 2024.",
            "Enabled seamless custom themes for four major projects through a unified, scalable styling framework.",
            "Designed and facilitated strategic brainstorming sessions for end-of-year alignment around a North Star vision.",
            "Engineered forward-looking roadmaps for long-term design system evolution.",
          ],
          articleSlug: "theme-color-mode-components",
        },
      ],
      articleLinks: [
        {
          slug: "visual-regression-custom-testing",
          title:
            "3 Themes, Dozens of Combinations, Zero Regressions: Custom Visual Testing",
        },
        {
          slug: "systematic-token-system",
          title: "Building a Token System: Semantic vs. Explicit Naming",
        },
      ],
    },
    {
      id: "adplist",
      company: "ADPList",
      location: "Remote",
      summary:
        "Mentored engineers globally on design systems, frontend architecture, and career development—including four mentees who secured their first engineering roles.",
      roles: [
        {
          title: "Engineering Mentor",
          startDate: "Jul 2023",
          endDate: "Dec 2024",
          highlights: [
            "Mentored engineers on design systems, frontend architecture, and career progression.",
            "Coached engineers transitioning into senior roles on communication, decision-making, and system design.",
            "Recognized as ADPList Top 1% Mentor across multiple months.",
          ],
        },
      ],
    },
    {
      id: "github",
      company: "GitHub",
      location: "Boston, MA",
      summary:
        "Senior engineer on GitHub’s design system with ownership over roadmap initiatives, layout architecture, asset governance, and WCAG AA accessibility improvements.",
      roles: [
        {
          title: "Senior Software Engineer — Design Systems",
          startDate: "Aug 2022",
          endDate: "Sep 2023",
          highlights: [
            "Led delivery of roadmap-level design system initiatives spanning 3–6 month efforts.",
            "Architected a 12-column Grid system that standardized page layout across the application.",
            "Developed a centralized asset management system for third-party image assets with licensing compliance.",
            "Partnered on WCAG AA accessibility audits and contributed fixes across design system components.",
          ],
          articleSlug: "internal-asset-library-github",
        },
      ],
      articleLinks: [
        {
          slug: "internal-asset-library-github",
          title: "Case Study: Building an Internal Asset Library at GitHub",
        },
      ],
    },
    {
      id: "cargurus",
      company: "CarGurus",
      location: "Cambridge, MA",
      summary:
        "Built and led design system architecture from foundation through senior engineering—component libraries, DX tooling, and consumer-facing UI at scale.",
      roles: [
        {
          title: "Senior Software Engineer — Design System",
          startDate: "Jan 2022",
          endDate: "Aug 2022",
          highlights: [
            "Led architecture and development of the shared component library used across product teams.",
            "Acted as primary bridge between design and engineering for system decisions.",
            "Built DX tooling including GitHub Actions and Webpack plugins.",
          ],
          articleSlug: "mui-to-custom-design-system",
        },
        {
          title: "Software Engineer — Design System",
          startDate: "Sep 2021",
          endDate: "Jan 2022",
          highlights: [
            "Built the foundation of a shared design system and component library.",
            "Led architectural alignment across engineering and design stakeholders.",
            "Automated build and release workflows using GitHub Actions.",
          ],
        },
        {
          title: "Software Engineer — Consumer (Frontend / UI)",
          startDate: "Dec 2019",
          endDate: "Sep 2021",
          highlights: [
            "Shipped growth-focused features for a high-traffic consumer website.",
            "Led frontend implementation of major page redesigns from design through production.",
            "Supported company-wide releases as part of the Push Gurus group.",
          ],
        },
      ],
      articleLinks: [
        {
          slug: "mui-to-custom-design-system",
          title: "Case Study: Migrating from MUI to a Custom Design System",
        },
      ],
    },
    {
      id: "cylindo",
      company: "Cylindo",
      location: "Greater Boston",
      summary:
        "Software engineer working across client integrations, internal tooling, and technical sales enablement for a 3D product configuration platform.",
      roles: [
        {
          title: "Software Engineer",
          startDate: "Dec 2018",
          endDate: "Dec 2019",
          highlights: [
            "Partnered with client engineering teams to integrate Cylindo’s 3D configuration platform into production websites.",
            "Built internal tools and demos to support customer integrations and onboarding.",
            "Acted as a technical partner in sales engagements on architecture and implementation.",
          ],
        },
      ],
    },
  ],
  education: [
    {
      institution: "University of Massachusetts Lowell",
      degree: "BS Business Administration, Marketing & Management",
      dates: "2012 – 2016",
    },
    {
      institution: "Treehouse",
      degree: "Full Stack JavaScript Techdegree",
      dates: "2017 – 2018",
    },
  ],
};
