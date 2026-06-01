import { portfolioData } from "@/data/portfolio";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
  const { personal, education } = portfolioData;

  return (
    <section
      id="contact"
      className={styles.section}
      aria-labelledby="contact-heading"
    >
      <h2 id="contact-heading" className={styles.sectionTitle}>
        Let&apos;s talk
      </h2>
      <p className={styles.text}>
        I&apos;m open to conversations about design systems, accessibility, and
        engineering leadership. Reach out via email or LinkedIn.
      </p>
      <ul className={styles.links}>
        <li>
          <a href={`mailto:${personal.email}`}>{personal.email}</a>
        </li>
        <li>
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
      <div className={styles.skills}>
        <p className={styles.skillsTitle}>Skills</p>
        <ul className={styles.skillList} aria-label="Top skills">
          {personal.skills.map((skill) => (
            <li key={skill} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.skills}>
        <p className={styles.skillsTitle}>Education</p>
        <ul className={styles.educationList}>
          {education.map((edu) => (
            <li key={edu.institution} className={styles.educationItem}>
              <span className={styles.educationInstitution}>{edu.institution}</span>
              <span className={styles.educationDetail}>
                {edu.degree} ({edu.dates})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
