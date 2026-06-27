import "../../styles/HistoryDataTable.css"
import { useQuery } from "@tanstack/react-query"
import { api } from "../../api/api"
import { useState } from "react"
import DataTable from "../../components/DataTable";
import Arrow from "../../assets/ArrowH.svg"
import Arrow2 from "../../assets/3.svg"
type AccessDataTableType = {
      id: number,
      date: string,
      organization:string,
      basis: string,
      action: string,
      accessStatus: "Отклонен"| "Получен"
}
type accessLogSummary = {
    requestsToday:number
    suspiciousActivity:number
    avgResponseTime:string
}

function getTableInfo(page: number) {
    return api.get<AccessDataTableType[]>("/accessLog", {
        params: { _page: page, _limit: 10 }
    }).then((res) => {
        return res.data
    })
}
function getSummaryData(){
    return api.get<accessLogSummary>("/accessLogSummary").then((res)=>res.data)
}
export default function MagazineOfAccess(){
    const [page, setPage] = useState(1);
    const[Data,SetData] = useState("")
    const[Filter,SetFilter] = useState("Все")
    const{data: accessLogSummary} = useQuery({
        queryKey:["accessLogSummary"],
        queryFn:getSummaryData
    })
    const {data:accessLog} = useQuery({
        queryKey:["accessLog",page],
        queryFn:()=>getTableInfo(page),
    })
    const PaymentFilteredData = accessLog?.filter((item) =>
    Filter === "Все" ? true : item.accessStatus === Filter
)

    const DataFilteredData = PaymentFilteredData?.filter((item) => {
        if (Data === "") return true
        const [year, month, day] = Data.split("-")
        return item.date === `${day}.${month}.${year}`
    })
    return(
         <div id="overral-main">
        <div className="history-header">
            <p>Журнал доступа к персональным данным</p>
            <select className="custom-input" onChange={(e) => SetFilter(e.target.value)}>
                <option value="Все">Все</option>
                <option value="Получен">Получен</option>
                <option value="Отклонен">Отклонен</option>
            </select>
            <input type="date" className="custom-input" placeholder="Выберите дату" onChange={(e)=>SetData(e.target.value)}></input>
            </div>
            <div className="middlePart">
                <div className="blockinfo">
                    <p>Запросы сегодня</p>
                    <p>{accessLogSummary?.requestsToday}</p>
                </div>
                <div  className="blockinfo">
                    <p>Подозрительная активность</p>
                    <p>{accessLogSummary?.suspiciousActivity}</p>
                </div>
                <div  className="blockinfo">
                    <p>Среднее время отклика</p>
                    <p>{accessLogSummary?.avgResponseTime}</p>
                </div>
            </div>
            <DataTable RecentServices = {DataFilteredData}
            cond={1}
            />
            <div className="tablePages">
                <button disabled = {page === 1} onClick={()=>setPage(page-1)}>
                    <img src={Arrow} alt="logo" />
                </button>
                <span className={page === 1 ? "active-page" : ""} onClick={() => setPage(1)}>1</span>
                <span className={page === 2 ? "active-page" : ""} onClick={() => setPage(2)}>2</span>
                <span className={page === 3 ? "active-page" : ""} onClick={() => setPage(3)}>3</span>
                <span className={page === 4 ? "active-page" : ""} onClick={() => setPage(4)}>4</span>
                <span className={page === 5 ? "active-page" : ""} onClick={() => setPage(5)}>5</span>
                <button disabled = {page === 5} onClick={()=>setPage(page+1)}>
                    <img src={Arrow2} alt="logo" />
                </button>
            </div>
        </div>
    )
}