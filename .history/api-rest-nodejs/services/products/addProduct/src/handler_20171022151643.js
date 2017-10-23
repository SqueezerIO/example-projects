'use strict';

import event from 'squeezer-event-node';
import vars from './vars';
import DB from './lib/db';

const db = new DB(vars);

exports.handler = (...args) => event(vars, (req, res) => {
  console.log(res);
  db
    .addProduct(req.body)
    .then((data) => {
      res.header('Content-type', 'application/json');
      res.send(200, data);
    })
    .catch((err) => {
      // console.log(err)
      // console.log(res);
      res.header('Content-type', 'text/html');      
      res.send(200, {});
    });
}, ...args);