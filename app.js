import express from 'express'
import { mongoodb } from './model/db/mongo.js' 
import 'dotenv/config'
import { Router } from './routes/routes.js'
import { UserHandler } from './model/handler/user.js'
import { UserUsecase } from './business/user.js'
import { UserController } from './controllers/userController.js'
import mongoose from 'mongoose'
import { VideoUsecase } from './business/video.js'
import { VideoController } from './controllers/videoController.js'
import { VideoHandler } from './model/handler/video.js'

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = new mongoodb(process.env.DB_URI, process.env.DB_NAME)
db.init()

//user
const userHandler = new UserHandler()
const userUsecase = new UserUsecase(userHandler)
const userController = new UserController(userUsecase)

//video
const videoHandler = new VideoHandler()
const videoUsecase = new VideoUsecase(videoHandler)
const videoController = new VideoController(videoUsecase)

const controllerList = {
    user : userController,
    video : videoController
}

const router = new Router(app, controllerList)
router.routes()

app.listen(process.env.PORT, () => {
  console.log(`Pwipper app listening on port ${process.env.PORT}`)
})