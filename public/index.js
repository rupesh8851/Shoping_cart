
$(function(){

  let productlist=$("#product-list")
     
    fetchproduct((products)=>{
    
         productlist.empty();
          var count=0;      
         for(product of products)
         {   count++;
             productlist.append(createproductCard(product))
             console.log(count);
           
             if(count%2==0 && count>=2)
               {
                   productlist.append(makespace())
               }
         }
   

    })

})