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

    async InsertComment(commentData){
        const insertComment = commentData
        const result = await this.handler.InsertComment(insertComment)
        return result
    }

    async GetVideosThumbnails(){
        const result = await this.handler.GetVideosThumbnails()
        return result
    }

    async GetVideoComments(videoId){
        const result = await this.handler.GetVideoComments(videoId)
        return result
    }
}