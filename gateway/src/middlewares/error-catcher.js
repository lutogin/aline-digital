import HTTP_STATUS from 'http-status-codes';

const getErrorCode = (error) => error.status
    || error.code
    || HTTP_STATUS.INTERNAL_SERVER_ERROR;

const getCommonErrorResponseObject = (error) => ({
  code: getErrorCode(error),
  name: error.name,
  message: error.message,
  payload: error.payload,
  service: 'data-storage',
});


function errorCatcher(error, req, res, next) {
  const errorResponseObject = getCommonErrorResponseObject(error);
  const code = getErrorCode(error);

  res.status(code).json({ error: errorResponseObject });

  return next(error);
}

export default errorCatcher;
