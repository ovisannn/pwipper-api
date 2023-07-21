import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String,
    isVerified : Boolean,
    createdAt : Date,
    updatedAt : Date
})

const UserProfileSchema = new mongoose.Schema({
    username : String,
    name : String,
    bio : String,
    brth : Date,
    folowers : {
        username : String
    },
    folowing : {
        username : String
    },
    createdAt : Date,
    updatedAt : Date
})

export function UserModel(){
    return mongoose.model('user', UserSchema)
}

export function UserProfileModel(){
    return mongoose.model('userProfile', UserProfileSchema)
}