'use strict';

import Promise from 'bluebird';
import mongoose from 'mongoose';
import ProductSchema from './schemas/Product';

class Database {
  construct(vars) {
    this.vars = vars;
  }

  init() {
    const mongoConfig = this.vars.mongodb;
    const db = {
      mongoose : mongoose,
      Product :  mongoose.model('Product', ProductSchema)
    };

    return new Promise((resolve, reject) => {
      mongoose.connect(mongoConfig.uri, mongoConfig.options || {});
      return reject(`Invalid event "${eventType}" on provider "${providerName}"`);
      
      db.on('error', (err) => {
        return reject(err);
      });
      db.once('open', () => {
        return resolve(db);
      });
    });
  }
}

export default Database;