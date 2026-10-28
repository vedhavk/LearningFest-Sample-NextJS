"use client"; // Marks this file as a Client Component.

import { useState } from "react";

export default function LikeButton() {
  // useState is available here because this is a Client Component.
  const [liked, setLiked] = useState(false);

  return (
    <button
      // This click handler runs in the browser and updates the UI.
      onClick={() => setLiked(!liked)}
      aria-pressed={liked}
      style={{ marginTop: 8, padding: "10px 16px", border: "1px solid #cbd7ea",
        borderRadius: 8, background: liked ? "#e5efff" : "white",
        color: "#172033", cursor: "pointer", fontSize: 16 }}
    >
      {liked ? "♥ Liked" : "♡ Like"}
    </button>
  );
}
