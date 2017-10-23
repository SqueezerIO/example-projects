'use strict';

import Promise from 'bluebird';
import mongoose from 'mongoose';

mongoose.Promise = Promise;

class Database {
  constructor(vars) {
    this.vars = vars;
    this.connected = null;
  }

  init() {
    const mongoConfig = this.vars.mongodb;

    if (mongoose.connection && ) {
      mongoose.connect(mongoConfig.uri, mongoConfig.options);
    } else {
      mongoose.connect(mongoConfig.uri, mongoConfig.options);
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
}

export default Database;
