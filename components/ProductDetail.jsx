
"use client";

import React, { useState } from 'react';
import '../styles/ProductDetail.module.css';
import ImageCarousel from './ImageCarousel';

const ProductDetails = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === product.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? product.images.length - 1 : prevIndex - 1
    );
  };

  const handleAddToCart = () => {
    setIsAnimating(true);

    const productImage = document.querySelector('#product-image');
    const cartIcon = document.querySelector('#cart-icon');

    const productImageRect = productImage.getBoundingClientRect();
    const cartIconRect = cartIcon.getBoundingClientRect();

    const flyingImage = productImage.cloneNode(true);
    flyingImage.style.position = 'absolute';
    flyingImage.style.left = `${productImageRect.left}px`;
    flyingImage.style.top = `${productImageRect.top}px`;
    flyingImage.style.width = `${productImageRect.width}px`;
    flyingImage.style.height = `${productImageRect.height}px`;
    flyingImage.style.transition = 'all 1s ease';
    flyingImage.style.zIndex = '1000';

    document.body.appendChild(flyingImage);

    requestAnimationFrame(() => {
      flyingImage.style.left = `${cartIconRect.left}px`;
      flyingImage.style.top = `${cartIconRect.top}px`;
      flyingImage.style.width = '40px';
      flyingImage.style.height = '40px';
    });

    flyingImage.addEventListener('transitionend', () => {
      flyingImage.remove();
      setIsAnimating(false);
      console.log('Item added to cart!');
    });
  };

  return (
    <div className="product-details">
    
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>

      <ImageCarousel images={product.images} />

      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <button
        className="add-to-cart-btn"
        onClick={handleAddToCart}
        disabled={isAnimating}
      >
        {isAnimating ? 'Adding...' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductDetails;
