import { Video } from "../model/db/videoSchema.js"
import { BaseResponse } from "./baseResponse.js"

export class VideoController{
    constructor(videoUsecase){
        this.usecase = videoUsecase
    }

    async InsertVideoController(req, res){
        const video = new Video(req.body)
        const videoData = video.GetVideo()
        const result = await this.usecase.InsertVideo(videoData)
        const newResponse = new BaseResponse(result.status, result.data)
        return res.status(newResponse.GetStatus()).json(newResponse.GetResponse())
    }

    async InsertCommentController(req, res){
        const commentData = req.body
        const result = await this.usecase.InsertComment(commentData)
        const newResponse = new BaseResponse(result.status, result.data)
        return res.status(newResponse.GetStatus()).json(newResponse.GetResponse())
    }

    async GetVideosThumbnailsController(req, res){
        const result = await this.usecase.GetVideosThumbnails()
        const newResponse = new BaseResponse(result.status, result.data)
        return res.status(newResponse.GetStatus()).json(newResponse.GetResponse())
    }
    
    async GetVideoCommentsController(req, res){
        const videoId = req.params.videoId
        const result = await this.usecase.GetVideoComments(videoId)
        const newResponse = new BaseResponse(result.status, result.data)
        return res.status(newResponse.GetStatus()).json(newResponse.GetResponse())
    }

    async GetVideoProductsController(req, res){
        const videoId = req.params.videoId
        const result = await this.usecase.GetVideoProducts(videoId)
        const newResponse = new BaseResponse(result.status, result.data)
        return res.status(newResponse.GetStatus()).json(newResponse.GetResponse())
    }

    async InsertProductIntoVideoController(req, res){
        const insertData = req.body
        const result = await  this.usecase.InsertProductIntoVideo(insertData)
        const newResponse = new BaseResponse(result.status, result.data)
        return res.status(newResponse.GetStatus()).json(newResponse.GetResponse())
    }
}