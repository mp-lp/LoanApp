import jwt from 'jsonwebtoken';

export const generateAccessToken = (user: any) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.ACCESS_TOKEN_SECRET!,
    { expiresIn: '15m' }
  );
};

export const generateRefreshToken = (user: any) => {
  return jwt.sign(
    { id: user._id },
    process.env.REFRESH_TOKEN_SECRET!,
    { expiresIn: '7d' }
  );
};