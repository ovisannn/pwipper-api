import express from 'express'
import { createRequire } from 'module'
import { mongoodb } from './model/db/mongo.js' 
const require = createRequire(import.meta.url)
const config = require('./config.json')
// console.log(config)

const db = new mongoodb(config.database.port, config.database.name)
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes(app)


app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})