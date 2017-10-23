'use strict';

import Adapter from 'squeezer-adapter-node';

// exports.handler = () => Adapter((res, req) => {
//   console.log(arguments[2].c)
// });
exports.handler = () => {
  console.log(arguments)
};

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
