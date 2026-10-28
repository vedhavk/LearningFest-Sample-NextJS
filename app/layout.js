// Root Layout: shared layout that wraps every page.
export const metadata = {
  title: "Mini Server + Client Demo",
  description: "A tiny project demonstrating Next.js App Router concepts",
};

export default function RootLayout({ children }) {
  return (
    // The root layout must include <html> and <body>.
    <html lang="en">
      <body style={{ margin: 0, padding: "32px 16px", background: "#f4f7fb",
        color: "#172033", fontFamily: "Arial, sans-serif" }}>
        {/* Shared UI: this header appears on every route. */}
        <header style={{ maxWidth: 760, margin: "0 auto 28px" }}>
          <p style={{ margin: 0, color: "#2457b8", fontWeight: "bold" }}>
            SESSION 11 · NEXT.JS APP ROUTER
          </p>
        </header>
        {/* The current route's page is inserted here. */}
        <main style={{ maxWidth: 760, margin: "0 auto" }}>{children}</main>
      </body>
    </html>
  );
}
