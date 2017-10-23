'use strict';

import Db from '../../../../../lib/db';
import Product from '../../../../../lib/db/models/Product';

class Database {
  constructor(vars) {
    this.vars = vars;
    this.db = new Db(vars);
  }

  addProduct(item) {
    return new Promise((resolve, reject) => {
      this.db.init().then(() => {
        const product = new Product(item);

        product.save((err, createdObject) => {
          if (err) return reject(err);

          this.db.close();

          return resolve(createdObject);
        });
        resolve();
      });
    });
  }
}

export default Database;
