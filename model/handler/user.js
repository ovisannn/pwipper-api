import mongoose from "mongoose"
import { UserSchema } from "../db/userSchema.js"

export class UserHandler{
    constructor(){
        this.model = mongoose.model('users', UserSchema)
    }

    async RegisterUser(insertData){
        const user = await this.model.create(insertData)
        const insertedUser =  await this.model.findOne(insertData)
        // console.log(insertedUser)
        return insertedUser._id
    }
}