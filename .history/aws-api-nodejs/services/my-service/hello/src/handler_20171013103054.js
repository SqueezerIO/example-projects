'use strict';

import adapter from 'squeezer-adapter-node';
import vars from './vars';
// exports.handler = () => Adapter((res, req) => {
//   console.log(arguments[2].c)
// });
console.log(__dirname)
exports.handler = (...args) => adapter(vars, ...args, (req, res) => {

});

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
