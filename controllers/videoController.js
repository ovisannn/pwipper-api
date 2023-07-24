import { Video } from "../model/db/videoSchema.js"
import { BaseResponse } from "./baseResponse.js"

export class VideoController{
    constructor(videoUsecase){
        this.usecase = videoUsecase
    }

    async InsertVideoController(req, res){
        const video = new Video(req.body)
        const videoData = video.GetVideo()
        const result = this.usecase.InsertVideo(videoData)
        const newResponse = new BaseResponse(200, result)
        return res.status(newResponse.GetStatus()).json(newResponse.GetResponse())
    }
}