import express from 'express';
import connectDatabase from './config/database.js';
import dotenv from 'dotenv';
import productRoutes from './routes/product.routes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3099;

dotenv.config();

// UncaughtException Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

// connect to db
connectDatabase();

// TODO: define url for whitelisting
app.use(cors());

// Routes
app.use("/api/products", productRoutes);

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
});
