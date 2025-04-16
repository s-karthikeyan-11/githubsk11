import React from "react";
import "./Product.css"; // Ensure this matches the actual file location

const products = [
  { id: 1, name: "AI Chatbot", image: "/images/ai-chatbot.jpg", price: "$199" },
  { id: 2, name: "Cybersecurity Suite", image: "/images/cybersecurity.jpg", price: "$299" },
  { id: 3, name: "Cloud Storage", image: "/images/cloud-storage.jpg", price: "$149" },
];

function Product() {
  return (
    <div className="product-container">
      <h1>SRK TECH's Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
