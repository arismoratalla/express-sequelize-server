import { Router } from 'express'
import AuthenticationController from '../controllers/authentication'

export default function authenticationRoute () {
  const route = Router()

  route.post('/register', AuthenticationController.register)
  route.post('/login', AuthenticationController.login)

  return route
}
