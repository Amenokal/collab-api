import { verifyToken } from '../services/jwt.service.js'

/**
 * Vérifie si la requête provient d'un utilisateur connecté
 * en fonction du JWT fourni
 */
export const authMiddleware = (req, res, next) => {
  try {
    verifyToken(req.header("Authorization"))
    next()
  }
  catch(err) {
    console.log('Auth middleware error\n')
    next(err)
  }
}

/**
 * Vérifie si la requête provient d'un admin
 * en fonction du JWT fourni
 */
export const adminMiddleware = async (req, res, next) => {
  try {
    const token = verifyToken(req.header("Authorization"))
    token.isAdmin && next()
  }
  catch(err) {
    console.log('Admin middleware error\n')
    next(err)
  }
}

/**
 * Permet d'attraper toutes les erreurs imprévues
 */
export const errorHandlerMiddleware = async (err, req, res, next) => {
  if(err) {
    console.log('------------ Error Handler Report ------------')
    console.log(err)
    return res.status(err.status || 500).json(err)
  }
}