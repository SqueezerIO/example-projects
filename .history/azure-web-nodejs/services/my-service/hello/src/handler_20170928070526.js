'use strict';

import * as response from '../../../../lib/http/response';
var React = require('react');
var ReactDOMServer = require('react-dom/server');
import Index from './jsx';

exports.handler = (context) => {
  context.res = response.digest({
    data: ReactDOMServer.renderToStaticMarkup(<Index />)
  });
  context.done();
};
