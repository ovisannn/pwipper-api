import mongoose from "mongoose"

export const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        require : true,
        unique : true
    },
    email : {
        type : String,
        require : true,
        unique : true
    },
    profilePpict : String,
    password : String,
    isVerified : Boolean,
    createdAt : Date,
    updatedAt : Date
})

// export function UserModel(){
//     return mongoose.model('users', UserSchema)
// }

export class User{
    constructor(data){
        // this._id = data._id?  ObjectId(data._id) : data._id
        this.username = data.username
        this.email = data.email
        this.profilePpict = data.profilePpict? data.profilePpict : ""
        this.password = data.password
        this.isVerified = data.isVerified? data.isVerified : false
        this.createdAt = data.createdAt? data.createdAt : new Date()
        this.updatedAt = data.updatedAt? data.updatedAt : new Date()
    }

    GetUser(){
        return this
    }
}