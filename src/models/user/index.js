import { model } from 'mongoose'
import password from '../../utilities/password'
import UserMethods from './methods'
import userSchema from './schema'

// Pre-save middleware: Hash password if modified
userSchema.post('save', function (next) {
  if (this.isModified('password')) {
    this.password = password.hash(this.password)
  }

  return next()
})

userSchema.loadClass(UserMethods)

const User = model('User', userSchema, 'voters')

export default User
