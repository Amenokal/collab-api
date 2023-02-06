import express from 'express'
import AuthController from '../controllers/AuthController.js'
import UserController from '../controllers/UserController.js'

const router = express.Router()

router.post('/login', AuthController.login)
router.get('/user/random', UserController.getRandom)
router.get('/user', UserController.getAll)
router.get('/user/:userId', UserController.getOne)

// auth middleware
router.use((res, req, next) => {
  if(!req.header(Authorization))
    return res.status(401).send({msg: 'Unauthorized'})

  next()
})

router.post('/logout', AuthController.logout)
router.post('/user', UserController.create)
router.put('/user/:userId', UserController.update)
router.delete('/user/:userId', UserController.delete)

export default router