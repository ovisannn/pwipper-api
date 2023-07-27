import { isEmail } from "../helpers/emailValidation/emailValidation.js"
import newError from "../helpers/newErrorsMessage/newError.js"
import { User } from "../model/db/userSchema.js"
import { ValidatePassword } from "../helpers/hash256/hash.js"
import Jwt from "jsonwebtoken"

export class UserUsecase{
    constructor(userHandler){
        this.handler = userHandler
    }

    async RegisterUser(userData){
        let insertData = userData
        const validateEmail = isEmail(insertData.email)
        if(validateEmail === false){
            return newError.EmailnotValid.message
        }
        const userObj = new User(userData)
        userObj.HashPassword() 
        // console.log(userObj.GetUser())
        const result = await this.handler.RegisterUser(userObj.GetUser())
        return result
    }

    async GetAllUser(){
        const result = await this.handler.GetAllUser()
        // console.log(result)
        return result
    }

    async Login(loginData){
        const result = await this.handler.Login(loginData)
        console.log(typeof(loginData.password))
        const validate = ValidatePassword(loginData.password, result.password)
        if(validate === false){
            return {status : 401, data : newError.InvalidCredentials.message}
        }
        //sign token
        const token = Jwt.sign(result.data.username, process.env.TOKEN_SEC, {expiresIn : process.env.AUTH_TIMEOUT})
        return {status : 200, data : {token : token}}
    }
}