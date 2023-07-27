import { User } from "../model/db/userSchema.js"
import { BaseResponse } from "./baseResponse.js"

export class UserController{
    constructor(userUsecase){
        this.usecase = userUsecase
    }

    async RegisterUserController(req, res){
        const userObj = new User(req.body)
        const userData = userObj.GetUser()
        const result = await this.usecase.RegisterUser(userData)
        const newResponse = new BaseResponse(result.status, result.data)
        return res.status(newResponse.GetStatus()).json(newResponse.GetResponse())
    }

    async GetAllUserController(req, res){
        const result = await this.usecase.GetAllUser()
        const newResponse = new BaseResponse(result.status, result.data)
        return res.status(newResponse.GetStatus()).json(newResponse.GetResponse())
    }

    async LoginController(req, res){
        const result = await this.usecase.Login(req.body)
        const token = result.data
        res.cookie("token", token, {
            httpOnly: true
        })
        const newResponse = new BaseResponse(result.status, result.data.token? "login success" : result.data)
        return res.status(newResponse.GetStatus()).json(newResponse.GetResponse())
    }
    
}