'use strict';

import adapter from 'squeezer-adapter-node';
import vars from './vars';

exports.handler = (...args) => adapter(vars, (req, res) => {
  res.send(200, 'hello');
}, ...args);

// exports.handler = (event, context) => {
  // const adapter = new Adapter(event, context, vars);
  // context.succeed(response.digest({
  //   headers : {
  //     'http-header-1' : 'value'
  //   },
  //   message    : 'success',
  //   data       : {
  //     text  : 'Hello World!',
  //     event : event
  //   },
  //   statusCode : 200
  // }));
// };
