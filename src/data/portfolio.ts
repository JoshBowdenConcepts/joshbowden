import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Josh Bowden",
    pronouns: "He/Him",
    headline:
      "Technical Lead & Engineering Mentor · Design Systems · Accessibility",
    location: "Boston, MA",
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
    "Engineering leader specializing in frontend platforms, design systems, and technical strategy. I partner with engineering, design, and product organizations to build scalable UI foundations that improve developer experience, accessibility, and product consistency. Passionate about aligning teams around a shared technical vision, mentoring engineers, and delivering platforms that enable organizations to move faster.",
  work: [
    {
      id: "american-express",
      company: "American Express",
      location: "Remote",
      summary:
        "Technical lead for design systems supporting Global Dining products, covering unified tokens, CI/CD, visual regression testing, and governance that drove adoption across four major products.",
      roles: [
        {
          title: "Senior Software Engineer II, Design Systems @ Global Dining",
          startDate: "Apr 2025",
          highlights: [
            "Drove an 89% adoption rate for the net-new design system, accelerating development and improving UI consistency across a large-scale product refresh.",
            "Led design system strategy and roadmap execution, aligning engineering, design, and product teams around a shared vision for scalable UI infrastructure.",
            "Built the design system platform, including CI/CD pipelines, Storybook environments, automated icon tooling, and visual regression testing, which improved adoption and system reliability.",
            "Embedded governance into engineering workflows through custom linting rules, automated quality checks, and AI-ready development guidance, enabling consistent implementation across engineers and coding agents.",
          ],
          articleSlug: "visual-regression-custom-testing",
        },
        {
          title: "Senior Software Engineer II, Design Systems @ Tock",
          startDate: "Oct 2023",
          endDate: "Apr 2025",
          highlights: [
            "Defined the architecture and rollout of a unified design token system that became the single source of truth across four major products, enabling scalable theming and a consistent UI foundation.",
            "Spearheaded the pitch, planning, and development of the token system, adopted across the engineering organization in Q4 2024.",
            "Designed and facilitated strategic brainstorming sessions to align the organization around a North Star vision.",
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
        "Mentored engineers globally on design systems, frontend architecture, and career development, including four mentees who secured their first engineering roles.",
      roles: [
        {
          title: "Engineering Mentor",
          startDate: "Jul 2023",
          endDate: "Dec 2024",
          highlights: [
            "Mentored engineers globally on design systems, frontend architecture, and career development.",
            "Helped engineers transition into senior engineering roles through coaching on communication, decision-making, and system design.",
            "Coached mentees through personal and professional challenges to communicate more effectively in their jobs and in interviews.",
            "Recognized as an ADPList Top 1% Mentor across multiple months.",
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
          title: "Senior Software Engineer, Design Systems",
          startDate: "Aug 2022",
          endDate: "Sep 2023",
          highlights: [
            "Led roadmap-scale design system initiatives spanning 3–6 months, partnering across engineering, design, and product to improve UI consistency and accelerate product development.",
            "Designed and implemented a responsive layout system that standardized page composition across the application, replacing inconsistent patterns with reusable foundations for building complex product experiences.",
            "Built a centralized asset management system to securely distribute and govern third-party image assets, eliminating manual workflows while improving compliance, discoverability, and version control.",
            "Partnered on WCAG AA accessibility initiatives while volunteering on the accessibility champions team, auditing design system components and implementing improvements that raised accessibility standards across the product.",
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
        "Built and led design system architecture from foundation through senior engineering, spanning component libraries, DX tooling, and consumer-facing UI at scale.",
      roles: [
        {
          title: "Senior Software Engineer, Design System",
          startDate: "Jan 2022",
          endDate: "Aug 2022",
          highlights: [
            "Architected and delivered a shared design system and component library that became the scalable UI foundation for multiple product teams.",
            "Served as a key bridge between design and engineering, driving architectural alignment and proactively delivering components that unblocked product teams.",
            "Engineered CI/CD and developer tooling (GitHub Actions, Webpack plugins) that automated build and release workflows and reduced manual overhead.",
          ],
          articleSlug: "mui-to-custom-design-system",
        },
        {
          title: "Software Engineer, Design System",
          startDate: "Sep 2021",
          endDate: "Jan 2022",
          highlights: [
            "Built the foundation of a shared design system and component library.",
            "Led architectural alignment across engineering and design stakeholders.",
            "Automated build and release workflows using GitHub Actions.",
          ],
        },
        {
          title: "Software Engineer, Consumer (Frontend / UI)",
          startDate: "Dec 2019",
          endDate: "Sep 2021",
          highlights: [
            "Delivered large-scale UI redesigns for the homepage and primary search experiences (new and used cars), partnering with product and design to modernize high-traffic surfaces.",
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
            "Integrated Cylindo’s 3D product visualization platform into customer websites, partnering with engineering teams to deliver production-ready implementations.",
            "Developed internal tooling and demos that reduced onboarding effort and improved the customer integration experience.",
            "Collaborated with sales and customer teams to validate implementation approaches and support successful enterprise deployments.",
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
