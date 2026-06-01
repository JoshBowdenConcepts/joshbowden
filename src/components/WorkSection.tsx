import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { getCaseStudyUrl } from "@/lib/caseStudies";
import styles from "@/styles/WorkSection.module.css";

function formatDateRange(start: string, end?: string) {
  return end ? `${start} – ${end}` : `${start} – Present`;
}

export default function WorkSection() {
  const { work } = portfolioData;

  return (
    <section
      id="work"
      className={styles.section}
      aria-labelledby="work-heading"
    >
      <h2 id="work-heading" className={styles.sectionTitle}>
        Recent work
      </h2>
      {work.map((entry) => (
        <article key={entry.id} className={styles.entry}>
          <h3 className={styles.company}>{entry.company}</h3>
          {entry.location && (
            <p className={styles.meta}>{entry.location}</p>
          )}
          <p className={styles.summary}>{entry.summary}</p>
          {entry.roles.map((role) => (
            <div key={role.title} className={styles.role}>
              <h4 className={styles.roleTitle}>{role.title}</h4>
              <p className={styles.roleDates}>
                {formatDateRange(role.startDate, role.endDate)}
              </p>
              <ul className={styles.highlights}>
                {role.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          {entry.articleLinks && entry.articleLinks.length > 0 && (
            <div className={styles.articleLinks}>
              {entry.articleLinks.map((link) => (
                <Link
                  key={link.slug}
                  href={getCaseStudyUrl(entry.id, link.slug)}
                  className={styles.articleLink}
                >
                  {link.title} →
                </Link>
              ))}
            </div>
          )}
        </article>
      ))}
    </section>
  );
}
