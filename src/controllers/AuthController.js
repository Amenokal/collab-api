import { User } from '../models/User.js'
import { check } from '../services/auth.service.js'
import { create } from '../services/jwt.service.js'

export default class AuthController {
  static async login(req, res, next) {
    try {
      const user = await User.findOne({
        where: { email: req.body.email }
      })

      if(!user)
        return res.status(404).json({msg: "Identifiants invalides"})
      if(!check(req.body.password, user.password))
        return res.status(404).json({msg: "Identifiants invalides"})

      const token = create(req.body, user.isAdmin)

      res.json(token)
    }
    catch (err) {
      res.status(500).json({msg: "Server Error", stack: err})
    }
  }

  static async logout(req, res, next) {
    try {
      res.status(200).send()
    }
    catch (err) {
      res.status(500).json({msg: "Server Error", stack: err})
    }
  }
}