import express from 'express'
import AuthController from '../controllers/AuthController.js'
import MessageController from '../controllers/MessageController.js'
import UserController from '../controllers/UserController.js'
import { adminMiddleware, authMiddleware } from './middlewares.js'

const router = express.Router()

router.post('/login', AuthController.login)

// auth middleware
router.use(authMiddleware)

router.get('/user', UserController.getAll)
router.get('/user/:userId', UserController.getOne)
router.post('/logout', AuthController.logout)

router.get('/message', MessageController.get)
router.post('/message', MessageController.create)
router.delete('/message/:msgId', MessageController.delete)

// admin middleware
router.use(adminMiddleware)

router.post('/user', UserController.create)
router.put('/user/:userId', UserController.update)
router.delete('/user/:userId', UserController.delete)

export default router