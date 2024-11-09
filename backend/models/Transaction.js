import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    from: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    to: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    timestamp: { type: Date, default: Date.now },
    status: { type: String, default: 'pending' }
});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;