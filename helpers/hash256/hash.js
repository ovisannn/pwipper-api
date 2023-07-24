import bcrypt from 'bcryptjs'
import 'dotenv/config'

export function EncryptPassword(password){
  const salt = process.env.SECRETKEY
  const hash = bcrypt.hashSync(password, salt)
  return hash
}

export function ValidatePassword(password, hashedPassword){
  const result = bcrypt.compareSync(password, hashedPassword)
  return result
  // result should be true or false
}