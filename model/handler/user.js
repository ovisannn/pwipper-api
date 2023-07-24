import mongoose from "mongoose"
import assert from "assert"
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

        console.log(insertedUser)
        return insertedUser._id
    }
}