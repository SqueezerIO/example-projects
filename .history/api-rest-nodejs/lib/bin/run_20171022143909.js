#!/usr/bin/env node

'use strict';

const fs   = require('fs');

const handlerFile    = process.argv[2];
const eventInputFile = process.argv[3];
const eventData      = JSON.parse(fs.readFileSync(eventInputFile));

const func = require(handlerFile);

const displayError = (error) => {
  console.log(error);
};

process.on('uncaughtException', e => displayError(e));
process.on('unhandledRejection', e => displayError(e));

if (!func.handler) {
  throw new Error(`missing handler on file ${handlerFile}`);
} else {
  func.handler(eventData);
}
