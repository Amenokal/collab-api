import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from "../db/index.js"

export const Message = sequelize.define("message", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  receiverId: {
    type: Sequelize.INTEGER
  },
  senderName: {
    type: DataTypes.TEXT
  },
  senderPhoto: {
    type: DataTypes.TEXT
  },
  content: {
    type: DataTypes.TEXT
  }
})