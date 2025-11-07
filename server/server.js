import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import checkoutRoutes from './routes/checkoutRoutes.js';
import dotenv from 'dotenv';

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config()


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.error('MongoDB Error:', err));

// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/checkout', checkoutRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
