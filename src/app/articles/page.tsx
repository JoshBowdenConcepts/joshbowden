import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import styles from "@/styles/ArticlesList.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Writing on design systems, accessibility, tokens, and frontend architecture.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main id="main-content" className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Articles</h1>
        <p className={styles.intro}>
          Notes on design systems, accessibility, and the work of building
          shared UI foundations.
        </p>
      </header>
      <ul className={styles.list}>
        {articles.map((article) => (
          <li key={article.slug} className={styles.item}>
            <article>
              <h2 className={styles.itemTitle}>
                <Link href={`/articles/${article.slug}/`}>{article.title}</Link>
              </h2>
              <p className={styles.itemMeta}>
                {formatDate(article.date)}
                {article.readTime ? ` · ${article.readTime}` : ""}
              </p>
              <p className={styles.itemExcerpt}>{article.excerpt}</p>
              {article.tags && article.tags.length > 0 && (
                <ul className={styles.tags} aria-label="Tags">
                  {article.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
              <Link
                href={`/articles/${article.slug}/`}
                className={styles.readMore}
              >
                Read more →
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </main>
  );
}
