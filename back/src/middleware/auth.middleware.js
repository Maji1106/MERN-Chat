import jwt from "jsonwebtoken";
import User from "../model/user.model";

export const protetedRouter = async (req, res, next) => {
    try{
        const token = req.cookies.jwt;
        if(!token){
            return res
            .status(401)
            .json({message: "no token"});
        }
        const decoded = jwt.verify(token, process.env.jwt_secret)
        if(!decoded){
            return res.status(401).json({message: "token"});
        }
        const user = await User.findById(decoded.UserID).select
    }
}