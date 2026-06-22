import { useQuery } from "@tanstack/react-query"
import { api } from "../../api/api"
import Download from "../../assets/download.svg"
import "../../styles/RecentAnalysis.css"
import page from "../../assets/down.svg"
type AnalysSubType = {
    id:number,
    name:string,
    date:string
}
function getAnalysisData(){
    return api.get<AnalysSubType[]>("/recentAnalysis").then((res)=>res.data)
}
export default function ResultsTable(){
    const {data:recentAnalysis } = useQuery({
        queryKey:["recentAnalysis"],
        queryFn:getAnalysisData
    })
    return(
        <div>
            <p style={{
                fontSize:"18px",
                margin:0,
                paddingBottom:"12px",
                fontWeight:600,
                color:"#2A2C31"
                
            }}>Результаты анализов</p>
        <div id="main-analysys-label">
            <div id="overral-data">
                {recentAnalysis?.map((item) =>(
                <div key={item.id} className="box-analysys">
                    <img src={page} alt="logo" />
                    <div>
                    <p>{item.name}</p>
                    <p>{item.date}</p>
                    </div>    
                    <img src={Download} alt="download" />
                </div>
                ))}
            </div>
        </div>
        </div>
    )
}
