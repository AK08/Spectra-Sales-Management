import mongoose from 'mongoose';

const salesSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    productModelNumber: {
      type: String,
      required: true,
    },
    soldPrice: {
      type: Number,
      required: true,
    },
    salesDate: {
      type: Date,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Sale = mongoose.model('Sale', salesSchema);
