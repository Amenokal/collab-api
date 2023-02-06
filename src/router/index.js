import express from 'express'
import UserController from '../controllers/UserController.js'

const router = express.Router()

router.post('/user', UserController.create)
router.get('/user/random', UserController.getRandom)
router.get('/user', UserController.getAll)
router.get('/user/:userId', UserController.getOne)
router.put('/user/:userId', UserController.update)
router.delete('/user/:userId', UserController.delete)

export default router