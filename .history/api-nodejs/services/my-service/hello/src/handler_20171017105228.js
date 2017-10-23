'use strict';

import adapter from 'squeezer-adapter-node';
import vars from './vars';

exports.handler = (...args) => adapter(vars, (req, res) => {
  res.header('Content-type', 'application/json');
  res.send(200, {
    name : `Your name ${req.params.name}`,
    number : `Your favorite number is ${req.query.number} ${}\`,
    message: req.body.message || 'hello world !!!'
  });
}, ...args);
