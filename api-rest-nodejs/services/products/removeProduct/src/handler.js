'use strict';

import event from 'squeezer-event-node';
import vars from './vars';
import Db from './lib/db';

const db = new Db(vars);

exports.handler = (...args) => event(vars, (req, res) => {
  db
    .getProduct(req.params.id)
    .then(() => res.json(200, {
      message : 'success'
    }))
    .catch(err => res.json(400, err));
}, ...args);
