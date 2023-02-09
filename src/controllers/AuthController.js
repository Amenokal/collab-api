import { User } from '../models/User.js'
import { check } from '../services/auth.service.js'
import { createToken } from '../services/jwt.service.js'

export default class AuthController {

  /**
   * Se connecter
   * @body Credentials
   * @return JWT
   */
  static async login(req, res, next) {
    try {
      const user = await User.findOne({
        where: { email: req.body.email }
      })

      if(!user || !check(req.body.password, user.password)) {
        throw new Error("Identifiants invalides")
      }

      const token = createToken({
        userId: user.id,
        firstname: user.firstname,
        isAdmin: user.isAdmin
      })
  
      res.json(token)
    }
    catch (err) {
      next(err)
    }

  }

  /**
   * Refresh un JWT expiré par un nouveau
   * @body userId (Integer)
   * @return JWT
   */
  static async refresh(req, res, next) {
    try{
      const userId = req.body.userId
      const user = await User.findByPk(userId)
      
      const refreshToken = createToken({
        userId: user.id,
        firstname: user.firstname,
        isAdmin: user.isAdmin
      })

      res.json(refreshToken)
    }
    catch (err) {
      next(err)
    }
  }

  /**
   * Se déconnecter
   * @return 200
   */
  static async logout(req, res, next) {
    try {
      res.status(200).send()
    }
    catch (err) {
      next(err)
    }
  }
}