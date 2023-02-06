import express from 'express'
import AuthController from '../controllers/AuthController.js'
import UserController from '../controllers/UserController.js'
import { verify } from '../services/jwt.service.js'

const router = express.Router()

router.post('/login', AuthController.login)

// auth middleware
router.use((res, req, next) => {
  if(!req.header("Authorization"))
    return res.status(401).send({msg: 'Unauthorized'})

  next()
})

router.get('/user/random', UserController.getRandom)
router.get('/user', UserController.getAll)
router.get('/user/:userId', UserController.getOne)
router.post('/logout', AuthController.logout)

// admin middleware
router.use((res, req, next) => {
  const token = verify(req.header("Authorization"))
  if(!token.isAdmin)
    return res.status(401).send({msg: 'Unauthorized'})

  next()
})

router.post('/user', UserController.create)
router.put('/user/:userId', UserController.update)
router.delete('/user/:userId', UserController.delete)

export default router