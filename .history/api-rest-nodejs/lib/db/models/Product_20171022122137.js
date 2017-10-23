import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: 0,
  stock: 0
});

export default mongoose.model('Product', Schema);
