import bcrypt from 'bcrypt'

export function hash(password) {
  return bcrypt.hashSync(password, 10)
}

export function check(password, hash) {
  return bcrypt.compareSync(password, hash)
}