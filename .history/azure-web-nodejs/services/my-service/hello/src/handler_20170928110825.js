'use strict';

import ReactDOMServer from 'react-dom/server';
import Index from './jsx';
import * as response from '../../../../lib/http/response';
njn
nk
exports.handler = (context) => {
  context.res = response.digest({
    data: ReactDOMServer.renderToString(<Index />)
  });
  context.done();
};