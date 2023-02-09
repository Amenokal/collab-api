import bodyParser from 'body-parser'
import express from 'express'
import router from './src/router/index.js'
import Config from './src/_Config.js'
import cors from 'cors'

// import { initDB } from './src/db/index.js'
// await initDB()

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

app.listen(Config.PORT)