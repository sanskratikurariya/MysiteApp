"use client"

import { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import ProductDetail from '../components/ProductDetail';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';


const products = [
  { id: 1, name: 'Slang Beg', price: '50$', image: '/images/product12.jpg', description: 'Description for Product 1', images: ['/images/product12.jpg', '/images/product13.jpg'] },


  { id: 2, name: 'Goggles', price: "30$", image: '/images/product21.jpg', description: 'Description for Product 2', images: ['/images/product21.jpg', '/images/product22.jpg'] },


  { id: 3, name: 'Jumpsuit', price: "70$", image: '/images/product31.jpg', description: 'Description for Product 2', images: ['/images/product31.jpg', '/images/product32.jpg'] },


  { id: 4, name: 'Ring', price: "50$", image: '/images/product51.jpg', description: 'Description for Product 4', images: ['/images/product51.jpg', '/images/product52.jbg'] },


  { id: 5, name: 'Onepiece', price: "40$", image: '/images/product41.jpg', description: 'Description for Product 5', images: ['/images/product41.jpg', '/images/product42.jpg'] }


  ,{ id: 6, name: 'shoes', price: 
    "80$", image: '/images/product61.jpg', description: 'Description for Product 6', images: ['/images/product61.jpg', '/images/product62.jpg'] },
  
  { id: 7, name: 'Jhumka', price: "70$", image: '/images/product81.jpg', description: 'Description for Product 6', images: ['/images/product81.jpg', '/images/product82.jpg'] },
  
  { id: 7, name: 'Heels', price:" 69$", image: '/images/product71.jpg', description: 'Description for Product 2', images: ['/images/product71.jpg', '/images/product72.jpg'] },
  
  { id: 9, name: 'Lipstick', price: 69.99, image: '/images/product91.jpg', description: 'Description for Product 9', images: ['/images/product91.jpg', '/images/product92.jpg'] },
  { id: 10, name: 'watch', price:"100$", image: '/images/product100.jpg', description: 'Description for Product 10', images: ['/images/product100.jpg', '/images/product102.jpg'] },
 

];

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      {!selectedProduct ? (
        <>
        
          <ProductGrid products={products} onProductClick={handleProductClick} />
        </>
      ) : (
        <ProductDetail product={selectedProduct} onClose={handleCloseDetail} />
      )}
    </div>
    </>
  );
}
