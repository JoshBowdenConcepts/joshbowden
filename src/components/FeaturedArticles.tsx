import Link from "next/link";
import { getFeaturedArticles } from "@/lib/articles";
import styles from "@/styles/ArticleCard.module.css";

const FEATURED_COUNT = 4;

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function FeaturedArticles() {
  const articles = getFeaturedArticles().slice(0, FEATURED_COUNT);

  return (
    <section
      id="articles"
      className={styles.section}
      aria-labelledby="articles-heading"
    >
      <h2 id="articles-heading" className={styles.sectionTitle}>
        Featured articles
      </h2>
      <div className={styles.grid}>
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/articles/${article.slug}/`}
            className={styles.card}
          >
            <h3 className={styles.cardTitle}>{article.title}</h3>
            <p className={styles.cardMeta}>
              {formatDate(article.date)}
              {article.readTime ? ` · ${article.readTime}` : ""}
            </p>
            <p className={styles.cardExcerpt}>{article.excerpt}</p>
            <span className={styles.readMore}>Read article</span>
          </Link>
        ))}
      </div>
      <Link href="/articles/" className={styles.allLink}>
        View all articles →
      </Link>
    </section>
  );
}
