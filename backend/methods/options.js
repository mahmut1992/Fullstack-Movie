const optionsRequest=(req,res)=>{

/*

Frontend den bir post/put/patch/delete isteği atıldığında tarayıcı öncelikler serverin bu istek tiplerini

kabul ettiğini kontrol etmek amacıyla options http metodu ile istek atar

* Eğer options isteğine cevap göndermezsek yukarıda ki istek türlerini api nin kabul etmediğini
zannediyor ve asıl isteği hiç bir zaman atmıyor

* Options isteği gelince doğru headerler cevap gönderirsek optionsun arkasından asıl isteği atıyor

*/

res.setHeader("Access-Control-Allow-Methods","GET,POST,DELETE,OPTIONS")

res.setHeader("Access-Control-Allow-Headers","Content-Type, Authorization, Accept")

res.end();


}





module.exports=optionsRequest;