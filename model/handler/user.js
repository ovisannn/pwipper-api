import { UserModel, UserProfileModel } from "../db/userSchema.js"

export class UserHandler{
    constructor(db){
        this.db = db
    }

    InsertUser(insertData){
        const session = this.db.startSession()
    }

}