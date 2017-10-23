'use strict';

import Promise from 'bluebird';
import mongoose from 'mongoose';
// import ProductSchema from './schemas/Product';


mongoose.Promise = Promise;

class Database {
  constructor(vars) {
    this.vars = vars;
  }

  init() {
    const mongoConfig = this.vars.mongodb;
    const options = Object.assign(
      {
        useMongoClient: true
      },
      mongoConfig.options
    );

    mongoose.connect(mongoConfig.uri, options);

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
