import React, { useState } from "react";

export default function ModernCycle() {
  const [qty, setQty] = useState(1);

  const product = {
    name: "ModernCycle XR-1",
    price: 21999,
    desc: "Stylish, lightweight cycle with 21-speed gear and LED headlamp.",
    img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1000&q=80"
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20, textAlign: "center" }}>
      <h2>{product.name}</h2>
      <img
        src={product.img}
        alt="ModernCycle"
        style={{ width: "80%", borderRadius: 10 }}
      />
      <p>{product.desc}</p>
      <h3>₹{product.price}</h3>

      <div style={{ margin: 10 }}>
        <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
        <span style={{ margin: "0 10px" }}>{qty}</span>
        <button onClick={() => setQty(qty + 1)}>+</button>
      </div>

      <button
        style={{
          background: "black",
          color: "white",
          padding: "10px 20px",
          borderRadius: 8,
          border: "none",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
