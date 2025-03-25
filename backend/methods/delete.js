const fs=require("fs")
const deleteRequest=(req,res)=>{



    const path = req.url.substring(0,req.url.lastIndexOf("/"))

    const id=req.url.split("/")[3]
    

    if(path==="/api/movies" && id){
      const data=JSON.parse(fs.readFileSync("./data/movies.json","utf-8"))
     const movie= data.find((item)=>item.id===id)
     if(!movie){
        res.writeHead(404)
       return res.end("Gönderilen ID li film bulunamadı")
     }
     const filtred=data.filter((item)=>item.id!==id)
     fs.writeFileSync("./data/movies.json",JSON.stringify(filtred))
     
     res.writeHead(204)
     return res.end("Başarı il silindi")
    }
        

    
}

module.exports=deleteRequest