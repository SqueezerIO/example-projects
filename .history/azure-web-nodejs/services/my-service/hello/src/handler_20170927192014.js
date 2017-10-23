'use strict';

import * as response from '../../../../lib/http/response';

exports.hello = (context) => {
  const templateData     = pug.renderFile(path.join(__dirname, 'web/templates/default.pug'), {
    pageTitle     : 'Hello World !!!',
    pretty        : true
  });

  context.res = response.digest({
    headers    : {
      'http-header-1' : 'value'
    },
    data       : templateData,
    statusCode : 200
  });
  context.done();
};
