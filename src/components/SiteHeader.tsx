import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/SiteHeader.module.css";

const navItems = [
  { href: "/#work", label: "Work" },
  { href: "/articles", label: "Articles" },
  { href: "/#contact", label: "Contact" },
];

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Josh Bowden home">
          <Image
            src="/logo-header.jpg"
            alt=""
            width={36}
            height={36}
            className={styles.logoImage}
            priority
          />
        </Link>
        <nav className={styles.navWrap} aria-label="Primary">
          <ul className={styles.nav}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
