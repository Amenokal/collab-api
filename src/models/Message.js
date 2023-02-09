import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from "../db/index.js"

export const Message = sequelize.define("message", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  senderId: {
    type: Sequelize.INTEGER
  },
  receiverId: {
    type: Sequelize.INTEGER
  },
  content: {
    type: DataTypes.TEXT
  }
})