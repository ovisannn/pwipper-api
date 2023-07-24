import { User } from "../model/db/userSchema.js"
import { BaseResponse } from "./baseResponse.js"

export class UserController{
    constructor(userUsecase){
        this.usecase = userUsecase
    }

    GetProperty(){
        return this
    }

    RegisterUser(req, res){
        const userObj = new User(req.body)
        const userData = userObj.GetUser()
        const result = this.usecase.RegisterUser(userData)
        const newResponse = new BaseResponse(200, "result")
        return res.status(newResponse.GetStatus()).json(newResponse.GetResponse)   
    }
    
}