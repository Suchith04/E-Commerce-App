import Product from '../models/Product.js';


export const getProducts = async (req, res) => {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      const mockData = [
        { name: 'Wireless Headphones', price: 3000 },
        { name: 'Smartwatch', price: 1500 },
        { name: 'Bluetooth Speaker', price: 10000 },
        { name: 'Gaming Mouse', price: 900 },
        { name: 'Mechanical Keyboard', price: 400 },
        { name: 'USB-C Hub', price: 700 },
      ];
      await Product.insertMany(mockData);
      console.log(' Mock products inserted');
    }

    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching products', error: err });
  }
};
