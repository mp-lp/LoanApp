import mongoose from 'mongoose';

export enum Roles {
  VERIFIER = 'Verifier',
  ADMIN = 'Admin',
  USER = 'user' // if you want to accept lowercase
}


const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: Object.values(Roles),
    default: Roles.VERIFIER
  }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
export default User;