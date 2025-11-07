import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, updateQty, getTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty</h2>
        <Link
          to="/"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border p-4 rounded-lg shadow-sm"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>${item.price.toFixed(2)}</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="bg-gray-300 px-2 rounded"
                onClick={() => updateQty(item._id, item.qty - 1)}
              >
                -
              </button>
              <span>{item.qty}</span>
              <button
                className="bg-gray-300 px-2 rounded"
                onClick={() => updateQty(item._id, item.qty + 1)}
              >
                +
              </button>
            </div>

            <div className="flex items-center gap-4">
              <p className="font-semibold">
                ${(item.price * item.qty).toFixed(2)}
              </p>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between items-center border-t pt-4">
        <h3 className="text-xl font-semibold">Total: ${getTotal()}</h3>
        <Link
          to="/checkout"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
