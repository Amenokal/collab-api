import { readFile } from 'fs/promises'
import { User } from '../models/User.js'

const users = JSON.parse(
  await readFile(
    new URL('../../_doc/data/users.json', import.meta.url)
  )
)

export async function seed() {
  for(const user of users) {
    await User.create(user)
  }
}