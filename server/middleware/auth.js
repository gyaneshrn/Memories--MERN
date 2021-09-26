import User from "../models/User.js";
import jwt from "jsonwebtoken";

export default auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const iscustomUser = token.length < 500;
    let decodeData = null;
    if (iscustomUser) {
      decodeData = jwt.verify(token, "test");
      req.userId = decodeData?.id;
    } else {
      decodeData = jwt.decode(token);
      req.userId = decodeData?.sub;
    }
    next();
  } catch (err) {
    console.log("Found Error in Authorization");
  }
};
