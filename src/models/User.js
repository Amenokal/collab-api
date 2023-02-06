import { Sequelize, DataTypes } from 'sequelize'
import { sequelize } from "../db/index.js"

export const User = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  gender: {
    type: DataTypes.TEXT
  },
  firstname: {
    type: DataTypes.TEXT
  },
  lastname: {
    type: DataTypes.TEXT
  },
  email: {
    type: DataTypes.TEXT
  },
  password: {
    type: DataTypes.TEXT
  },
  phone: {
    type: DataTypes.TEXT
  },
  birthdate: {
    type: DataTypes.DATE
  },
  city: {
    type: DataTypes.TEXT
  },
  country: {
    type: DataTypes.TEXT
  },
  photo: {
    type: DataTypes.TEXT
  },
  category: {
    type: DataTypes.TEXT
  },
  isAdmin: {
    type: DataTypes.BOOLEAN
  },
})