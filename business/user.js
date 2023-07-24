import { isEmail } from "../helpers/emailValidation/emailValidation.js"
import { EmailnotValid } from "../helpers/newErrorsMessage/newError.js"

export class UserUsecase{
    constructor(userHandler){
        this.handler = userHandler
    }

    RegisterUser(userData){
        let insertData = userData
        // const validateEmail = isEmail(insertData.isEmail)
        // if(validateEmail == false){
        //     return newError.EmailnotValid.message
        // }
        const result = this.handler.RegisterUser(insertData)
        return result
    }
}