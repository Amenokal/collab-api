import { verifyToken } from '../services/jwt.service.js'

export const authMiddleware = (req, res, next) => {
  try {
    verifyToken(req.header("Authorization"))
    next()
  }
  catch(err) {
    console.log('Auth middleware error\n')
    console.log(err)
    return res.status(401).send({msg: 'Unauthorized'})
  }
}

export const adminMiddleware = async (req, res, next) => {
  try {
    const token = verifyToken(req.header("Authorization"))
    token.isAdmin && next()
  }
  catch(err) {
    console.log('Admin middleware error\n')
    console.log(err)
    return res.status(401).send({msg: 'Unauthorized'})
  }
}