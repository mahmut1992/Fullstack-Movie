const fs=require("fs")

const getRequest=(req,res)=>{
    


    // url in temel adresini bir değişkene aktar

   const path= req.url.substring(0,req.url.lastIndexOf("/"))
   
   


    //url in sonunda ki id değerini bir değişkene aktardık
const id=req.url.split("/")[3]

if(req.url=="/api/movies"){
  // json dosyasından filmleri al
  
  const movies= fs.readFileSync("./data/movies.json","utf-8")

  // Cliente cevap gönder

    return res.end(movies)
}

if(path=="/api/movies" && id){
 // json dosyasından filmleri al

const data=JSON.parse(fs.readFileSync("./data/movies.json","utf-8"))
 // url deki id ye karşılık gelen elemanı dizide ara find()
 

 
const movie=data.find((item)=>item.id===id)

// Eğer film bulunursa Client a cevap gönder
if(movie){
   return res.end(JSON.stringify(movie))
}
// eğer ki film bulunamazsa hata gönder
res.writeHead(404)

  return res.end(JSON.stringify({message:"Aranılan Film Bulunamadı"}))

    
}

  //Yol yanlışsa
  
  return res.end(JSON.stringify({message:"yol bulunamdı"}))
}

module.exports=getRequest