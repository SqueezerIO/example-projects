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
          // this.db.close();

          if (err) return reject(err);

          return resolve(createdObject);
        });
      });
    });
  }
}

export default Database;
