#!/usr/bin/env node

'use strict';

const fs   = require('fs');

const handlerFile    = process.argv[2];
const eventInputFile = process.argv[3];
const eventData      = JSON.parse(fs.readFileSync(eventInputFile));
const context        = {};

const writeResponse = (data) => {
  const succeedMsg = JSON.stringify(data) || {};

  fs.writeFileSync(
    `${__dirname}/../../.build/development/response.json`,
    succeedMsg
  );
  process.exit(0);
};

context.succeed = (data) => {
  writeResponse(data);
};

const func = require(`${handlerFile}`);

if (!func.handler) {
  throw new Error(`missing handler on file ${handlerFile}`);
} else {
  func.handler(eventData, context);
}
