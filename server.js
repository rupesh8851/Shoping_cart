const express=require("express")
const path=require("path")

const app=express();


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",express.static(path.join(__dirname,"public")))
app.use("/api",require("./routes/api").route)//when we go there in api files then there are three files 
//-- (1)product.js ,(2) user.js  , (3) index.js     so  we aslo have to  specify which file is excuted when
//https://localhost4040:/api will run
// but if we donn't specify the file then it while take ./routes/api/index.js as path ans executed index.js 
//file in api folder




// app.get("/",(req,res)=>{


// })

app.listen(4040,()=>{
    console.log("server is started on https://localhost4041/")
})