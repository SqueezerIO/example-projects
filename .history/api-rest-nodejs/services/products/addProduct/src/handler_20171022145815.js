'use strict';

import event from 'squeezer-event-node';
import vars from './vars';
import DB from './lib/db';

const db = new DB(vars);

exports.handler = (...args) => event(vars, (req, res) => {
  db
    .addProduct(req.body)
    .then((err, data) => {
      console.log(err)
      res.header('Content-type', 'application/json');
      res.send(200, data);
    })
}, ...args);
