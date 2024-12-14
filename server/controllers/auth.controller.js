import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const signup = async (req, res) => {
  try {
    const { name, username, email, password } = req.body;
    // Data Validation
    if (!name || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password length must be at least 6 characters" });
    }

    // Hashing Password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create the user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      username,
    });

    await user.save();

    // Generate jwt token and set cookie
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });
    res.cookie("jwt-careerhive", token, {
      httpOnly: true, // prevent XSS attacks
      maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days
      sameSite: "strict", // prevent CSRF attacks
      secure: process.env.NODE_ENV === "production", // prevent man-in-the-middle attacks
    });
    return res.status(201).json({ message: "User created successfully" });
    // TODO: send welcome email
  } catch (error) {
    console.log("Error in signup:", error.message);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const login = () => {};

export const logout = () => {};
