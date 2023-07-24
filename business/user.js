import { isEmail } from "../helpers/emailValidation/emailValidation.js"
import { EmailnotValid } from "../helpers/newErrorsMessage/newError.js"

export class UserUsecase{
    constructor(userHandler){
        this.handler = userHandler
    }

    async RegisterUser(userData){
        let insertData = userData
        // const validateEmail = isEmail(insertData.isEmail)
        // if(validateEmail == false){
        //     return newError.EmailnotValid.message
        // }
        const result = await this.handler.RegisterUser(insertData)
        // console.log(result)
        return result
    }
}