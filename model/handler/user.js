import mongoose from "mongoose"
import { UserSchema } from "../db/userSchema.js"

export class UserHandler{
    constructor(){
        this.model = mongoose.model('users', UserSchema)
    }

    async RegisterUser(insertData){
        try{
            const user = await this.model.create(insertData)
            user.save()
        }catch(error){
            console.log(error)
            return error.messages
        }

        try{
           const insertedUser =  await UserModel.find(insertData)
        }catch(error){
            return error.messages
        }

        console.log(user)
        return insertedUser._id
    }
}