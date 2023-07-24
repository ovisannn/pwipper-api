import mongoose from "mongoose"
import { UserSchema } from "../db/userSchema.js"

export class UserHandler{
    constructor(){
        this.model = mongoose.model('users', UserSchema)
    }

    async RegisterUser(insertData){
        const user = new this.model(insertData)
        
        try{
            await user.save()
        }catch(err){
            return err.message
        }

        const insertedUser =  await this.model.findOne({username : insertData.username})
        return insertedUser._id
    }

    async GetAllUser(){
        const result = await this.model.find()
        return result
    }
}