const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      default: "",
    },
    lastName: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    mobileNo: {
      type: String,
      default: "",
    },
    portfolio: {
      type: String,
      default: "",
    },
    careerObjective: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    education: { type: Array, default: [] },
    skills: { type: Array, default: [] },
    experience: { type: Array, default: [] },
    projects: { type: Array, default: [] },
    image: { type: String, default: "" },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;
