import styles from "@/styles/SiteFooter.module.css";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© {year} Josh Bowden</p>
        <p>
          <a href="https://www.linkedin.com/in/joshua-bowden/">LinkedIn</a>
          {" · "}
          <a href="mailto:joshbowdenconcepts@gmail.com">Email</a>
        </p>
      </div>
    </footer>
  );
}
