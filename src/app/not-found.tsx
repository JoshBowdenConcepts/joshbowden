import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main-content"
      style={{
        maxWidth: "var(--page-max)",
        margin: "0 auto",
        padding: "var(--space-3xl) var(--space-lg)",
      }}
    >
      <h1>Page not found</h1>
      <p style={{ marginTop: "var(--space-md)", color: "var(--tx2)" }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <p style={{ marginTop: "var(--space-lg)" }}>
        <Link href="/">Return home</Link>
      </p>
    </main>
  );
}
