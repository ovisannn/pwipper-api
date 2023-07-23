import express from 'express'
import { mongoodb } from './model/db/mongo.js' 
import 'dotenv/config'

const db = new mongoodb(process.env.DB_URI, process.env.DB_NAME)
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes(app)


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})