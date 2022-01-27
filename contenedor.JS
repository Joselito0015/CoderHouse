const fs = require("fs");

class contenedor{
    constructor(ruta){
        this.ruta=ruta
        
    }

    save(object){
        try{
            fs.readFile(this.ruta,'utf-8', (error, contenido)=>{
                if(error) {
                    throw new Error(error);
                }else{
                    let info=JSON.parse(contenido)
                    if (info.length==0){
                        object.id=1
                    }
                    else{
                        object.id=info.slice(-1)[0] .id +1
                    }
                    
                    info.push(object);
                    let OBJson = JSON.stringify(info,null,2);
                    console.log(info)
                    fs.writeFileSync(this.ruta,OBJson,"utf-8");
                }
            })}
        catch(error){
                console.error(error);
            }
        }

    getById(id){
        try{
            fs.readFile(this.ruta,'utf-8', (error, contenido)=>{
                if(error) {
                    throw new Error(error);
                }else{
                    let info=JSON.parse(contenido)

                    info.forEach(element=>{
                        if (element.id==id){
                            console.log(element)
                        }
                    })

                }
            })}
        catch(error){
                console.error(error);
            }
        }
    
    getAll(){
        let info
        try{
            fs.readFile(this.ruta,'utf-8', (error, contenido)=>{
                if(error) {
                    throw new Error(error);
                }else{
                    info=JSON.parse(contenido)
                    console.log(info)
                    
                }
            })}
        catch(error){
                console.error(error);
            }

        return info;
    }

    deleteById(number){
        try{
            fs.readFile(this.ruta,'utf-8', (error, contenido)=>{
                if(error) {
                    throw new Error(error);
                }else{
                    let info=JSON.parse(contenido)
                    let index = info.findIndex(function(o){
                        return o.id === number;
                    })
                    if (index !== -1) info.splice(index, 1);
                    let OBJson = JSON.stringify(info,null,2);
                    console.log(info)
                    fs.writeFileSync(this.ruta,OBJson,"utf-8");
                }
            })}
        catch(error){
                console.error(error);
            }
        }

    deleteAll(){
        try{
            let clean=[]
            fs.writeFileSync(this.ruta,JSON.stringify(clean),"utf-8",error=>{
                if(error) {
                    throw new Error(error);
                }else{
                    console.log("Objetos borrados")
                }
            })}
        catch(error){
                console.error(error);
            }
    }
}

module.exports=contenedor;







