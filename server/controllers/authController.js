const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const UserModel = require("../Models/user"); // Ensure correct import

// ✅ Signup Function
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const user = await UserModel.findOne({ email });
    if (user) {
      return res.status(409).json({
        message: "User already exists, please login.",
        success: false
      });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    const newUser = new UserModel({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({
      message: "Signup successful",
      success: true,
      user: { name, email }
    });

  } catch (err) {
    console.error("Signup Error:", err);
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};

// ✅ Login Function
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found, please sign up first.",
        success: false
      });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password",
        success: false
      });
    }
 //jwtTokken
 const jwtToken= jwt.sign(
    {email: user.email, _id: user._id },
    process.env.JWT_SECRET,
    { expireIn: '24h'}
)

res.status(201).json({
  message: "Signup successful",
  success: true,
  jwtToken,
  email,
  name: user.name
});

  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({
      message: "Internal server error",
      success: false
    });
  }
};

module.exports = { signup, login };
