import mongoose from "mongoose"
import { VideoSchema, Video } from "../db/videoSchema.js"
import { UserSchema } from "../db/userSchema.js"

export class VideoHandler{
    constructor(){
        this.model = mongoose.model("videos", VideoSchema)
        this.modelUser = mongoose.model("users", UserSchema)
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
        // find video
        const data = insertComment
        const findVideo = await this.model.findById(data.videoId)
        if(findVideo === null){
            return null
        }
        // find username
        const findUser = await this.modelUser.findOne({username : data.username})
        console.log(findUser)
        if(findUser === null){
            return null
        }

        // insert comment
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
        // console.log(resVideos)
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
}