'use strict';

import * as response from '../../../../lib/http/response';

exports.hello = (context) => {
  context.res = response.digest({
    headers    : {
      'http-header-1' : 'value'
    },
    data       : '<h1>Heading 1</h1>',
    statusCode : 200
  });
  context.done();
};
