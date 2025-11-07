import CartItem from '../models/CartItem.js';
import Product from '../models/Product.js';

export const checkout = async (req, res) => {
  try {
    const { name, email, cartItems } = req.body;

    if (!cartItems || !cartItems.length) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

    // Clear cart after checkout
    await CartItem.deleteMany();

    const receipt = {
      name,
      email,
      total: total.toFixed(2),
      timestamp: new Date(),
    };

    res.json(receipt);
  } catch (err) {
    res.status(500).json({ message: 'Checkout failed', error: err });
  }
};
