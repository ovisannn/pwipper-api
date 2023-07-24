import { User } from "../model/db/userSchema.js"
import { BaseResponse } from "./baseResponse.js"

export class UserController{
    constructor(userUsecase){
        this.usecase = userUsecase
    }

    async RegisterUser(req, res){
        const userObj = new User(req.body)
        const userData = userObj.GetUser()
        const result = await this.usecase.RegisterUser(userData)
        const newResponse = new BaseResponse(200, result)
        return res.status(newResponse.GetStatus()).json(newResponse.GetResponse())
    }

    async GetAllUser(req, res){
        const result = await this.usecase.GetAllUser()
        const newResponse = new BaseResponse(200, result)
        return res.status(newResponse.GetStatus()).json(newResponse.GetResponse())
    }
    
}