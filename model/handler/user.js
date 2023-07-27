import mongoose from "mongoose"
import { UserSchema } from "../db/userSchema.js"
import newError from "../../helpers/newErrorsMessage/newError.js"

export class UserHandler{
    constructor(){
        this.model = mongoose.model('users', UserSchema)
    }

    async RegisterUser(insertData){
        const findUser = await this.model.findOne({username : insertData.username})
        if(findUser === null){
            const findUser2 = await this.model.findOne({email : insertData.email})
            if(findUser2 === null){
                const user = new this.model(insertData)
                
                try{
                    await user.save()
                }catch(err){
                    return {status : 500, data : newError.DbFailed.message}
                }
            }else{
                if(findUser2.email === insertData.email){
                    return {status : 409, data : newError.EmailAlreadyExist.message}
                }
            }
        }else{
            if(findUser.username === insertData.username){
                return {status : 409, data : newError.UsernameAlreadyExist.message}
            }
        }

        const insertedUser =  await this.model.findOne({username : insertData.username})
        if(insertedUser === null || insertedUser === undefined){
            return {status : 500, data : newError.DbFailed.message}
        }
        return {status : 200, data : {_id : insertedUser._id}}
    }

    async GetAllUser(){
        const result = await this.model.find()
        return {status : 200, data :{users : result}}
    }

    async Login(loginInsert){
        const loginUser = await this.model.findOne({username : loginInsert.username})
        // console.log(loginUser)
        if(loginUser === null || loginUser=== undefined){
            return {status : 500, data : newError.DbFailed.message}
        }
        return {status : 200, data : {loginUser}}
    }
}