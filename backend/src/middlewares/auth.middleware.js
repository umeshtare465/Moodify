const blackListModel = require("../models/blackList.model");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
async function authUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "token is not provided",
    });
  }
  const istokenBlackListed = await blackListModel.findOne({ token });

  if (istokenBlackListed) {
    return res.status(401).json({
      message: "token is Invalid",
    });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "invalid token",
    });
  }
}
module.exports = { authUser };
