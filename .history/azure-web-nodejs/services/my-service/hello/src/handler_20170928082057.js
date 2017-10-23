'use strict';

var React = require('react');
var ReactDOMServer = require('react-dom/server');
import Index from './jsx';
import * as response from '../../../../lib/http/response';

exports.handler = (context) => {
  context.res = response.digest({
    data: ReactDOMServer.renderToStaticMarkup(<Index />)
  });
  context.done();
};
