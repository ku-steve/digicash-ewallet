// backend/app.js
import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Test route for root
app.get('/', (req, res) => {
    res.send('Welcome to the Digicash eWallet API');
});

// Route to check wallet balance (dummy example)
app.get('/balance', (req, res) => {
    res.json({ message: 'Balance endpoint working!' });
});

// Route to perform a transfer (dummy example)
app.post('/transfer', (req, res) => {
    const { from, to, amount } = req.body;
    res.json({ message: `Transferred ${amount} from ${from} to ${to}` });
});

// Route to shield tokens (dummy example)
app.post('/shield', (req, res) => {
    const { amount } = req.body;
    res.json({ message: `Shielded ${amount} tokens` });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
