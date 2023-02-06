import bodyParser from 'body-parser'
import express from 'express'
import router from './src/router/index.js'
import { init } from './src/db/index.js'

await init()
const PORT = 3000
const BASE_URL = "http://localhost:" + PORT

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${BASE_URL}`)
})