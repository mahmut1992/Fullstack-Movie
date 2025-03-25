const http=require("http")
const getRequest=require("./methods/get.js")
const postRequest=require("./methods/post.js")
const deleteRequest=require("./methods/delete.js")
const defaultRequest = require("./methods/default.js")
const optionsRequest = require("./methods/options.js")


// Server oluştur
const server=http.createServer((req,res)=>{
    console.log("İstek geldi methodu : ",req.method);


    //Cevaba Gönderilecek İçeriğin tipini header olarak ekle
    res.setHeader("content-Type","application/json");
    // Cors Hatası Çözümü
    res.setHeader("Access-Control-Allow-Origin","*")

  
    // Gelen isteğin metot türüne göre client a farklı cevaplar gönderelim
    // Kod kalabalığı olmasın diye isteklere gönderilen cevapları farklı js dosyalarında yazdık
    switch (req.method) {
        case "GET":
            
            // Dosyayı Oku
            // Verileri İşle
            // Koşullara Bak
            // Cevap Gönder
            
            return getRequest(req,res)
            case "POST":
                // Gelen cevabı İncele
                // Eksik Varsa Gönder
                // Veri Doğruysa Diziye ekle
                // JSON Dosyasını Güncelleyeceğiz
                // Cevap Gönder
            
            return postRequest(req,res)
            case "DELETE":
                // Gelen cevabı İncele
                // Eksik Varsa Gönder
                // Veri Doğruysa Diziye ekle
                // JSON Dosyasını Güncelleyeceğiz
                // Cevap Gönder
            
            return deleteRequest(req,res)

            case "OPTIONS":

            return optionsRequest(req,res)
    
        default:
           return defaultRequest(req,res)
            
    }
    
    
})

// SBelirli bir porta gelen istekleri dinle

const port = 4090

server.listen(port,()=>{
    console.log(`Server ${port} dan gelen istekleri dinlemeye başladı`);
    
})
