import mongoose from "mongoose"
import assert from 'assert'
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
        unique : [true, "there is another account with this email"]
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
try{
    const asd = await model.create(newaaa)
}catch(err){
    console.log(err.message)
}
const error = model.validate()
assert.equal(error.errors['username'].message,
  'there is another account with this email')
// console.log(asd)
// const res = await model.findOne({username : "ovisannn"})
// console.log(res)