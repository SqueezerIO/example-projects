'use strict';

import event from 'squeezer-event-node';
import vars from './vars';
import DB from './lib/db';

const db = new DB(vars);

const displayError = (error) => {
  console.log(error);
};

process.on('uncaughtException', e => displayError(e));
process.on('unhandledRejection', e => displayError(e));

exports.handler = (...args) => event(vars, (req, res) => {
  db
    .addProduct(req.body)
    .then((data) => {
      res.header('Content-type', 'application/json');
      res.send(200, data);
    })
    .catch((err) => {
      res.send(500, err);
    });
}, ...args);
