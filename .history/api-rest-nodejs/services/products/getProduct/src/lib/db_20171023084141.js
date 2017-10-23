'use strict';

import Db from '../../../../../lib/db';
import Product from '../../../../../lib/db/models/Product';

class Database {
  constructor(vars) {
    this.vars = vars;
    this.db = new Db(vars);
  }

  listProducts() {
    return new Promise((resolve, reject) => {
      this.db.init().then(() => {
        Product.findById({}, (err, data) => {
          if (err) return reject(err);

          return resolve(data);
        });
      });
    });
  }
}

export default Database;
