import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = User.findOne(email);
    if (!existingUser)
      return res.status(404).json({ message: "User not found" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invaild Credentials" });

    const token = await jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );
    return res.status(200).json({ result: existingUser, token });
  } catch (err) {
    console.log("Something bad happenin signin");
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const existingUser = User.findOne(email);
    if (existingUser)
      return res.status(400).json({ message: "User already Exits" });

    if (password !== confirmPassword)
      return res.status(400).json({ message: "Paswword is not Correct" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${(firstName, lastName)}`,
    });

    const token = await jwt.sign(
      { email: result.email, id: result._id },
      "test",
      { expiresIn: "1h" }
    );
    return res.status(200).json({ result, token });
  } catch (err) {
    console.log("Something bad happenin signup");
  }
};
