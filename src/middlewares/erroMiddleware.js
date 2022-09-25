const errorResponse = (error, req, res, _next) => {
  const status = error.status || 500;
  const message = error.message || 'unexpected error';
  return res.status(status).json({ message });
  };

  module.exports = errorResponse;
