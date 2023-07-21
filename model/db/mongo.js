import mongoose from "mongoose";

export class mongoodb{
    constructor(port, name){
        return mongoose.createConnection(`mongodb://localhost:${port}/${name}`).asPromise()
    }
}