import express from 'express'
import AuthController from '../controllers/AuthController.js'
import UserController from '../controllers/UserController.js'
import { User } from '../models/User.js'
import { verify } from '../services/jwt.service.js'

const router = express.Router()

router.post('/login', AuthController.login)

// auth middleware
router.use((req, res, next) => {
  try {
    verify(req.header("Authorization"))
  }
  catch(err) {
    return res.status(401).send({msg: 'Unauthorized'})
  }
})

router.get('/user/random', UserController.getRandom)
router.get('/user', UserController.getAll)
router.get('/user/:userId', UserController.getOne)
router.post('/logout', AuthController.logout)

// admin middleware
router.use(async (req, res, next) => {
  try {
    const token = verify(req.header("Authorization"))
    const user = await User.findOne({ where: { email: token.email }})
    return user.isAdmin
  }
  catch(err) {
    return res.status(401).send({msg: 'Unauthorized'})
  }
})

router.post('/user', UserController.create)
router.put('/user/:userId', UserController.update)
router.delete('/user/:userId', UserController.delete)

export default router