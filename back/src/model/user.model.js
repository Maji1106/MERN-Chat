import mongoose from "mongoose";
import { schema } from "mongoose";

const userSchema = new schema({
  email: { type: String, required: true, unique: true },
  fullName: { type: String, required: true },
  password: { type: String, required: true },
  profilePic: { type: String, required: true },
  friends: { type: String, required: true },
  friendsRequests: { type: schema.types.objectid, ref: "user" },
});

const UserModel = mongoose.model("User", userSchema);
model.exports = UserModel;
