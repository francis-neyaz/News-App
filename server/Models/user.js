// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true, // Fixed typo: require -> required
    unique: true,
  },
  password: { // Fixed typo: passward -> password
    type: String,
    required: true, // Fixed typo: require -> required
  },
});

export const User = mongoose.model('User', userSchema);
export default User;