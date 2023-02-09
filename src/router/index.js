import express from 'express'
import AuthController from '../controllers/AuthController.js'
import MessageController from '../controllers/MessageController.js'
import UserController from '../controllers/UserController.js'
import { adminMiddleware, authMiddleware, errorHandlerMiddleware } from './middlewares.js'

const router = express.Router()

router.post('/login', AuthController.login)
router.post('/refresh', AuthController.refresh)
router.post('/logout', AuthController.logout)

/**
 * ------------- Auth middleware -------------
 * ~> Routes autorisées uniquement si utilisateur connecté
 */
router.use(authMiddleware)

router.get('/user', UserController.getAll)
router.get('/user/:userId', UserController.getOne)

router.get('/message', MessageController.get)
router.post('/message', MessageController.create)
router.delete('/message/:msgId', MessageController.delete)

/**
 * ------------- Admin middleware -------------
 * ~> Routes autorisée uniquement si utilisateur est admin
 */
router.use(adminMiddleware)

router.post('/user', UserController.create)
router.put('/user/:userId', UserController.update)
router.delete('/user/:userId', UserController.delete)

/**
 * ------------- Error handler middleware -------------
 * ~> Attrape les erreurs imprévues
 */
router.use(errorHandlerMiddleware)

export default router