const express = require("express")
const app = express()
const cors = require("cors");
const jwt  = require("jsonwebtoken")
const authuser = require("./utils/auth")
const userRouter = require("./routes/user")

app.use(cors());
app.use(express.json())

app.use(authuser)
app.use('/user', userRouter)



app.listen(8088, () => {
    console.log("server is running on port 8088");
})