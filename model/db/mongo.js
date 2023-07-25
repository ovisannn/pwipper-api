import mongoose from "mongoose";

export class mongoodb{
    constructor(uri, name){
        this.uri = `mongodb://${uri}/${name}`
    }

    init(){
        const dbase = mongoose.connection
        dbase.on('error', (error)=>{
        console.log(error)
        })
        dbase.once('connected', () =>{
        console.log(`database connected on ${this.uri}`)
        })
        return mongoose.connect(this.uri)
        // return 0
    }
}