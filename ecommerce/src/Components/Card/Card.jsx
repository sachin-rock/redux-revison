import React from "react";
import "./Card.scss";

const Product = ({ product }) => {
    const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <img
          src={isHovered ? product.images[1] : product.images[0]}
          alt={product.name}
        />
      <div className="card-content">
        <h3>{product.name}</h3>
        <p>{product.final_price}</p>
        <button className="btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
