import mongoose from "mongoose";

export class mongoodb{
    constructor(uri, name){
        this.uri = `mongodb://${uri}/${name}`
        mongoose.createConnection(this.uri).asPromise()
        const db = mongoose.connection

        db.on('error', (error)=>{
            console.log(error.message)
        })
        db.once('connected', ()=>{
            console.log(`database connected in ${this.uri}`)
        })
        return db
    }
}