'use strict';

import mongoose from 'mongoose';
import ProductSchema from './schemas/Product';

export default {
  mongoose : mongoose,
  Product :  mongoose.model('Product', ProductSchema)
};

class Database {
  construct(vars) {
    this.vars = vars;
  }

  init() {

  }
}

export default Database;