
function fetchproduct(done){
 
    $.get("/api/products",(data)=>{
        done(data)
    })

     
}

function addProduct(name,manu,price,done)
{
   $.post("/api/products",{
       name:name,
       manufacturer:manu,
       price:price
   },(data)=>{
       done(data)
   })

}



function createproductCard(product){
 
     return $(`<div class="col-4 card   bg-info text-white ">
     <div class="product-name">${product.name}</div>
     <div class="product-manufacture">${product.manufacturer}</div>
    <div class="row p-4" >
       <div class="col-sm-8 "><b> $${product.price}</b>  </div> 
       <a href="./buy_product.html" class="btn btn-dark ">BUY</a> 
     </div>
</div>    

<div class="col-2 ">  </div>`)

}

function makespace(){

    return $(`<div class=" col-12 card  ">
    <div class="row p-3" >
    </div>
</div>    
 `)
}
