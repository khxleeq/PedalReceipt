const mongoose = require('mongoose');

const receiptSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Receipt', receiptSchema);