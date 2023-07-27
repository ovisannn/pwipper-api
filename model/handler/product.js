import mongoose from "mongoose"
import { ProductSchema } from "../db/productSchema.js"

export class ProductHandler{
    constructor(){
        this.model = mongoose.model("products", ProductSchema)
    }

    async InsertProduct(insertData){
        const product = new this.model(insertData)

        try{
            await product.save()
        }catch(error){
            return {status : 500, data : newError.DbFailed.message}
        }

        const insertedProduct =  await this.model.findOne({title : insertData.title, username : insertData.username})
        if(insertedProduct === null || insertedProduct === undefined){
            return {status : 500, data : newError.DbFailed.message}
        }
        return {status : 200, data : {_id : insertedProduct._id}}
    }

    async GetAllProducts(){
        const result = await this.model.find()
        return {status : 200, data :{products : result}}
    }
}