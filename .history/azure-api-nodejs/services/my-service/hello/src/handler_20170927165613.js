'use strict';

import * as response from '../../../../lib/http/response';
const a = require('../aaa');

exports.handler = (context, req) => {
  context.res = response.digest({
    headers    : {
      'http-header-1' : 'value'
    },
    message    : 'success',
    data       : {
      text  : 'Hello World !',
      req : req
    },
    statusCode : 200
  });

  context.done();
};
