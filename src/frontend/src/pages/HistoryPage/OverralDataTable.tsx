import "../../styles/HistoryDataTable.css"
import { useQuery } from "@tanstack/react-query"
import { api } from "../../api/api"
import { useState } from "react"
import DataTable from "../../components/DataTable";
import Arrow from "../../assets/ArrowH.svg"
import Arrow2 from "../../assets/3.svg"
type HistoryDataTableType = {
      id: number,
      date: string,
      organization:string,
      service: string,
      cost: string,
      status: string
      paymentType:"ОСМС"|"Платно"|"Все"
}
function getTableInfo(page: number) {
    return api.get<HistoryDataTableType[]>("/historyServices", {
        params: { _page: page, _limit: 10 }
    }).then((res) => res.data)
}
export default function OverralDataTable(){
    const [page, setPage] = useState(1);
    const[Data,SetData] = useState("")
    const[Filter,SetFilter] = useState("Все")
    const {data:historyServices} = useQuery({
        queryKey:["historyServices",page],
        queryFn:()=>getTableInfo(page),
    })
    const PaymentFilteredData = historyServices?.filter((item) =>
    Filter === "Все" ? true : item.paymentType === Filter
    )

    const DataFilteredData = PaymentFilteredData?.filter((item) => {
        if (Data === "") return true
        const [year, month, day] = Data.split("-")
        return item.date === `${day}.${month}.${year}`
    })
    return(
         <div id="overral-main">
        <div className="history-header">
            <p>История медицинских услуг</p>
            <select className="custom-input" onChange={(e) => SetFilter(e.target.value)}>
                <option value="Все">Все</option>
                <option value="ОСМС">ОСМС</option>
                <option value="Платно">Платно</option>
            </select>
            <input type="date" className="custom-input" placeholder="Выберите дату" onChange={(e)=>SetData(e.target.value)}></input>
            </div>
            <DataTable RecentServices = {DataFilteredData}/>
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