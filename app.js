const express = require("express")
const app = express()

let port = process.env.PORT || 3000

app.use(express.static(__dirname+'/plain-html/public'))

app.listen(port,()=>{
    console.log('Server is running!')
})

// app.get('/',(req,res)=>{
//     res.sendFile(__dirname+'/plain-html/public/index.html')
// })

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/plain-html/public/index.html')
})