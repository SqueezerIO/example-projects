'use strict';

import Db from '../../../../../lib/db';
import Product from '../../../../../lib/db/models/Product';

class Database {
  constructor(vars) {
    this.vars = vars;
    this.db = new Db(vars);
  }

  getProduct(id, body) {
    return new Promise((resolve, reject) => {
      this.db.init().then(() => {
        Product.findOneAndUpdate({ _id: id }, body, { new: true }, (err, data) => {
          if (err) return reject(err);

          return resolve(data);
        });
      });
    });
  }
}

export default Database;
