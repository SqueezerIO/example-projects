'use strict';

import adapter from 'squeezer-adapter-node';
import vars from './vars';

exports.handler = (...args) => adapter(vars, (req, res) => {
  res.header('Content-type', 'application/json');
  res.send(200, {
    name : `Your name : ${req.params.number}`,
    number : `Your favorite number : ${req.query.name}`,
    message: req.body.message || 'hello world !!!'
  });
}, ...args);
