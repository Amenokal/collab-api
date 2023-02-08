import { readFile } from 'fs/promises'
import { User } from '../models/User.js'

export async function seed() {
  const users = JSON.parse(
    await readFile(
      new URL('../../_doc/data/users.json', import.meta.url)
    )
  )

  for(const user of users) {
    await User.create(user)
  }
}