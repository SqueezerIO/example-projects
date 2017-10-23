#!/usr/bin/env node

'use strict';

const fs = require('fs');

const handlerFile = process.argv[2];
const eventInputFile = process.argv[3];
const eventData = JSON.parse(fs.readFileSync(eventInputFile));

const func = require(handlerFile);


async function execute() {
  if (!func.handler) {
    throw new Error(`missing handler on file ${handlerFile}`);
  } else {
    await func.handler(eventData);
    process.exit(0);
  }
}

execute();