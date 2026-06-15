import { api } from "../../api/api";
import { useQuery } from "@tanstack/react-query";
import left from "../../assets/Chevron Left.svg"
import right from "../../assets/Chevron Right.svg"
import rightnorm from "../../assets/Chevron RightNorm.png"
import paid from "../../assets/Payment_icon.svg"
import unpaid from "../../assets/Payment_icon (1).svg"
import benefit from "../../assets/Payment_icon (2).svg"
import nothing from "../../assets/Payment_icon (3).svg"
import ResultOfCalendar from "./ResultOfCalendar";
import { useState } from "react";
import { useEffect } from "react";
import "../../styles/Calendar.css"
type MonthStatus = "paid" | "unpaid" | "benefit" | "current" | "pending"
type CalendarDataSubType = {
    id:number,
    name:string,
    status:MonthStatus,
    label:string|""
}
type CurrentMonthType = {
    id:number,
    organization:string,
    date:string
    monthId:number
}
type CalendarDataType = {
    year:number,
    months:CalendarDataSubType[],
    currentMonthPayments:CurrentMonthType[]
}
function getCalendarData(){
    return api.get<CalendarDataType>("/paymentCalendar").then((res)=>res.data)
}
export default function Calendar(){
    const{data:paymentCalendar} = useQuery({
        queryKey:["paymentCalendar"],
        queryFn:getCalendarData
    })
    const [selectedMonth, setSelectedMonth] = useState<CalendarDataSubType | null>(null)

    useEffect(() => {
        if (paymentCalendar) {
            setSelectedMonth(paymentCalendar.months.find((m) => m.status === "current") ?? null)
        }
    }, [paymentCalendar])
    return(
        <div id="main-calendar">
            <p>Календарь платежей</p>
            <div id="main-calendar-label">
                <div id="left-side">
                <div id="heading-cal">
                    <p>{paymentCalendar?.year} год</p>
                    <button><img src={left} alt="previous" /></button>
                    <button><img src={paymentCalendar?.year === new Date().getFullYear()? right:rightnorm} alt="next" /></button>
                </div>
                <div id="dtconteners">
                    {paymentCalendar?.months.map((item)=>(
                        <div key={item.id} id="box-data" className={selectedMonth?.id === item.id ? "selected" : ""} onClick={() => setSelectedMonth(item)}>
                            <div>
                               <p>{item.name}</p> 
                               <img src={item.status==="paid" ? paid:
                                item.status === "current" ? paid:
                                item.status === "unpaid" ? unpaid:
                                item.status === "benefit" ? benefit:
                                nothing
                                } alt="icon" />
                            </div>
                            <p style={{color:
                                item.status === "current" ? " #389E0D":
                                item.status ==="paid" ? "#389E0D":
                                item.status === "unpaid" ? "#CF1322":
                                item.status === "benefit" ? "#1379F0":""
                            }}>{item.label}</p>
                        </div>
                    ))}
                </div>
                </div>
                <div id="right-side">
                    <p>{selectedMonth?.name} {paymentCalendar?.year} Год</p>
                    {paymentCalendar?.currentMonthPayments
                    .filter((item)=>(item.monthId===selectedMonth?.id))
                    .map((item)=> (
                        <ResultOfCalendar
                        id={item.id}
                        organization={item.organization}
                        date = {item.date}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}