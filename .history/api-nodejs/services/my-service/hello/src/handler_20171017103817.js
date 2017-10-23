'use strict';

import adapter from 'squeezer-adapter-node';
import vars from './vars';

exports.handler = (...args) => adapter(vars, (req, res) => {
  res.header('Content-type', 'application/json');
  res.send(200, {
    name : req.params.name,
    number : `Your favorite number is ${}`,
    message: req.body.message || 'hello !'
  });
}, ...args);
