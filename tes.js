import mongoose from "mongoose"

class db {
    constructor(uri){
        return mongoose.connect(uri)
    }
}

const newdb = new db("mongodb://localhost:27017/pwipper")
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

const newaaa = {
    username: 'ovisannn',
    email: 'ovi.sanjaya11@gmail.com',
    profilePpict: '',
    password: 'oviovi102938',
    isVerified: false,
    createdAt: Date.now(),
    updatedAt: Date.now()
} 

const model = mongoose.model("users", UserSchema)
const asd = await model.create(newaaa)
console.log(asd)