'use strict';

import DB from '../../../../lib/db';

class Database {
  constructor(vars) {
    this.vars = vars;
    this.db = new DB(vars);
  }

  addProduct(item) {
    return new Promise((resolve, reject) => {
      this.db.init().then(() => {

      });
    });
  }
}

export default Database;