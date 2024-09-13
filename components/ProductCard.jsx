"use client";

import { useState } from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = ({ product, onClick }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  
  const handleFullScreen = () => {
    setIsFullscreen(!isFullscreen);
  };


  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => {
      setIsAddedToCart(false); 
    }, 1000);
  };

  return (
    <>
      
      <div className={styles.card} onClick={handleFullScreen}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <div className={styles.info}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
        </div>
      </div>

      
      {isFullscreen && (
        <div className={styles.fullscreen} onClick={handleFullScreen}>
          <img src={product.image} alt={product.name} />
          <button className={styles.closeBtn} onClick={handleFullScreen}>
            X
          </button>
          <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
      )}

    
      {isAddedToCart && (
        <div className={styles.cartAnimation}>
          <img src={product.image} alt={product.name} className={styles.image} />
        </div>
      )}
    </>
  );
};

export default ProductCard;
