import React from 'react'
import InputField from '../components/InputField'
import { inputs } from '../utils/constans'
import api from '../utils/api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'





const Create = () => {

  const navigate=useNavigate()

const handleSubmit=(e)=>{
e.preventDefault()

const formData=new FormData(e.target)


// formData yı objeye çevirelim
const movieData=Object.fromEntries(formData.entries())



//kategorileri diziye çevir genre

movieData.genre=movieData.genre.split(",")

//api a film oluşturmak için http isteği atalım


api
.post("/api/movies",movieData)
.then((res)=>{
  //Bildirim gönder
  toast.success("Film Listeye Eklendi")
  //Detail sayfasına yönlendir
navigate(`/movie/${res.data.id}`)

})
.catch((err)=>{console.log("Hataaa",err),
toast.error("Üzgünüz İşlem başarısız");
});

};


  return (
    <div className='bg-yellow-600 flex items-center justify-center px-5 py-8 min-h-screen'>
     <div className='bg-white w-full max-w-[1000px] p-10 rounded shadow-lg grid grid-cols-1 md:grid-cols-2'>
     <form onSubmit={handleSubmit} className='flex flex-col gap-8 '>
        <h1 className='text-3xl font-semibold '>Yeni Film Oluştur</h1>
       
       {inputs.map((props, index)=>(
        <InputField key={index} {...props} />
       ))}

        <button className='shadow border py-3 rounded-lg hover:shadow-lg hover:bg-gray-200 transition'>Oluştur</button>
      </form>
     </div>
    </div>
  )
}

export default Create
