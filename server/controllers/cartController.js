import CartItem from '../models/CartItem.js';
import Product from '../models/Product.js';

export const getCart = async (req, res) => {
  try {
    const cart = await CartItem.find().populate('productId');
    const formatted = cart.map(item => ({
      _id: item._id,
      name: item.productId.name,
      price: item.productId.price,
      qty: item.qty,
    }));

    const total = formatted.reduce((sum, item) => sum + item.price * item.qty, 0);

    res.json({ items: formatted, total });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cart', error: err });
  }
};

export const addToCart = async (req, res) => {
  const { productId, qty } = req.body;
  try {
    const existing = await CartItem.findOne({ productId });
    if (existing) {
      existing.qty += qty || 1;
      await existing.save();
      return res.json(existing);
    }

    const newItem = await CartItem.create({ productId, qty: qty || 1 });
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: 'Error adding to cart', error: err });
  }
};

export const removeFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    await CartItem.findByIdAndDelete(id);
    res.json({ message: 'Item removed from cart' });
  } catch (err) {
    res.status(500).json({ message: 'Error removing item', error: err });
  }
};
