import Link from "next/link";
import styles from "@/styles/SiteHeader.module.css";

const navItems = [
  { href: "#work", label: "Work" },
  { href: "#articles", label: "Articles" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          Josh Bowden
        </Link>
        <nav aria-label="Primary">
          <ul className={styles.nav}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
