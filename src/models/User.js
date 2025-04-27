// models/User.js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: String,
  password: String, // hashed password
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
