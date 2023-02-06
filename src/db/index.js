import { Sequelize } from 'sequelize'
import { seed } from './seed.js'
import { User } from '../models/User.js'

export const sequelize = new Sequelize('mysql://root:@localhost:3306/collabs')

export async function init() {
  const users = await User.findAll()
  if(!users.length) {
    await seed()
  }
}
