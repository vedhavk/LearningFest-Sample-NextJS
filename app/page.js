// Server Component by default: no "use client" directive is needed.
// Route: http://localhost:3000/
import Link from "next/link";

export default function HomePage() {
  return (
    <section>
      <h1>Mini Product Demo</h1>
      <p>
        This tiny app shows how a Server Component displays product information
        while a Client Component handles a click.
      </p>
      {/* This link navigates to the /product route. */}
      <Link href="/product" style={{ display: "inline-block", marginTop: 12,
        padding: "12px 18px", borderRadius: 8, background: "#2457b8",
        color: "white", textDecoration: "none", fontWeight: "bold" }}>
        View product →
      </Link>
    </section>
  );
}
