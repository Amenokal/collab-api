import bcrypt from 'bcrypt'

/**
 * Hacher un mot de passe
 */
export function hash(password) {
  return bcrypt.hashSync(password, 10)
}

/**
 * Vérifier si un mot de passe correspond à un hash
 */
export function check(password, hash) {
  return bcrypt.compareSync(password, hash)
}