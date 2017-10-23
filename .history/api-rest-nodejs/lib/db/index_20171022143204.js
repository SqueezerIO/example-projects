'use strict';

import Promise from 'bluebird';
import mongoose from 'mongoose';
// import ProductSchema from './schemas/Product';

// const db = {
//   mongoose : mongoose,
//   Product :  mongoose.model('Product', ProductSchema)
// };

class Database {
  construct(vars) {
    this.vars = vars;
  }

  init() {
    const mongoConfig = this.vars.mongodb;
    
    mongoose.connect(mongoConfig.uri, mongoConfig.options || {});

    return new Promise((resolve, reject) => {
      const dbConnection = mongoose.connection;

      dbConnection.on('error', (err) => {
        return reject(err);
      });

      dbConnection.once('open', () => {
        return resolve();
      });
    });
  }
}

export default Database;
