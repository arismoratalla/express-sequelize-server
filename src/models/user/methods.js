import { sign } from 'jsonwebtoken'
import password from '../../utilities/password'

class UserMethods {
  /**
   * Login user
   * @param {String} email User email
   * @param {String} password User password
   */
  static async login (email, rawPassword) {
    // Find user by email
    const user = await this.findOne({ email }).select('+password').populate('profile')

    // Check if user exist
    if (!user) {
      throw new Error('Email does not exist.')
    }

    // Check if password is incorrect
    if (rawPassword && user.password !== password.hash(rawPassword)) {
      throw new Error('Incorrect password.')
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

    return {
      ...user.toJSON(),
      accessToken
    }
  }
}

export default UserMethods
