import React, { useState } from 'react';
import Header from './components/Header';
import ProductGrid from './components/ProductGrid';
import ProductDetails from './components/ProductDetails';
import { products } from './data/sampleData';
import "./style.css"

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {selectedProduct ? (
          <ProductDetails 
            product={selectedProduct} 
            onBack={() => setSelectedProduct(null)} 
          />
        ) : (
          <ProductGrid 
            products={products} 
            onProductClick={setSelectedProduct} 
          />
        )}
      </main>
    </div>
  );
};

export default App;