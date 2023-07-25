import mongoose from "mongoose"
import { VideoSchema } from "../db/videoSchema.js"

export class VideoHandler{
    constructor(){
        this.model = mongoose.model("videos", VideoSchema)
    }

    async InsertVideo(insertData){
        const video = new this.model(insertData)

        try{
            await video.save()
        }catch(error){
            return error.message
        }
        const insertedVideo =  await this.model.findOne({title : insertData.title, username : insertData.username})
        // console.log(insertedVideo._id)
        return insertedVideo._id
    }
}