import { useQuery } from "@tanstack/react-query"
import { api } from "../../api/api"
import Searching from "../../components/Searching"
import PaymentLabel from "./PaymentLabel"
import "../../styles/RightPage.css"

type MedType = {
    id:number
    name:string
    covered: boolean
}
function fetchMed(){
   return api.get<MedType[]>("/medicines").then((res) =>
        res.data.map((m: any) => ({ ...m, covered: m.available }))
    )
}
export default function FreeDrugs(){
    const{data:medicines} = useQuery({
        queryKey:["medicines"],
        queryFn:fetchMed
    })
     return(
            <div className="rightPage">
                <p><b>Бесплатные лекарства</b></p>
                <Searching
                heading="Проверить доступность бесплатных лекарств"
                parag="Статус активен. Вы имеете право на бесплатные лекартсва в системе ОСМС"
                palcehold="Введите название лекартсва"
                services={medicines}
                />
                <PaymentLabel/>
            </div>
        )
}