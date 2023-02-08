import { User } from '../models/User.js'

export default class UserController {
  static async create(req, res, next) {
    try {
      const user = await User.create(req.body)
      return res.status(201).json(user)
    }
    catch (err) {
      return res.status(500).json({msg: "Server Error", stack: err})
    }
  }

  static async getAll(req, res, next) {
    try {
      const users = await User.findAll()
      return res.json(users)
    }
    catch (err) {
      return res.status(500).json({msg: "Server Error", stack: err})
    }
  }

  static async getOne(req, res, next) {
    try {
      const user = await User.findByPk(req.params.userId)
      return res.json(user)
    }
    catch (err) {
      return res.status(500).json({msg: "Server Error", stack: err})
    }
  }

  static async update(req, res, next) {
    try {
      const user = await User.findByPk(req.params.userId)
      user.set(req.body)
      await user.save()
      return res.json(user)
    }
    catch (err) {
      return res.status(500).json({msg: "Server Error", stack: err})
    }
  }

  static async delete(req, res, next) {
    try {
      const user = await User.findByPk(req.params.userId)
      await user.destroy()
      return res.status(200).json(user)
    }
    catch (err) {
      return res.status(500).json({msg: "Server Error", stack: err})
    }
  }
}