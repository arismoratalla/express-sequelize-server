import { sign } from 'jsonwebtoken'
import User from '../models/user'
import { validate } from '../utilities/validate'

export default class AuthenticationController {
  /**
   * Register a new user.
   * POST /api/auth/register
   */
  static async register (req, res) {
    try {
      // Validate POST data
      const data = await validate(
        // Data to validate
        req.body,
        // Rules
        {
          email: 'required|email',
          password: 'required|min:8|max:32',
          firstName: 'required',
          lastName: 'required',
          gender: 'required|in:male,female',
          age: 'number'
        },
        // Custom error messages
        {
          'password.min': 'Password must be at least 8 characters long.',
          'password.max': 'Password must not be more than 32 characters long.',
          'email.required': 'Email is required.',
          'email.email': 'Invalid email address.'
        }
      )

      // Register user
      const user = await User.create(data)

      if (!user) {
        throw Error('Unable to register user. Please try again.')
      }

      // Generate access token
      const accessToken = sign(
        {
          id: user.id,
          role: user.role,
          hash: user.password
        },
        process.env.SECRET
      )

      // Exclude hashed password from user object
      delete user.password

      return res.json({
        success: true,
        message: 'User registered.',
        data: {
          ...user.toJSON(),
          accessToken
        }
      })
    } catch (error) {
      return res.error(error)
    }
  }

  /**
   * Login user
   * POST /api/auth/login
   */
  static async login (req, res) {
    try {
      const data = await validate(req.body, {
        email: 'required|email',
        password: 'required|min:8|max:32'
      })

      // Login user
      const user = await User.login(data.email, data.password)

      // Exclude hashed password from user object
      delete user.password

      return res.json({
        success: true,
        message: 'User logged in.',
        data: user
      })
    } catch (error) {
      return res.error(error)
    }
  }
}
