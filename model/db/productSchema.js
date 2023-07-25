import mongoose from "mongoose";

export const ProductSchema = mongoose.Schema({
    name : String,
    username : String,
    description :String,
    url : String,
    price : [{
        currency : String,
        amount : Number
    }],
    createdAt : Date,
    updatedAt : Date
    })

// export function UserModel(){
//     return mongoose.model('products', ProductSchema)
// }

export class Product{
    constructor(data){
        this._id = data._id?  ObjectId(data._id) : null
        this.name = data.name
        this.username = data.username
        this.description = data.description
        this.url = data.url
        this.price = data.price
        this.createdAt = data.createdAt? data.createdAt : new Date()
        this.updatedAt = data.updatedAt? data.updatedAt : new Date()
    }

    GetProduct(){
        return this
    }
}