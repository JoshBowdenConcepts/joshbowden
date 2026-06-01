import { portfolioData } from "@/data/portfolio";
import styles from "@/styles/Hero.module.css";

export default function Hero() {
  const { personal, about } = portfolioData;

  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      <p className={styles.eyebrow}>
        {personal.location} · {personal.pronouns}
      </p>
      <h1 id="hero-heading" className={styles.title}>
        Hello, I&apos;m {personal.name}.
      </h1>
      <p className={styles.headline}>{personal.headline}</p>
      <p className={styles.intro}>{about}</p>
      <div className={styles.actions}>
        <a className={styles.primary} href="#contact">
          Let&apos;s talk
        </a>
        <a className={styles.secondary} href="#work">
          View work
        </a>
      </div>
    </section>
  );
}
