import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    const error = new Error('Token não fornecido.');
    (error as any).status = 401;
    return next(error);
  }

  jwt.verify(token, process.env.JWT_SECRET!, (err, decoded) => {
    if (err) {
      const error = new Error('Token inválido.');
      (error as any).status = 403;
      return next(error);
    }
    next();
  });
};

export default authenticate;