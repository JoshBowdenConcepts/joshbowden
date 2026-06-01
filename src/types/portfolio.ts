export interface ArticleLink {
  slug: string;
  title: string;
}

export interface Role {
  title: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
  articleSlug?: string;
}

export interface WorkEntry {
  id: string;
  company: string;
  location?: string;
  summary: string;
  roles: Role[];
  articleLinks?: ArticleLink[];
}

export interface Education {
  institution: string;
  degree: string;
  dates: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    pronouns: string;
    headline: string;
    location: string;
    email: string;
    linkedin: string;
    photo?: string;
    skills: string[];
  };
  about: string;
  work: WorkEntry[];
  education: Education[];
}
