import { User } from '../models/User.js'

export default class UserController {

  static async create(req, res, next) {
    try {
      const user = await User.create(req.body)
      res.status(201).json(user)
    }
    catch (err) {
      res.status(500).json({msg: "Server Error", stack: err})
    }
  }

  static async getAll(req, res, next) {
    try {
      const users = await User.findAll()
      res.json(users)
    }
    catch (err) {
      res.status(500).json({msg: "Server Error", stack: err})
    }
  }

  static async getOne(req, res, next) {
    try {
      const user = await User.findByPk(req.params.userId)
      res.json(user)
    }
    catch (err) {
      res.status(500).json({msg: "Server Error", stack: err})
    }
  }


  static async getRandom(req, res, next) {
    try {
      const users = await User.findAll()

      const randomIndex = Math.floor(Math.random() * users.length)
        
      res.json(users.at(randomIndex))
    }
    catch (err) {
      res.status(500).json({msg: "Server Error", stack: err})
    }
  }

  static async update(req, res, next) {
    try {
      const user = await User.findByPk(req.params.userId)
      user.set(req.body)
      await user.save()
      res.json(user)
    }
    catch (err) {
      res.status(500).json({msg: "Server Error", stack: err})
    }
  }

  static async delete(req, res, next) {
    try {
      const user = await User.findByPk(req.params.userId)
      await user.destroy()
      const users = await User.findAll()
      res.status(200).json(users)
    }
    catch (err) {
      res.status(500).json({msg: "Server Error", stack: err})
    }
  }
}