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
            return error.message
        }

        const insertedProduct =  await this.model.findOne({title : insertData.title, username : insertData.username})
        return insertedProduct._id
    }
}