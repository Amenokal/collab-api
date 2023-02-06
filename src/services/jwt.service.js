import jwt from 'jsonwebtoken'
import Config from '../../config.js'

export function create(credentials, isAdmin) {
  return jwt.sign(
    { credentials, isAdmin },
    Config.JWT_SECRET,
    { expiresIn: '1h'}
  )
}

export function verify(token) {
  return jwt.verify(token, Config.JWT_SECRET)
}