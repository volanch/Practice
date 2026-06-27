import { api } from "../../api/api"
import { useQuery } from "@tanstack/react-query"
import Searching from "../../components/Searching"
import "../../styles/RightPage.css"
import PaymentLabel from "./PaymentLabel"

type obtainType = {
    id:number
    name:string
    covered:boolean
}
function getObtData(){
    return api.get<obtainType[]>("/services").then((res)=>res.data)
}
export default function RightPage(){
     const{data:services} = useQuery({
            queryKey:["services"],
            queryFn:getObtData
        }) 
    return(
        <div className="rightPage">
            <p><b>Мои права на услугу</b></p>
            <Searching
            heading="Проверить доступность услуги по статусу"
            parag="Статус активен. Вы имеете право на пакет медицинских услуг в системе ОСМС"
            palcehold="Введите название услуги"
            services={services}
            />
            <PaymentLabel/>
        </div>
    )
       
}