import { Schema, SchemaTypes } from 'mongoose'

const userSchema = new Schema(
  // Schema Definition
  {
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
      validate: {
        validator: v => /^\S+@\S+\.\S+$/.test(v),
        message: () => 'Invalid email address.'
      }
    },
    password: {
      type: String,
      required: true,
      select: false
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      enum: ['male', 'female']
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    address: {
      line1: {
        type: String
      },
      line2: {
        type: String
      }
    },
    favoriteColors: [
      {
        colorName: {
          type: String
        }
      }
    ],
    profile: {
      type: SchemaTypes.ObjectId,
      ref: 'Profile'
    },
    friends: [
      {
        type: SchemaTypes.ObjectId,
        ref: 'Profile'
      }
    ]
  },
  // Schema Options
  {
    timestamps: true,
    versionKey: false
  }
)

export default userSchema
