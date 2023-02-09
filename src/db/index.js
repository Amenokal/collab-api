import { Sequelize } from 'sequelize'
import Config from '../_Config.js'
import { readFile } from 'fs/promises'
import { User } from '../models/User.js'

export const sequelize = new Sequelize(Config.DB_CONNECTION)

/**
 * Vérifie si la DB a des données.
 * Si aucun utilisateur n'est trouvé, seed avec les données de la consigne
 */
async function init() {
  await sequelize.sync()

  const users = await User.findAll()

  if(!users.length) {
    const users = JSON.parse(
      await readFile(
        new URL('../../consigne/data/users.json', import.meta.url)
      )
    )
  
    for(const user of users) {
      await User.create(user)
    }
  }
}

export async function initDB(req, res, next) {
  /**
   * Décommenter la ligne suivante pour réinitialiser la db
   */ 
  // await sequelize.sync({force: true})
  
  await init()
}