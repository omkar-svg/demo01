const jwt = require("jsonwebtoken")

function authuser(req,res,next){
     console.log(req.url)
    if (req.url == "/user" || req.url == "/user/login")
        next()
    else {
         token = req.headers.token
         if(!token){
            res.send("token is missing ");
         }
         else{
             try{
                 const payload = jwt.verify(token,"my_secret_key")
                 req.headers.email = payload.email
                 next()
            }
            catch(ex){
                res.send("invalid token")
            }
                
         }
    }
}

module.exports = authuser