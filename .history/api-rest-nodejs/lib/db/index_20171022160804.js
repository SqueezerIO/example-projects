'use strict';

import Promise from 'bluebird';
import mongoose from 'mongoose';

mongoose.Promise = Promise;

class Database {
  constructor(vars) {
    this.vars = vars;
  }

  init() {
    const mongoConfig = this.vars.mongodb;

    mongoose.connect(mongoConfig.uri, mongoConfig.options);

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
