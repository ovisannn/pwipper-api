import { UserModel, UserProfileModel } from "../db/userSchema.js"

export class UserHandler{
    constructor(db){
        this.db = db
    }

    InsertUser(insertData){
        const session = this.db.startSession()
        const transactionOptions = {
            readPreference : 'primary',
            readConcern : { level : 'snapshot' },
            writeConcern : { w : 'majority' }
        }
        session.startTransaction(transactionOptions)
        

        }


}