'use strict';

import Promise from 'bluebird';
import mongoose from 'mongoose';

mongoose.Promise = Promise;

class Database {
  constructor(vars) {
    this.vars = vars;
    this.connection = null;
  }

  init() {
    const mongoConfig = this.vars.mongodb;

    if (!this.connection) {
      mongoose.connect(mongoConfig.uri, mongoConfig.options);
      this.connection = mongoose.connection;
    }

    return new Promise((resolve, reject) => {
      this.connection.on('error', (err) => {
        return reject(err);
      });

      this.connection.once('open', () => {
        return resolve();
      });
    });
  }

  close() {
    this.connection.close();
  }
}

export default Database;
