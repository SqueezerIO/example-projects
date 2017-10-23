'use strict';

import mongoose from 'mongoose';
import ProductSchema from './schemas/Product';

await mongoose.connect('mongodb://localhost/test');

export default {
  mongoose : mongoose,
  Product :  mongoose.model('Product', ProductSchema)
};

class Database {
  construct(vars) {

  }

  init() {

  }
}

export default Db;