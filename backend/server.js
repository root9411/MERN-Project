require('dotenv').config();
const express = require('express');
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');


//database connection
connectDB();

// middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/api/products', productRoutes)
app.use('/api/users',userRoutes);
app.use('/api/auth',authRoutes);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT}`))