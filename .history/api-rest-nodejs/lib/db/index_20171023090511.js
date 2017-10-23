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

    return new Promise((resolve, reject) => {
      if (mongoose.connection && mongoose.connection.readyState === 1) {
        resolve();
      } else {
        mongoose.connect(mongoConfig.uri, mongoConfig.options);
      }

      mongoose.connection.on('error', (err) => {
        return reject(err);
      });

      mongoose.connection.once('open', () => {
        return resolve();
      });
    });
  }
}

export default Database;
