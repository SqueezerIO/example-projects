'use strict';

exports.success = (res, data) => {
  res.json(200, {
    code : 200,
    message : 'success',
    data: data
  });
};

exports.error = (res, data) => {
  res.json(400, {
    code : 400,
    message : 'error',
    data: data
  });
};
