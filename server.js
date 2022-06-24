//===========================
//Requirements for the server
const express=require('express');
const bodyParser=require('body-parser')
const app=express();

//===========================


//===========================
//Middleware 
app.use(bodyParser.urlencoded({extended:true}))
//===========================


//===========================
//CRUD- Create, Read, Update and Delete
//ex. app.get(endpoint, callback)

    //===========================
    //CRUD - READ
    app.get('/',(req,res)=>{
        res.sendFile(__dirname+'/index.html')
    })
    // Note: __dirname is the current directory you're in. Try logging it and see what you get!
    //===========================


    //===========================
    //CRUD - CREATE
    app.post('/assets',(req,res)=>{
        console.log('Helloooooooooo!')
    })
    //===========================

//===========================


//===========================
//Listener for server
app.listen(3000,function(){
    console.log('Listening on 3000')
})
//===========================

