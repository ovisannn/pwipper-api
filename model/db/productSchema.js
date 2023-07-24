import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name : String,
    video : mongoose.Schema.ObjectId,
    description :String,
    price : [{
        currency : String,
        amount : Number
    }],
    createdAt : Date,
    updatedAt : Date
    })

export function UserModel(){
    return mongoose.model('products', ProductSchema)
}

export class Product{
    constructor(data){
        this._id = data._id?  ObjectId(data._id) : null
        this.name = data.name
        this.video = ObjectId(data.video)
        this.description = data.description
        this.price = data.price
        this.createdAt = null? new Date() : data.createdAt
        this.updatedAt = null? new Date() : data.updatedAt
    }

    GetProduct(){
        return this
    }
}