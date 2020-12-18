const route=require("express").Router();

 route.use("/users",require("./user").route)
 route.use("/products",require("./product").route)




exports=module.exports={
    route
}

