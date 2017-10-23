'use strict';

import * as response from '../../../../lib/http/response';
import vars from './vars';

exports.handler = (event, context) => {
  context.succeed(response.digest({
    headers : {
      'http-header-1' : 'value'
    },
    message    : 'success',
    data       : {
      text  : 'Hello World!',
      event : event
    },
    statusCode : 200
  }));
};
