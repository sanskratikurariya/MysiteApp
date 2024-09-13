"use client"

import { useState } from 'react';
import styles from '../styles/ImageCarousel.module.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className={styles.carousel}>
      <button className={styles.prev} onClick={goToPrevious}>‹</button>
      <img src={images[currentIndex]} alt="Product" className={styles.image} id="product-image" />
      <button className={styles.next} onClick={goToNext}>›</button>
    </div>
  );
};

export default ImageCarousel;
