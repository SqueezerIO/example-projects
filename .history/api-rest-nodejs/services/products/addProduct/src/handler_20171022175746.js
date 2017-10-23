'use strict';

import event from 'squeezer-event-node';
import vars from './vars';
import Db from './lib/db';

const db = new Db(vars);

exports.handler = (...args) => event(vars, (req, res) => {
  res.header('Content-type', 'application/json');

  db
    .addProduct(req.body)
    .then((data) => {
      res.send(200, data);
    })
    .catch((err) => {
      // console.log(err)
      // console.log(res);
      console.log('caca');
      res.send(500, err);
    });
}, ...args);