'use strict';

import adapter from 'squeezer-adapter-node';
import vars from './vars';

exports.handler = (...args) => adapter(vars, (req, res) => {
  res
    .header('Content-type', 'application/json')
    .send(200, {
      message : 'hello !!!'
    });
}, ...args);
