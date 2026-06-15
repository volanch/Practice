import { useQuery } from "@tanstack/react-query"
import { api } from "../../api/api"
import Download from "../../assets/download.svg"
import "../../styles/RecentAnalysis.css"
type AnalysSubType = {
    id:number,
    name:string,
    date:string
}
function getAnalysisData(){
    return api.get<AnalysSubType[]>("/recentAnalysis").then((res)=>res.data)
}
export default function ResentAnalysis(){
    const {data:recentAnalysis } = useQuery({
        queryKey:["recentAnalysis"],
        queryFn:getAnalysisData
    })
    return(
        <div id="main-analysys-label">
            <div id="text-analysys">
                <p>Последние анализы</p>
                <button>Смотреть все</button>
            </div>
            <div id="overral-data">
                {recentAnalysis?.map((item) =>(
                <div key={item.id} className="box-analysys">
                    <div>
                    <p>{item.name}</p>
                    <p>{item.date}</p>
                    </div>    
                    <img src={Download} alt="download" />
                </div>
                ))}
            </div>
        </div>
    )
}