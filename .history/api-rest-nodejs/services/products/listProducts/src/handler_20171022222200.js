'use strict';

import event from 'squeezer-event-node';
import vars from './vars';
import Db from './lib/db';
import { success, error } from '../../../../lib/http/response';

const db = new Db(vars);

exports.handler = (...args) => event(vars, (req, res) => {
  db
    .listProducts()
    .then(data => success(res, data))
    .catch(err => error(res, err));
}, ...args);
