const express = require("express");
const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");
const router = express.Router();
const jwtKey = "cv-builder";
require("dotenv").config();

router.post("/login", async (req, res) => {
  try {
    const user = await UserModel.findOne({ userName: req.body.userName });
    if (user && (await bcrypt.compare(req.body.password, user.password))) {
      const token = Jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1h",
      });
      res.status(200).send({ id: user._id, token: token });
    } else {
      res.status(400).send("Invalid username or password");
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/register", async (req, res) => {
  try {
    const { email, userName, password } = req.body;
    const existingUser = await UserModel.findOne({
      $or: [{ email }, { userName }],
    });
    if (existingUser) {
      if (existingUser.email === email) {
        return res.status(400).json({ message: "Email already exists" });
      }
      if (existingUser.userName === userName) {
        return res.status(400).json({ message: "Username already exists" });
      }
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      ...req.body,
      password: hashedPassword,
    });

    // rest of your code...
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/update", verifyToken, async (req, res) => {
  const { _id, base64, ...rest } = req.body;

  try {
    // Use findByIdAndUpdate for simplicity when querying by _id
    await UserModel.findByIdAndUpdate(_id, { image: base64, ...rest });

    // Retrieve the updated user
    const user = await UserModel.findById(_id);

    res.send({
      _id: user._id,
      // Use the existing token from the request
      token: req.token,
    });
  } catch (error) {
    // Handle different types of errors
    if (error.name === "ValidationError") {
      return res
        .status(422)
        .json({ error: "Validation error", details: error.message });
    }

    return res.status(500).json({ error: "Internal server error", raw: error });
  }
});

router.get("/getUser", verifyToken, async (req, res) => {
  try {
    const user = await UserModel.findOne({ _id: req.query.id });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (!bearerHeader) {
    return res.status(403).send({ message: "No token provided." });
  }

  const token = bearerHeader.split(" ")[1]; // Split at the space and take the second part

  Jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(500).send({ message: "Failed to authenticate token." });
    }

    // If everything is good, save the decoded info to request for use in other routes
    req.userId = decoded._id;
    next();
  });
}

module.exports = router;
