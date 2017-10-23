'use strict';

import event from 'squeezer-event-node';
import vars from './vars';
import DB from './lib/db';

const db = new DB(vars);

exports.handler = (...args) => event(vars, (req, res) => {
  const a = res;
  db
    .addProduct(req.body)
    .then((data) => {
      res.header('Content-type', 'application/json');
      res.send(200, data);
    })
    .catch((err) => {
      // console.log(err)
      console.log('caca');
      a.header('Content-type', 'text/html');      
      a.send(200, {});
    });
}, ...args);
