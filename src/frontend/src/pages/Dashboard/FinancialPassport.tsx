import { useQuery } from "@tanstack/react-query"
import {api} from "../../api/api"
import "../../styles/FinancialPassport.css"
type PassportData = {
    year: number,
    paidByMe:number,
    financialBenefit:number
    paidByState:number
}
function getFinancialData(){
    return api.get<PassportData>("/financialPassport").then((res)=> res.data)
}
export default function FinancialPassport(){
    const {data: financialPassport} = useQuery({
        queryKey:["financialPassport"],
        queryFn: getFinancialData
    })
    const total = (financialPassport?.paidByState ?? 0)
    const paidByMePercent = total > 0 ? ((financialPassport?.paidByMe ?? 0) / total) * 100 : 0
    const benefitPercent = total > 0 ? ((financialPassport?.financialBenefit ?? 0) / total) * 100 : 0
    return(
        <div id="main-label2">
            <div id="text1">
                <p>Финансовый Паспорт</p>
                <p>За {financialPassport?.year} год</p>
            </div>
            <div id="overralData">
            <div id="byme">
                <p>Внесено мной <br />(ОСМС)</p>
                <p>{financialPassport?.paidByMe.toLocaleString()} ₸</p>
            </div>
            <div id="benefit">
                <p>Финансовая<br />выгода</p>
                <p>{financialPassport?.financialBenefit.toLocaleString()} ₸</p>
            </div>
            <div id="bystate">
                <p>Оплачено государством<br />(ГОБМП)</p>
                <p>{financialPassport?.paidByState.toLocaleString()} ₸</p>
            </div>
        </div>
        <div id="bar">
            <div style={{ width: `${paidByMePercent}%`, height: "100%", background: "#A3D1EA" }} />
            <div style={{ width: `${benefitPercent}%`, height: "100%", background: "#006196" }} />
        </div>
        </div>
    )
}