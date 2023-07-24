
export class Router{
    constructor(app, controllerList){
        this.app = app
        this.controllerList = controllerList
    }

    routes(){
        this.app.post('/user/register', (req, res)=>{
            return this.controllerList.user.RegisterUser(req, res)
        })

        this.app.get('/user/getAll', (req, res)=>{
            return this.controllerList.user.GetAllUser(req, res)
        })

        //return empy tho data successfully inserted
        this.app.post('/video/insert', (req, res)=>{
            return this.controllerList.video.InsertVideoController(req, res)
        })
    }
}