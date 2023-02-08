import { Message } from '../models/Message.js'
import { User } from '../models/User.js'
import { verifyToken } from '../services/jwt.service.js'

export default class MessageController {

  static async get(req, res, next) {
    try {
      const { userId } = verifyToken(req.header("Authorization"))
      const messages = await Message.findAll({
        where: { receiverId: userId }
      })
      return res.json(messages)
    }
    catch(err) {
      return res.status(500).json({msg: "Server Error", stack: err})
    }
  }

  static async create(req, res, next) {
    try {
      const { userId } = verifyToken(req.header("Authorization"))
      const sender = await User.findByPk(userId)

      const message = await Message.create({
        receiverId: req.body.receiverId,
        senderName: sender.firstname,
        senderPhoto: sender.photo,
        content: req.body.content
      })

      return res.status(201).json(message)
    }
    catch (err) {
      return res.status(500).json({msg: "Server Error", stack: err})
    }
  }

  static async delete(req, res, next) {
    try {
      const msg = await Message.findByPk(req.params.msgId)
      await msg.destroy()
      return res.status(200).json(msg)
    }
    catch (err) {
      return res.status(500).json({msg: "Server Error", stack: err})
    }
  }
}