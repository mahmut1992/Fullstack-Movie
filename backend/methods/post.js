const bodyParser = require("../utils/bodyParser");
const crypto=require("crypto")
const fs=require("fs")

const postRequest=async(req,res)=>{
    if(req.url==="/api/movies"){
        // İsteğin body ksımına ulaş
       const body=await bodyParser(req)
    // Gelen veriyi kontrol et

    // if(!body.title || !body.year || !body.genre || !body.rating){

    //  return   res.end("Lütfen Zorunlu Olan Tüm Alanları Giriniz")
    // }

    //! Yukarıda ki methodun kısa versiyonunu aşağıda gösteriyoruz

    const keys=[
        "title",
        "year",
        "genre",
        "rating"
    ]
    if(keys.some((key)=>!body[key])){
        return res.end("Lütfen Zorunlu Alanları Doldurunuz")
    }
       //kaydedilecek veriye bir Id ekle

        body.id=crypto.randomUUID();

       // Json dosyasından verileri al

       let data = fs.readFileSync("./data/movies.json","utf-8")
       data=JSON.parse(data)
       //mevcut filmlerin üzerine yeni filmi ekle
       data.push(body)

       //Json dosyasını güncelle

       fs.writeFileSync("./data/movies.json",JSON.stringify(data))
       //client e cevap gönder
       res.writeHead(201)
      res.end(JSON.stringify(body))
    }else{
      res.writeHead(404);
      res.end("Geçersiz Yol")
    }
}

module.exports=postRequest