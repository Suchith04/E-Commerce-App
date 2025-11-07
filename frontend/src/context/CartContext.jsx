import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch products from backend
  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);

  // Add item to cart
  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item._id === product._id);
      if (existing) {
        return prevCart.map(item =>
          item._id === product._id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  // Remove item
  const removeFromCart = (id) => {
    setCart(prevCart => prevCart.filter(item => item._id !== id));
  };

  // Update quantity
  const updateQty = (id, qty) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item._id === id ? { ...item, qty: Math.max(qty, 1) } : item
      )
    );
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);
  };

  return (
    <CartContext.Provider
      value={{ cart, products, addToCart, removeFromCart, updateQty, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
};
