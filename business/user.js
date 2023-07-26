import { isEmail } from "../helpers/emailValidation/emailValidation.js"
import newError from "../helpers/newErrorsMessage/newError.js"
import { User } from "../model/db/userSchema.js"

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

    async GetComments(){}
}