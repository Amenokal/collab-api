import jwt from 'jsonwebtoken'
import Config from '../../config.js'

export function createToken(data) {
  return jwt.sign(
    data,
    Config.JWT_SECRET,
    { expiresIn: '1h' }
  )
}

export function verifyToken(token) {
  return jwt.verify(token, Config.JWT_SECRET)
}