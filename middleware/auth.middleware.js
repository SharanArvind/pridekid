// const mongoose=require('mongoose')
// require("dotenv").config()
// const secretKey=mongoose.connect(process.env.secretKey)
const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(token){
       
        try{
            const decoded= jwt.verify(token,"piramates")
            if(decoded){
                console.log(decoded)
                req.body.userID=decoded.userID
                req.body.user=decoded.user
               next()
            }else{
                res.json({msg:"Token not recognised!!"})
            }
        }catch(err){
            res.json({error:err.message})
        }
       
    }else{
        res.json({msg:"please Login!!"})
    }
}

module.exports={
    auth
}