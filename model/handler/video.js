import mongoose from "mongoose"
import { VideoSchema, Video } from "../db/videoSchema.js"
import { UserSchema } from "../db/userSchema.js"
import { ProductSchema, Product } from "../db/productSchema.js"

export class VideoHandler{
    constructor(){
        this.model = mongoose.model("videos", VideoSchema)
        this.modelUser = mongoose.model("users", UserSchema)
        this.modelProduct = mongoose.model("products", ProductSchema)
    }

    async InsertVideo(insertData){
        const video = new this.model(insertData)

        try{
            await video.save()
        }catch(error){
            return error.message
        }
        const insertedVideo =  await this.model.findOne({title : insertData.title, username : insertData.username})

        return insertedVideo._id
    }

    async InsertComment(insertComment){
        const data = insertComment
        const findVideo = await this.model.findById(data.videoId)
        if(findVideo === null){
            return null
        }
        const findUser = await this.modelUser.findOne({username : data.username})
        console.log(findUser)
        if(findUser === null){
            return null
        }
        const comment = {
            username : findUser.username,
            comment : data.comment,
            date : Date.now()
        }
        findVideo.comments.push(comment)
        try{
            await findVideo.save()
        }catch(error){
            return error.message
        }

        return "success"
    }

    async GetVideosThumbnails(){
        const resVideos = await this.model.find()
       
        var resThumbnails = []
        resVideos.map((video)=>{
            const videoObj = new Video(video)
            resThumbnails.push(videoObj.GetVideoThumbnail())
        })

        return resThumbnails
    }

    async GetVideoComments(videoId){
        const resVideo = await this.model.findById(videoId)
        const videoObj = new Video(resVideo)
        return videoObj.GetComments()
    }

    async GetVideoProducts(videoId){
        const resVideo = await this.model.findById(videoId)
        const videoObj = new Video(resVideo)
        const productIds = videoObj.GetProducts()
        var products = []

        for (let i = 0; i < productIds.length; i++) {
            const product = await this.modelProduct.findById(productIds[i].prodId.toString())
            const prodObj = new Product(product)
            products.push(prodObj.GetProductsForEachVideo())
          }

        return products
    }

    async InsertProductIntoVideo(insertData){
        const resVideo = await this.model.findById(insertData.videoId)
        // if null
        const resProduct = await this.model.findById(insertData.productId)
        // if null
        const insert = {
            prodId : insertData.productId
        }
        resVideo.products.push(insert)
        try {
            await resVideo.save()
        }catch(error){
            return error.message
        }
        return "success"
    }
}