import express from 'express'
import { mongoodb } from './model/db/mongo.js' 
import 'dotenv/config'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { Router } from './routes/routes.js'
import { CostumJwt } from './routes/middleware/auth.js'
import { logger } from './helpers/logger/logger.js'

import { UserHandler } from './model/handler/user.js'
import { UserUsecase } from './business/user.js'
import { UserController } from './controllers/userController.js'

import { VideoUsecase } from './business/video.js'
import { VideoController } from './controllers/videoController.js'
import { VideoHandler } from './model/handler/video.js'

import { ProductHandler } from './model/handler/product.js'
import { ProductUsecase } from './business/product.js'
import { ProductController } from './controllers/productController.js'

import morgan from 'morgan'

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())
app.use(morgan('combined'))
app.use(
  cors({
    origin : "*"
  })
  )
  
  const db = new mongoodb()
  db.init()
  
  //user
  const userHandler = new UserHandler()
  const userUsecase = new UserUsecase(userHandler)
  const userController = new UserController(userUsecase)
  
  //video
  const videoHandler = new VideoHandler()
  const videoUsecase = new VideoUsecase(videoHandler)
  const videoController = new VideoController(videoUsecase)
  
  //product
  const productHandler = new ProductHandler()
  const productUsecase = new ProductUsecase(productHandler)
  const productController = new ProductController(productUsecase)

  const authHandler = new CostumJwt()
  
  const controllerList = {
    user : userController,
    video : videoController,
    product : productController,
    authHandler : authHandler
}

const router = new Router(app, controllerList)
router.routes()

app.listen(process.env.PORT, () => {
  logger.info(`Pwipper running on port ${process.env.PORT}`)
})