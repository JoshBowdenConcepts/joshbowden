import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getCaseStudy,
  getCaseStudyStaticParams,
} from "@/lib/caseStudies";
import { MarkdownContent } from "@/lib/markdown";
import styles from "@/styles/ArticlePage.module.css";
import type { Metadata } from "next";

interface CaseStudyPageProps {
  params: Promise<{ company: string; slug: string }>;
}

export async function generateStaticParams() {
  return getCaseStudyStaticParams();
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { company, slug } = await params;
  const caseStudy = getCaseStudy(company, slug);
  if (!caseStudy) return { title: "Case study not found" };
  return {
    title: caseStudy.title,
    description: caseStudy.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { company, slug } = await params;
  const caseStudy = getCaseStudy(company, slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main id="main-content" className={styles.page}>
      <Link href="/#work" className={styles.back}>
        ← Back to work
      </Link>
      <article>
        <header className={styles.header}>
          <p className={styles.meta}>
            {caseStudy.company} · Case study
          </p>
          <h1 className={styles.title}>{caseStudy.title}</h1>
          <p className={styles.meta}>
            {formatDate(caseStudy.date)}
            {caseStudy.readTime ? ` · ${caseStudy.readTime}` : ""}
          </p>
          {caseStudy.tags && caseStudy.tags.length > 0 && (
            <ul className={styles.tags} aria-label="Tags">
              {caseStudy.tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </header>
        <div className={styles.content}>
          <MarkdownContent content={caseStudy.content} />
        </div>
      </article>
    </main>
  );
}
