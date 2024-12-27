import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

const ProductGrid = ({ products, onProductClick }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {products.map(product => (
      <Card key={product.id} className="cursor-pointer" onClick={() => onProductClick(product)}>
        <CardHeader className="p-0">
          <img src={product.images[0]} alt={product.name} className="w-full h-64 object-cover" />
        </CardHeader>
        <CardContent className="p-4">
          <h3 className="font-medium">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.brand}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold">₹{product.price}&nbsp;&nbsp;&nbsp;</span>
            <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
            <span className="text-sm text-green-600">&nbsp;&nbsp;&nbsp;{product.discount}</span>
          </div>
        </CardFooter>
      </Card>
    ))}
  </div>
);

export default ProductGrid;