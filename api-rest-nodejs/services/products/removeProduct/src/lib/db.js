'use strict';

import Db from '../../../../../lib/db';
import Product from '../../../../../lib/db/models/Product';

class Database {
  constructor(vars) {
    this.vars = vars;
    this.db = new Db(vars);
  }

  getProduct(id) {
    return new Promise((resolve, reject) => {
      this.db.init().then(() => {
        Product.remove({ _id: id }, (err) => {
          if (err) return reject(err);

          return resolve();
        });
      });
    });
  }
}

export default Database;
