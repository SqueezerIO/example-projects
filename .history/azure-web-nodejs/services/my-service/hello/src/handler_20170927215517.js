'use strict';

import * as response from '../../../../lib/http/response';
var React = require('react');
var ReactDOMServer = require('react-dom/server');

class Header extends React.Component {
  render() {
    return <div>HEADER</div>;
  }
}

class MyComponent extends React.Component {
  render() {
    return (
      <Header/>
      <div>Hello World</div>
    )
  }
}

exports.handler = (context) => {
  context.res = response.digest({
    headers: {
      'http-header-1': 'value'
    },
    data: ReactDOMServer.renderToString(<MyComponent />),
    statusCode: 200
  });
  context.done();
};
