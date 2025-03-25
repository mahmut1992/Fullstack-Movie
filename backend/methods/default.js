const defaultRequest=(req,res)=>{
//Cevabun durum kodunu belirle
res.status=404;



// cevabın içeriğini belirle
res.write(JSON.stringify({message:"İstek Adresi Tanımsız"}));

// Cevabı Client a gönder
return res.end()
}

module.exports=defaultRequest;