import bodyParser from 'body-parser'
import express from 'express'
import router from './src/router/index.js'
import Config from './config.js'
import cors from 'cors'

import { init, reset } from './src/db/index.js'
// await reset()
await init()

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

app.listen(Config.PORT)