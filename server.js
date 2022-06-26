//===========================
//Requirements for the server
const express=require('express');
const bodyParser=require('body-parser')
const app=express();
const MongoClient=require('mongodb').MongoClient
const PORT=8000
require('dotenv').config()

let db,
    dbConnectionString=process.env.DB_STRING,
    dbName='inventory'

//===========================


//===========================
//Middleware, database, and other routes
MongoClient.connect(dbConnectionString, {useUnifiedTopology:true})
    .then(client=>{
        console.log(`Connected to the ${dbName} database`)
        db=client.db(dbName)
        app.use(bodyParser.urlencoded({extended:true}))


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
            console.log(req.body)
        })
        //===========================


    //===========================
    })
    
//===========================


//===========================
//Listener for server
app.listen(PORT,function(){
    console.log(`The server is listening on port ${PORT}`)
})
//===========================

