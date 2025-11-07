import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
  const { products, addToCart } = useContext(CartContext);
  const [addedProductIds, setAddedProductIds] = useState([]);

  const handleAdd = (product) => {
    addToCart(product);
    setAddedProductIds((prev) => [...prev, product._id]);

    
    setTimeout(() => {
      setAddedProductIds((prev) => prev.filter((id) => id !== product._id));
    }, 1000);
  };

  if (!products.length) {
    return <p className="text-center">Loading products...</p>;
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => {
          const isAdded = addedProductIds.includes(product._id);
          return (
            <div
              key={product._id}
              className="border rounded-lg p-4 shadow-md flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-600 mt-2">₹{product.price.toFixed(2)}</p>
              </div>

              <button
                disabled={isAdded}
                className={`mt-4 py-2 rounded transition ${
                  isAdded
                    ? 'bg-green-500 text-white cursor-default'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
                onClick={() => handleAdd(product)}
              >
                {isAdded ? 'Added ✓' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
