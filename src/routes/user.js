import { Router } from 'express'
import UserController from '../controllers/authentication'

export default function userRoutes (server) {
  const route = Router()

  route.post('/register', UserController.register)
  server.use('/api/user', route)
}
