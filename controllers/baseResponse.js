class baseResponse{
    constructor(status, data){ 
        this.meta = {
            status : status,
            message: "success"
        }
        this.data = data

        if (status === 400){
            this.meta.message = "bad request"
        }else if (status === 500){
            this.meta.message = "server internal error"
        }
    }

    GetResponse(){
        return this
    }
}

export {baseResponse}