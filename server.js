const express= require('express')
const contenedor= require('./contenedor.js')


const app= express()

const PORT =8080

const fs = require("fs");


let ruta= "./data/productos.json"


DBmanager= new contenedor(ruta)

let info
app.get('/productos', (req,res) =>{
    fs.readFile(ruta,'utf-8', (error, contenido)=>{
        if(error) {
            throw new Error(error);
        }else{
            info=JSON.parse(contenido)
            console.log(info)
            res.send(info)
        }
    })
    
   
})


app.get('/productoRandom', (req,res) =>{
    fs.readFile(ruta,'utf-8', (error, contenido)=>{
        if(error) {
            throw new Error(error);
        }else{
            info=JSON.parse(contenido)
            console.log(info)
            var item = info[Math.floor(Math.random()*info.length)];
            res.send(item)
        }
    })
        
})


const server =app.listen(PORT,()=>{
    console.log(`Servidor escuchando e puerto  ${PORT}`)
})


server.on("error", (error)=>{
    console.error(error)})