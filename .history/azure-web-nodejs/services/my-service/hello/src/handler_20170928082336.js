'use strict';

import react from 'react';
import ReactDOMServer from 'react-dom/server';
import Index from './jsx';
import * as response from '../../../../lib/http/response';

exports.handler = (context) => {
  context.res = response.digest({
    data: ReactDOMServer.renderToStaticMarkup(<Index />)
  });
  context.done();
};
