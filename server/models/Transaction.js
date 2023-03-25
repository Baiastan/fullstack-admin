import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema(
  {
    //In real application, following fields should be required
    userId: String,
    cost: String,
    products: {
      type: [mongoose.Types.ObjectId],
      of: Number,
    },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", TransactionSchema);

export default Transaction;
