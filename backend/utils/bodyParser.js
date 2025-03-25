

const bodyParser=(req)=>{
return new Promise((resolve,reject)=>{
     try {
        let body=""
        // frontend den body nin her parçası geldiğinde onu al ve yukarıdaki boş stringe ekle
        req.on("data",(chunk)=>{
            body+=chunk
        })
        //Yüklenme bittiğinde json verisini js e çevir
        req.on("end",()=>{
          return  resolve(JSON.parse(body))
        })
     } catch (error) {
        reject(error)
     }
})
}

module.exports=bodyParser;