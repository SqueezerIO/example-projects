'use strict';

const success = (res, data) => {
  res.json(200, {
    code : 200,
    message : 'success',
    data: data
  });
};

const error = (res, err) => {
  res.json(400, {
    code : 400,
    message : err.message || 'error',
    data: err
  });
};

export default { success, error };
