'use strict';

import event from 'squeezer-event-node';
import vars from './vars';
import Db from './lib/db';
import * as response from '../../../../lib/http/response';

const db = new Db(vars);

exports.handler = (...args) => event(vars, (req, res) => {
  db
    .addProduct(req.body)
    .then(data => response.success(res, data))
    .catch(err => response.error(res, err));
}, ...args);
