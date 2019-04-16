const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
  await next(); // this lets route handler run its execution, and then things come back
  // to this function
  clearHash(req.user.id);

};
