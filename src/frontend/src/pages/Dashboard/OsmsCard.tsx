import { useQuery } from "@tanstack/react-query"
import { api } from "../../api/api"
import logo from "../../assets/osmslogo.svg"
import "../../styles/OsmsStatus.css"
type OsmsType = {
    status: string,
    clinic: string
}
function getOsmsData(){
    return api.get<OsmsType>("/osms").then((res)=>res.data)
}
export default function OsmsCard(){
    const {data: osms } = useQuery({
        queryKey:["osms"],
        queryFn:getOsmsData
    })
    return(
            <div className="osms-main">
                <div className="osms-top">
                    <img src={logo} alt="logo" />
                    <div id="green-text">
                        <h2 className="green">Статус ОСМС</h2>
                        <h2 className="green">{osms?.status}</h2>
                    </div>
                </div>
                <div id="default-text">
                    <p>Прикрепление:</p>
                    <p>{osms?.clinic}</p>
                </div>
            </div>
    )
}