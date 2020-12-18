const route=require("express").Router();
const Products=require("../../db").Product;

route.get("/",(req,res)=>{

      Products.findAll()
      .then((prod)=>{
          res.status(200).send(prod)
      })
      .catch((err)=>{
          res.status(500).send({error:"could not retrive products"})
      })

})

route.post("/",(req,res)=>{


  if(isNaN(req.body.price))
  {  console.log(req.body.price+" is the price")
      return res.status(403).send({  error:"price is invalid "+req.body.price})
  }

      Products.create({
          name: req.body.name,
          manufacturer : req.body.manufacturer,
          price: parseFloat(req.body.price)
      }).then((prod)=>{
          res.status(201).send(prod)
      }).catch((err)=>{
          res.status(501).send({error:"this product cann't be aaded"})
      })

})

exports=module.exports={
    route
}