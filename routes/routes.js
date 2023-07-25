
export class Router{
    constructor(app, controllerList){
        this.app = app
        this.controllerList = controllerList
    }

    routes(){
        //user routes
        this.app.post('/user/register', (req, res)=>{
            return this.controllerList.user.RegisterUser(req, res)
        })

        this.app.get('/user/getAll', (req, res)=>{
            return this.controllerList.user.GetAllUser(req, res)
        })

        //video routes
            //get all video
            //register product into video
            //delete video
            //update video
            //add comment req = {username, comment, video._id} res={success/fail}*** => find video => find username
        this.app.post('/video/comment/insert', (req, res)=>{
            return this.controllerList.video.InsertCommentController(req, res)
        })
            //get thumbnail res = [{video._id, videoUrl thumbnail}] ***
            //get product list req = {video._id} res = {product_id, linkproduct, title, price}***
            //get comment list req = {video._id} res = {username, comment, date}***
        this.app.post('/video/insert', (req, res)=>{
            return this.controllerList.video.InsertVideoController(req, res)
        })

        //product routes
            //insert product
            //get all product 
            //update product by id
            //delete product by id
    }
}