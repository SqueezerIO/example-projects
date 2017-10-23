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
    const mongoConfig = this.vars.mongodb;
    mongoose.connect(mongoConfig.uri, mongoConfig.options || {});
    
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
      // we're connected!
    });
  }
}

export default Database;