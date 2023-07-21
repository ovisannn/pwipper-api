import express from 'express'
import mongoose from 'mongoose';
// import config from './config.json' assert {type:'json'}
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const config = require('./config.json')
// console.log(config)
const app = express()

mongoose.connect(config.database.url)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes(app)


app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})