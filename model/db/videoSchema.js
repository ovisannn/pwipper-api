import mongoose from "mongoose";

export const VideoSchema = mongoose.Schema({
    title : String,
    videoUrl : {
        type : String,
        require : true
    },
    thumbnailUrl : String,
    description : String,
    username : {
        type : String,
        require : true
    },
    comments : [{
        title : mongoose.Schema.ObjectId,
        comment : String 
    }],
    createdAt : Date,
    updatedAt : Date
})

export function VideoModel(){
    return mongoose.model('videos', VideoSchema)
}

export class Video{
    constructor(data){
        this._id = data._id?  ObjectId(data._id) : null
        this.title = data.title
        this.videoUrl = data.videoUrl
        this.thumbnailUrl = data.thumbnailUrl
        this.description = data.description
        this.username = data.username
        this.comments = data.comment? data.comment : []
        this.createdAt = null? new Date() : data.createdAt
        this.updatedAt = null? new Date() : data.updatedAt
    }

    GetVideo(){
        return this
    }
}