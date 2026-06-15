import "../styles/DataTable.css"
import { useQuery } from "@tanstack/react-query"
import { api } from "../api/api"
import { NavLink } from "react-router-dom";
type DataTableType = {
      id: number,
      date: string,
      organization:string,
      service: string,
      cost: number,
      status: string
}
function getAnalysisData(){
    return api.get<DataTableType[]>("/recentServices").then((res)=>res.data)
}
export default function DataTable(){
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
        <div id="main-datalabel">
            <table>
                <thead>
                    <th scope="col">Дата</th>
                    <th scope="col">Наименование организации</th>
                    <th scope="col">Услуга</th>
                    <th scope="col">Стоимость</th>
                    <th scope="col">Статус</th>
                </thead>
                <tbody>
                    {recentServices?.map((item)=>(
                        <tr key={item.id}>
                        <th scope="row">{item.date}</th>
                        <td>{item.organization}</td>
                        <td>{item.service}</td>
                        <td style={{
                            whiteSpace:"nowrap"
                        }}>{item.cost}</td>
                        <td className={item.status === "В работе" ? "work" : item.status === "Подтверждено" ? "confirmed" : "other"}>
                            <span>{item.status}</span>
                        </td>                     
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>

    )
}