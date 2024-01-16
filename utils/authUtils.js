const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secretKey = process.env.TOKEN_SECRET;

// Function to hash a password
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
};

// Function to compare a password with its hash
const comparePassword = async (password, hashedPassword) => {
    const isMatch = await bcrypt.compare(password, hashedPassword);
    return isMatch;
};

// Function to generate a JWT token
const generateToken = (payload) => {
    const tokenStr = jwt.sign(payload, secretKey, { expiresIn: "1h" });
    return tokenStr;
};

module.exports = { hashPassword, comparePassword, generateToken };
