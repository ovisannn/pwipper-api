import Jwt from "jsonwebtoken";
import { BaseResponse } from "../../controllers/baseResponse.js";
import newError from "../../helpers/newErrorsMessage/newError.js";

export function CookieJwtAuth(req, res, next){
    const token = req.cookiew.token
    try{
        const user = Jwt.verify(token, process.env.TOKEN_SEC)
        req.user = user
        next()
    }catch{
        res.clearCookie("token")
        const newResponse = new BaseResponse(401, newError.UnauthorizedError.message)
        return res.status(newResponse.GetStatus()).json(newResponse.GetResponse())
    }
}