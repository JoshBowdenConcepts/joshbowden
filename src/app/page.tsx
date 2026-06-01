import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import FeaturedArticles from "@/components/FeaturedArticles";
import Contact from "@/components/Contact";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main id="main-content" className={styles.main}>
        <Hero />
        <WorkSection />
        <FeaturedArticles />
        <Contact />
      </main>
    </div>
  );
}
