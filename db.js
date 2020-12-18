const sequelize=require("sequelize")

const db=new sequelize("shopdb","myshop","mypass",{
  
     host : "localhost",
     dialect: "mysql",
     pool:{
         min:0,
         max:5,
     }
    
})

//here we are defining/creating a table using db.define(1,2);
//1 argument->we give a name to table;
//2 argument -> we wrye the values we want to fill in the table;
const User=db.define('user', {
    
    id:{
        type: sequelize.INTEGER,
        autoIncrement : true,
        primaryKey: true
    },
    name:{
        type : sequelize.STRING,
        allowNull :false
    }
    
});


const Product=db.define("product",{
    id:{
        type:sequelize.INTEGER,
        autoIncrement :true,
        primaryKey:true
    },
    name:{
        type :sequelize.STRING,
        allowNull:false
    },


    manufacturer : sequelize.STRING,

    price:{
        type: sequelize.FLOAT,
        defaultValue : 0.0,
        allowNull :false
    }
}) 


db.sync()
.then(()=>{console.log("database is synced")})
.catch((err)=>{console.log(err)})



exports =module.exports={
  User,Product
}


