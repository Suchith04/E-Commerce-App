import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ReceiptModal from './ReceiptModal';

const Checkout = () => {
  const { cart, getTotal } = useContext(CartContext);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [showReceipt, setShowReceipt] = useState(false);
  const [receipt, setReceipt] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          cartItems: cart
        }),
      });

      const data = await response.json();
      setReceipt(data);
      setShowReceipt(true);
    } catch (err) {
      console.error('Checkout error:', err);
      alert('Something went wrong during checkout.');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div className="flex justify-between mt-4">
          <p className="text-lg font-semibold">Total: ${getTotal()}</p>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Checkout
          </button>
        </div>
      </form>

      {showReceipt && (
        <ReceiptModal
          receipt={receipt}
          onClose={() => setShowReceipt(false)}
        />
      )}
    </div>
  );
};

export default Checkout;
