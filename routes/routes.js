
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
        //add comment req = {username, comment, video._id} res={success/fail}*** 
        this.app.post('/video/comment/insert', (req, res)=>{
            return this.controllerList.video.InsertCommentController(req, res)
        })
        //get thumbnail res = [{video._id, videoUrl thumbnail}] ***
        this.app.get('/video/thumbnails', (req, res)=>{
            return this.controllerList.video.GetVideosThumbnailsController(req, res)
        })            
        //get product list req = {video._id} res = {product_id, linkproduct, title, price}***
        this.app.get('/video=:videoId/products', (req, res)=>{
            return this.controllerList.video.GetVideoProductsController(req, res)
        })
        //get comment list req = {video._id} res = {username, comment, date}***
        this.app.get('/video=:videoId/comment', (req, res)=>{
            return this.controllerList.video.GetVideoCommentsController(req, res)
        })
        //insert video req = { title, videoUrl, thumbnailUrl, description, username }
        this.app.post('/video/insert', (req, res)=>{
            return this.controllerList.video.InsertVideoController(req, res)
        })
        //post insert product in to video req = {videoId, productId}
        this.app.post('/video/product/insert', (req, res)=>{
            return this.controllerList.video.InsertProductIntoVideoController(req, res)
        })


        //product routes
        //insert product req = { name, username, url, description, price }
        this.app.post('/product/insert', (req, res)=>{
            return this.controllerList.product.InsertProductController(req, res)
        })
            //get all product 
            //update product by id
            //delete product by id
    }
}