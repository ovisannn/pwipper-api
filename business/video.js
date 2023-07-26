import { ValidateId } from "../helpers/validateObjectIdMongoose/validate.js"
import newError from "../helpers/newErrorsMessage/newError.js"

export class VideoUsecase{
    constructor(videoHandler){
        this.handler = videoHandler
    }

    async InsertVideo(videoData){
        const insertData = videoData
        const result = await this.handler.InsertVideo(insertData)
        // console.log(result)
        return result
    }

    //mvp
    async InsertComment(commentData){
        const insertComment = commentData
        const validate = ValidateId(commentData.videoId)
        if(!validate){
            return {status : 400, data: newError.InvalidIdFormat.message}
        }
        const result = await this.handler.InsertComment(insertComment)
        return result
    }

    //mvp
    async GetVideosThumbnails(){
        const result = await this.handler.GetVideosThumbnails()
        return result
    }

    //mvp
    async GetVideoComments(videoId){
        const validate = ValidateId(videoId)
        if(!validate){
            return {status : 400, data: newError.InvalidIdFormat.message}
        }
        const result = await this.handler.GetVideoComments(videoId)
        return result
    }

    //mvp
    async GetVideoProducts(videoId){
        const validate = ValidateId(videoId)
        if(!validate){
            return {status : 400, data: newError.InvalidIdFormat.message}
        }
        const result = await this.handler.GetVideoProducts(videoId)
        return result
    }

    async InsertProductIntoVideo(insertData){
        const result = await this.handler.InsertProductIntoVideo(insertData)
        return result
    }
}