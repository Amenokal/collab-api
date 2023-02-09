import dotenv from 'dotenv'
dotenv.config()

const Config = {
  DB_CONNECTION: process.env.DB_CONNECTION,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET
}

export default Config