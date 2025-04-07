import { Request, Response, NextFunction, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { JwtPayload } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      user?: string | JwtPayload;
    }
  }
}
export const authenticate: RequestHandler = (req, res, next) => {
  // console.log("a");
  const authHeader = req.headers.authorization;
  const token = authHeader?.split(' ')[1];
  // console.log(token);
  if (!token) {
    console.log("token not provided")
    res.status(401).json({ message: 'No token provided' });
    return; // ensure it doesn't continue
  }


  try {
    console.log("b")
    // const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!);
    // req.user = decoded;
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as JwtPayload & { id: string, role: string };
req.user = decoded;

    next();
  } catch {
    res.status(403).json({ message: 'Invalid token' });
  }
};


export const authorize = (...roles: string[]): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    console.log("authorize middleware hit");

    const user = req.user as JwtPayload & { role?: string };

    console.log("User role:", user?.role);
    console.log("Allowed roles:", roles);

    if (!user?.role || !roles.includes(user.role)) {
      res.status(403).json({ message: 'Forbidden: Insufficient role' });
      return;
    }

    next();
  };
};
