const express = require("express")
const path = require("path")
const fs = require("fs")

const Port = process.env.Port || 5000

const app = express()
app.get('/', (req,res)=>{
    const filePath = path.resolve(__dirname, './build', "index.html");
    fs.readFile(filePath, 'utf8', (err, data)=>{
        if (err){
            return console.log(err)
        }
        data=data
            .replace(/__TITLE__/g, "Home page")
            .replace(/__DESCIPTION__/g, "Home page description");
        res.send(data);
    })
})
app.use(express.static(path.resolve(__dirname, "./build")))
app.listen(Port,()=>{
    console.log("server is started at port 5000")
})





