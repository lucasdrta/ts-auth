import { Router } from 'express'

const routes = Router()

import authMiddleware from './app/middlewares/authMiddleware'

import UserController from './app/controllers/UserController'
import AuthController from './app/controllers/AuthController'

routes.post('/user', UserController.store)
routes.post('/auth', AuthController.authenticate)
routes.get('/user', authMiddleware , UserController.index)

export default routes