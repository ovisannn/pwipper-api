
export class Router{
    constructor(app, controllerList){
        this.app = app
        this.controllerList = controllerList
    }

    routes(){
        // this.app.route('/registerUser').post(this.controllerList.user.RegisterUser)
        this.app.post('/registerUser', (req, res)=>{
            return this.controllerList.user.RegisterUser(req, res)
        })
    }
}