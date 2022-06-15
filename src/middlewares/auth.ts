import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken'; 

import AuthConfig from '../config/AuthConfig'; // Para pegar a secret
import AppError from '../errors/AppError';

interface ITokenPayload {
  id: number;
  exp: number;
  sub: string;
}

export default function authSession(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError('No token provided !', 401);

  const parts = authHeader.split(' ');

  if (!(parts.length === 2)) throw new AppError('Invalid token !', 401);

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme))
    throw new AppError('Token bad formated !', 401);

  try {
    const decoded = verify(token, AuthConfig.jwt.secret); 

    // const { sub } = decoded as ITokenPayload;

    const { id } = decoded as ITokenPayload;
    
    console.log(id);
    console.log(decoded);

    // request.user = {
    //   id: id,
    // };

    return next();
  } catch (error) {
    throw new AppError('Invalid JWT token', 401);
  }
}