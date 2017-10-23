'use strict';

import ReactDOMServer from 'react-dom/server';
import Index from './jsx';
import * as response from '../../../../lib/http/response';
AudioDestinationNodeDSD
DSADAS

exports.handler = (context) => {
  context.res = response.digest({
    data: ReactDOMServer.renderToString(<Index />)
  });
  context.done();
};
