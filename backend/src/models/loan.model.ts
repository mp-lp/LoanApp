import mongoose from 'mongoose';

const LoanSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  amount: { type: Number, required: true },
  loanTenure: { type: Number, required: true },
  employmentStatus: { type: String, required: true },
  employmentAddress: { type: String, required: true },
  reason: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: {
    type: String,
    enum: ['Pending', 'Verified', 'Rejected', 'Approved'],
    default: 'Pending',
  },
  appliedAt: {
    type: Date,
    default: Date.now, // ✅ Will store the current date/time when created
  }
}, { timestamps: true });

export const Loan = mongoose.model('Loan', LoanSchema);
