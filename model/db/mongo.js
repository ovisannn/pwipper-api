import mongoose from "mongoose";

export class mongoodb{
    constructor(uri, name){
        this.uri = `mongodb://${uri}/${name}`
    }

    init(){
        // mongoose.createConnection(this.uri).asPromise()
        // const db = mongoose.connection

        // db.on('error', (error)=>{
        //     console.log(error.message)
        // })
        return mongoose.connect(this.uri)
    }
}