const express = require("express")
const router = express.Router()
const jwt = require("jsonwebtoken")
const crypto = require("crypto-js")
const pool = require("../db_connection/pool")


router.post("/", (req, res) => {
    const sql = "INSERT INTO user (name, email, pass, mobile_no) VALUES (?, ?, ?, ?)";
    const { name, email, pass, mobile_no } = req.body;
    const hash = crypto.SHA256(pass).toString()
    pool.query(sql, [name, email, hash, mobile_no], (error, result) => {
        if (error) {
            console.log(error);
            return res.status(500).send("Database error");
        }

        res.status(201).send({
            message: "User inserted successfully",
            insertId: result.insertId
        });
    });
});

router.post('/login',(req,res)=>{
    const { email, pass} = req.body;
    hash = crypto.SHA256(pass).toString()
   const sql = `SELECT * FROM user WHERE email = ? AND pass = ?`;
    pool.query(sql,[email,hash],(error,result)=>{
       if(error){
        res.status(404).send(error)
       }

      if(result.length > 0){
         token = jwt.sign(
               {  email : email },
               "my_secret_key"
            );
          res.status(200).json({
                success: true,
                message: "Login successful",
                token: token,
                data : result
            });
      }
      else {
            res.status(401).send({
                success: false,
                message: "Invalid email or password"
            });
           
        }
    })
})

router.get('/profile',(req,res)=>{
    let email = req.headers.email
    let sql = "select * from user where email = ?";
    pool.query(sql,[email],(error,data)=>{
        if(error){
            res.send("Database error")
        }
        res.send(data)
    }) 
})

router.delete('/',(req,res)=>{
    let sql = "delete from user where email = ?"
    pool.query(sql,[req.headers.email],(error,data)=>{
        if(error){
            res.send("database error")
        }
        res.send("user is deleted")
    })
})

module.exports = router;