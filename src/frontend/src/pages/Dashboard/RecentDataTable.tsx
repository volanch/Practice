import "../../styles/DataTable.css"
import { useQuery } from "@tanstack/react-query"
import { api } from "../../api/api"
import { NavLink } from "react-router-dom";
import DataTable from "../../components/DataTable";
type RecentDataTableType = {
      id: number,
      date: string,
      organization:string,
      service: string,
      cost: string,
      status: string
}
function getAnalysisData(){
    return api.get<RecentDataTableType[]>("/recentServices").then((res)=>res.data)
}
export default function RecentDataTable(){
    const {data: recentServices } = useQuery({
        queryKey:["recentServices"],
        queryFn:getAnalysisData
    })
    return(
        <div id="overral-main">
        <div id="data-header">
            <p>Последние медицинские услуги</p>
            <NavLink to="/history" id="linkto" >Смотреть все</NavLink>
        </div>
        <DataTable RecentServices = {recentServices}/>
        </div>
    )
}
