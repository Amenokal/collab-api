import { User } from '../models/User.js'

export default class UserController {
  
  /**
   * Créer un utilisateur
   * @body User
   * @return User
   */
  static async create(req, res, next) {
    try {
      const user = await User.create(req.body)
      res.status(201).json(user)
    }
    catch (err) {
      next(err)
    }
  }

  /**
   * Récupérer tous les utilisateurs
   * @return Array[User]
   */
  static async getAll(req, res, next) {
    try {
      const users = await User.findAll()
      res.json(users)
    }
    catch (err) {
      next(err)
    }
  }

  /**
   * Récupérer un utilisateur particulier
   * @route userId (Int)
   * @return User
   */
  static async getOne(req, res, next) {
    try {
      const user = await User.findByPk(req.params.userId)
      res.json(user)
    }
    catch (err) {
      next(err)
    }
  }

  /**
   * Update un utilisateur
   * @route userId (Int)
   * @body User
   * @return User
   */
  static async update(req, res, next) {
    try {
      const user = await User.findByPk(req.params.userId)
      user.set(req.body)
      await user.save()
      res.json(user)
    }
    catch (err) {
      next(err)
    }
  }

  /**
   * Supprimer un utilisateur
   * @route userId (Int)
   * @return User
   */
  static async delete(req, res, next) {
    try {
      const user = await User.findByPk(req.params.userId)
      await user.destroy()
      res.status(200).json(user)
    }
    catch (err) {
      next(err)
    }
  }
}