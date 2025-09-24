import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
console.log(process.env.JWT_SECRET);
const secret = process.env.JWT_SECRET ;
if (!secret) { 
  throw new Error('JWT_SECRET no está definido en las variables de entorno');
}
const TOKEN_ISSUER = process.env.JWT_ISSUER || '2025-DesarrolloSeguro';
const generateToken = (userId: string) => {
  return jwt.sign(
    { id: userId }, 
    secret, 
    { expiresIn: '1h', issuer: TOKEN_ISSUER, algorithm: 'HS256' }
  );
};

const verifyToken = (token: string) => {
  return jwt.verify(token, secret, {algorithms: ['HS256'], issuer: TOKEN_ISSUER});
};

export default {
  generateToken,
  verifyToken
}