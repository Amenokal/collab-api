import { Sequelize } from 'sequelize'
import { seed } from './seed.js'
import { User } from '../models/User.js'
import Config from '../../config.js'

export const sequelize = new Sequelize(Config.DB_CONNECTION)

export async function init() {
  await sequelize.sync()
  const users = await User.findAll()
  if(!users.length) {
    await seed()
  }
}
