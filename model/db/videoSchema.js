import mongoose from "mongoose";

const VideoSchema = mongoose.Schema({
    title : String,
    videoUrl : String,
    thumbnailUrl : String,
    description : String,
    username : mongoose.Schema.ObjectId,
    comments : [{
        title : mongoose.Schema.ObjectId,
        comment : String 
    }],
    createdAt : Date,
    updatedAt : Date
})

export function UserModel(){
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