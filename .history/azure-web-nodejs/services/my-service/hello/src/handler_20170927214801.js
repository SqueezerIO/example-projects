'use strict';

import * as response from '../../../../lib/http/response';
import {MyComponent} from './jsx/component.jsx';
var ReactDOMServer = require('react-dom/server');

exports.handler = (context) => {
  context.res = response.digest({
    headers    : {
      'http-header-1' : 'value'
    },
    data       : ReactDOMServer.renderToString(<MyComponent />),
    statusCode : 200
  });
  context.done();
};
