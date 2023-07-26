import mongoose from "mongoose"
import { Encrypt } from "../../helpers/hash256/hash.js"

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

export class User{
    constructor(data){
        this._id = data._id?  data._id : null
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

    HashPassword(){
        this.password = Encrypt(this.password)
    }
}