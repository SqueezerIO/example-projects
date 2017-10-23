'use strict';

import adapter from 'squeezer-adapter-node';
import vars from './vars';

exports.handler = (...args) => adapter(vars, (req, res) => {
  res.send(200, 'hello!!!');
}, ...args);
