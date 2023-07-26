import { Product } from "../model/db/productSchema.js"
import { BaseResponse } from "./baseResponse.js"

export class ProductController{
    constructor(productUsecase){
        this.usecase = productUsecase
    }

    async InsertProductController(req, res){
        const reqProduct = req.body
        // console.log(reqProduct)
        const productObj = new Product(reqProduct)
        const result = await this.usecase.InsertProduct(productObj)
        const newResponse = new BaseResponse(200, {_id : result})
        return res.status(newResponse.GetStatus()).json(newResponse.GetResponse())
    }
}