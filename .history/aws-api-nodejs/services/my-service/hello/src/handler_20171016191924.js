'use strict';

import adapter from 'squeezer-adapter-node';
import vars from './vars';

exports.handler = (...args) => adapter(vars, (req, res) => {
  res.header('Content-type', 'text/html').send(200, 'hello !');
}, ...args);
