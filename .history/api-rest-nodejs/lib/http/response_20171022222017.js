'use strict';

const success = (res, data) => {
  res.json(200, {
    code : 200,
    message : 'success',
    data: data
  });
};

const error = (res, data) => {
  res.json(400, {
    code : 400,
    message : 'success',
    data: data
  });
};

export default { success, error };