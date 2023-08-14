import mongoose from "mongoose";

export class mongoodb{
    constructor(username, password, dbName){
        // mongodb+srv://ovisannn:Vqam8WrJcYl5KCCx@cluster0.hl4u9ei.mongodb.net/?retryWrites=true&w=majority
        // this.uri = `mongodb://${uri}/${name}`
        this.uri = `mongodb+srv://${username}:${password}@cluster0.hl4u9ei.mongodb.net/${dbName}?`
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
    }
}