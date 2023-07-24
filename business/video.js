export class VideoUsecase{
    constructor(videoHandler){
        this.handler = videoHandler
    }

    async InsertVideo(videoData){
        const insertData = videoData
        const result = this.handler.InsertVideo(insertData)
        return result
    }
}