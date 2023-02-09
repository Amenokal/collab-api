import { Message } from '../models/Message.js'
import { User } from '../models/User.js'
import { verifyToken } from '../services/jwt.service.js'

export default class MessageController {

  /**
   * Récupérer les messages d'un utilisateur connecté
   * @headers "Authorization": JWT
   * @return Array[Message]
   */
  static async get(req, res, next) {
    try {
      const token = verifyToken(req.header("Authorization"))
      const messages = await Message.findAll({
        where: { receiverId: token.userId }
      })
      res.json(messages)
    }
    catch(err) {
      next(err)
    }
  }

  /**
   * Envoyer un message
   * @headers "Authorization": JWT
   * @body receiverId (Integer)
   * @return Array[Message]
   */
  static async create(req, res, next) {
    try {
      const { userId } = verifyToken(req.header("Authorization"))
      const sender = await User.findByPk(userId)

      const message = await Message.create({
        senderId: sender.id,
        receiverId: req.body.receiverId,
        content: req.body.content
      })

      res.status(201).json(message)
    }
    catch (err) {
      next(err)
    }
  }

  /**
   * Supprimer un message
   * @route msgId (Integer)
   * @return Message
   */
  static async delete(req, res, next) {
    try {
      const msg = await Message.findByPk(req.params.msgId)
      await msg.destroy()
      res.json(msg)
    }
    catch (err) {
      next(err)
    }
  }
}