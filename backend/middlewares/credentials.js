const allowedOrigins = require('./../utils/allowedOrigins');



const credentials = (req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', origin); // ✅ MUST include this!
  }
  next();
};

module.exports = credentials;
