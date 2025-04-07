import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './db/db';
import authRoutes from './routes/user.route';
import loanRoutes from './routes/loan.route';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

// Log to confirm environment is loading
console.log("MONGO_URI:", process.env.MONGO_URI);

// Middleware to parse JSON
app.use(express.json());
// Allow requests from localhost:5173
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true // enable if using cookies or Authorization headers
}));
// Test Route
app.get('/', (req: Request, res: Response) => {
  res.send('API is running...');
});

// Authentication Routes
app.use('/api/auth', authRoutes);

app.use('/api/loans', loanRoutes);

// Connect to DB and Start Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('DB connection failed:', err);
});