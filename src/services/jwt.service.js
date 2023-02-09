import jwt from 'jsonwebtoken'
import Config from '../_Config.js'

/**
 * Crée un JWT lors du login ou du token refresh
 * Valide pendant 24h
 */
export function createToken(data) {
  return jwt.sign(
    data,
    Config.JWT_SECRET,
    { expiresIn: '1d' }
  )
}

/**
 * Vérifie le JWT d'une requête
 * Si non valide :
 * - Soit il a expiré et on envoie au front l'ordre de refresh ( _refresh = true) 
 * - Soit il n'est pas valide et on envoie au front l'ordre de logout ( _logout = true )
 */
export function verifyToken(token) {
  return jwt.verify(token, Config.JWT_SECRET, (err, decoded) => {
    if(err) {
      const jwtError = new Error('JWT ERROR')
      jwtError.status = 401
      jwtError.jwtError = {
        name: err.name,
        message: err.message
      }
  
      if(err.name === "TokenExpiredError") {
        jwtError._refresh = true
      }
      else {
        jwtError._logout = true
      }
  
      throw jwtError
    }

    return decoded
  })
}