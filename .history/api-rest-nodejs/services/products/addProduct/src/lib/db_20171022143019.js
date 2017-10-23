'use strict';

import DB from '../../../../../lib/db';
import Product from '../../../../../lib/db/models/Product';

class Database {
  constructor(vars) {
    this.vars = vars;
    this.db = new DB(vars);
  }

  addProduct(item) {
    return new Promise((resolve, reject) => {
      console.log('aa')
      
      this.db.init().then(() => {
        const product = new Product(item);

        product.save((err, createdObject) => {
          if (err) {
            return reject(err);
          }

          return resolve(createdObject);
        });
      })
      .catch((err) => {
        reject(err);
      });
    });
  }
}

export default Database;
