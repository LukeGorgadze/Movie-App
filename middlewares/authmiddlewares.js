const User = require("../models/UserModel")

const jwt = require("jsonwebtoken")

module.exports.checkUser = (req,res,next) => {
    const token = req.cookies.jwt;
    console.log(token)
    if(token){
        console.log("Cookie YES")
        jwt.verify(token,process.env.JWT_SECRET,async (err,decodedToken) => {
            if(err){
                res.json({status:false})
                next()
            }else{
                const user = await User.findById(decodedToken.id);
                if (user) res.json({ status: true, user: user.email });
                else res.json({status:false});
                next()
            }
        })
    }else{
        res.json({status:false})
        console.log("Cookie NO")
        next();
    }
}