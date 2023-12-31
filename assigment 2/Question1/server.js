const express=require("express")
const bosyparser=require("body-parser")
const app = express()
const hbs=require('hbs')
const path=require('path')
const port=process.env.port || 8000

require("./src/Db/config")

app.use(express.static(__dirname + './src/public'))
app.set('views',path.join(__dirname,'./src/views'))
app.set('view engine','hbs')

app.use(bosyparser.urlencoded({
    limit:"10mb",
    extended:true
}))

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

const route=require("./src/routes/router")
app.use("/",route)


app.listen(port,()=>{
    console.log(`server is ruuning on port ${port}`)
})