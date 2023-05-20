import { model } from 'mongoose'
import ProfileMethod from './methods'
import profileSchema from './schema'

profileSchema.loadClass(ProfileMethod)

const Profile = model('Profile', profileSchema)

export default Profile
