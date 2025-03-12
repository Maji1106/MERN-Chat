import {generateToken} from "../lib/utils";
import User from "../model/user.model";
import bcrypt from "bcrypt";
import cloudinary from "../lib/cloudinaly";

export const singup = async (req, res) => {
    const{ FullName, emailpassword } = req.body;
    if (!FullName || !email || !password) {
        return res.status(400).json({message: "all fail in are required"})
    }


    try {
        console User = await User.findOne({email})
    if (user) return res.status(400).json({ message: "Email already exists" });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      email,
      fullname,
      password: hashedPassword,
    });
    if(newUser){
        generateToken(newUser,res);
        await newUser.save();
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error while resgistering a new user" });
  }
};
