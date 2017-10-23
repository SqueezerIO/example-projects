'use strict';

import event from 'squeezer-event-node';
import vars from './vars';
import DB from './lib/db';

const db = new DB(vars);

exports.handler = (...args) => event(vars, (req, res) => {
  res.header('Content-type', 'application/json');
  res.send(200, {
    name : `Your name : ${req.params.name}`,
    number : `Your favorite number : ${req.query.number}`,
    message: req.body.message || 'hello world !!!'
  });
  db.addProduct(req.body).then(())
}, ...args);
