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
}