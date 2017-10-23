import mongoose from 'mongoose';

Schema = new mongoose.Schema({
  title: "string",
  category: "string",
  price: 0,
  stock: 0
});

export default mongoose.model('Product', Schema);
