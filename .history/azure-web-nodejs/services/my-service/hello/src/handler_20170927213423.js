'use strict';

import * as response from '../../../../lib/http/response';
var React = require('react');
var ReactDOMServer = require('react-dom/server');

exports.handler = (context) => {
  context.res = response.digest({
    headers    : {
      'http-header-1' : 'value'
    },
    data       : '<h1>Heading !</h1>',
    statusCode : 200
  });
  context.done();
};
