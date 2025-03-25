import {useParams} from "react-router-dom"
import {useQuery} from "@tanstack/react-query"
import api from "../utils/api"
import Loader from "../components/Loader"
import Error from "../components/Error"
import DeleteButton from "../components/DeleteButton"
import ListField from "../components/ListField"



const Detail = () => {

const {id} =useParams();

const {isLoading ,error,data,refetch}=useQuery({
  queryKey:["movie"],
  queryFn:()=>api.get(`/api/movies/${id}`).then((res)=>res.data),
})


if(isLoading) return <Loader/>;


if(error)  return <Error info={error} refetch={refetch} />
  


return (
   <div className="p-10">
     <div className="flex justify-end" >
   <DeleteButton id={data.id} />
    </div>
    <div className="flex flex-col gap-10 item-center md:flex-row">
      <div>
        <img className="rounded-md" src={`https://picsum.photos/seed/${data.id}/200/300`} alt="" />
        </div>
        <div className="flex flex-col gap-10" >
          <div>
            <h1 className="text-3xl font-semibold mb-3" >{data.title} </h1>
            <p>{data.description}</p>
          </div>
          <div className="grid gap-10 md:grid-cols-2" >
           <Failed label="İzleyici Skoru" value={Number(data.rating).toFixed(1)}/>
           <Failed label="Yıl" value={Number(data.year)}/>
           <Failed label="Dil" value={(data.language)}/>
           
          </div>
          <ListField label="Kategori" arr={data.genre} />
        </div>
    </div>
   </div>
  )
}

export default Detail


const Failed=({label,value})=>{
  return(
    <p>
      <span className="font-semibold me-3" > {label} : </span>
      <span className="p-2 px-4 rounded-full font-semibold bg-gray-200" > {value} </span>
    </p>
  )
}