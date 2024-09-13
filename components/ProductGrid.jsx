"use client";

import ProductCard from './ProductCard';
import styles from '../styles/ProductGrid.module.css';

const ProductGrid = ({ products, onProductClick }) => {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <div key={product.id} className={styles.card} onClick={() => onProductClick(product)}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
