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
    products : [{
        id : mongoose.Schema.ObjectId
    }],
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
        this.products = data.products? data.products : []
        this.comments = data.comment? data.comment : []
        this.createdAt = data.createdAt? data.createdAt : new Date()
        this.updatedAt = data.updatedAt? data.updatedAt : new Date()
    }

    GetVideo(){
        return this
    }
}