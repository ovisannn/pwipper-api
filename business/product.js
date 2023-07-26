export class ProductUsecase{
    constructor(productHandler){
        this.handler = productHandler
    }

    async InsertProduct(productData){
        const insertData = productData
        const result = this.handler.InsertProduct(insertData)
        return result
    }
}