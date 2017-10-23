#!/usr/bin/env node

'use strict';

const fs   = require('fs');

const handlerFile    = process.argv[2];
const eventInputFile = process.argv[3];
const eventData      = JSON.parse(fs.readFileSync(eventInputFile));

const func = require(handlerFile);

if (!func.handler) {
  throw new Error(`missing handler on file ${handlerFile}`);
} else {
  func.handler(eventData);
}

const timeout = function (delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, delay)
  })
}

async function timer () {
  console.log('timer started')
  await Promise.resolve(timeout(100));
  console.log('timer finished')
}

timer()