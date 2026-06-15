import { api } from "../../api/api"
import { useQuery } from "@tanstack/react-query"
import "../../styles/Coof.css"
type CoofType = {
    value:number,
    description:string
}
function getCoof(){
    return api.get<CoofType>("/efficiencyCoefficient").then((res)=>res.data)
}
export default function Coefficient(){
    const{data:efficiencyCoefficient} = useQuery({
        queryKey:["efficiencyCoefficient"],
        queryFn:getCoof
    })
    return(
        <div id="coof-label">
            <div id="main-infa">
            <p>Коэффициент эффективности</p>
            <p>{efficiencyCoefficient?.description}</p>
            <p>{efficiencyCoefficient?.value}%</p>
            </div>
        </div>
    )
}