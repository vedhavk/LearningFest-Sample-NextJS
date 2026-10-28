// Server Component by default.
// Route: http://localhost:3000/product
import Link from "next/link";
import LikeButton from "../components/LikeButton";

// Demo product data. In a real app, this could come from a database or API.
const product = {
  name: "Study Mug",
  price: "₹299",
  description: "A simple mug for long coding and study sessions.",
};

export default function ProductPage() {
  // The server renders this product information into the page's HTML.
  return (
    <section style={{ background: "white", border: "1px solid #dce4f0",
      borderRadius: 16, padding: 24, boxShadow: "0 8px 24px rgba(20,32,58,.06)" }}>
      <p style={{ color: "#2457b8", fontWeight: "bold", marginTop: 0 }}>
        SERVER COMPONENT
      </p>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>{product.price}</h2>

      {/* Client Component inside the Server Component.
          It handles the interactive Like button in the browser. */}
      <LikeButton />

      <hr style={{ border: 0, borderTop: "1px solid #e3e9f2", margin: "24px 0" }} />
      <p style={{ fontSize: 14, color: "#5f6b80" }}>
        <strong>Server's job:</strong> provide product data and render product details.
      </p>
      <p style={{ fontSize: 14, color: "#5f6b80" }}>
        <strong>Client's job:</strong> run the button's JavaScript and update Like state.
      </p>
      <Link href="/" style={{ color: "#2457b8" }}>← Back home</Link>
    </section>
  );
}
