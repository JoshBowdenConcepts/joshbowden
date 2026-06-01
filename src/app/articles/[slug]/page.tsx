import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getArticleBySlug,
  getArticleSlugsForStaticParams,
} from "@/lib/articles";
import { MarkdownContent } from "@/lib/markdown";
import styles from "@/styles/ArticlePage.module.css";
import type { Metadata } from "next";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getArticleSlugsForStaticParams();
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main id="main-content" className={styles.page}>
      <Link href="/#articles" className={styles.back}>
        ← Back to articles
      </Link>
      <article>
        <header className={styles.header}>
          <h1 className={styles.title}>{article.title}</h1>
          <p className={styles.meta}>
            {formatDate(article.date)}
            {article.readTime ? ` · ${article.readTime}` : ""}
          </p>
          {article.tags && article.tags.length > 0 && (
            <ul className={styles.tags} aria-label="Tags">
              {article.tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </header>
        <div className={styles.content}>
          <MarkdownContent content={article.content} />
        </div>
      </article>
    </main>
  );
}
