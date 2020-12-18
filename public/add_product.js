$(function(){

   let name=$("#productName")
   let manu=$("#manufacturer")
   let price=$("#price")

   $("#btn").click(()=>{
      
    addProduct(name.val(),manu.val(),price.val(),(data)=>{
        window.alert("Added" + data.name+" to products")
    })
   })


})