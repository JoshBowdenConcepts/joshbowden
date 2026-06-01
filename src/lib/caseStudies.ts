import { portfolioData } from "@/data/portfolio";
import { getArticleBySlug } from "@/lib/articles";
import type { Article } from "@/lib/articles";
import type { WorkEntry } from "@/types/portfolio";

export interface CaseStudy extends Article {
  companyId: string;
  company: string;
}

function getSlugsForEntry(entry: WorkEntry): string[] {
  const slugs = new Set<string>();

  entry.articleLinks?.forEach((link) => slugs.add(link.slug));
  entry.roles.forEach((role) => {
    if (role.articleSlug) slugs.add(role.articleSlug);
  });

  return [...slugs];
}

export function getWorkEntryById(companyId: string): WorkEntry | undefined {
  return portfolioData.work.find((entry) => entry.id === companyId);
}

export function getCaseStudyUrl(companyId: string, slug: string): string {
  return `/work/${companyId}/${slug}`;
}

export function getCaseStudy(
  companyId: string,
  slug: string
): CaseStudy | null {
  const entry = getWorkEntryById(companyId);
  if (!entry) return null;

  const slugs = getSlugsForEntry(entry);
  if (!slugs.includes(slug)) return null;

  const article = getArticleBySlug(slug);
  if (!article) return null;

  return {
    ...article,
    companyId: entry.id,
    company: entry.company,
  };
}

export function getCaseStudyStaticParams(): { company: string; slug: string }[] {
  return portfolioData.work.flatMap((entry) =>
    getSlugsForEntry(entry).map((slug) => ({
      company: entry.id,
      slug,
    }))
  );
}
