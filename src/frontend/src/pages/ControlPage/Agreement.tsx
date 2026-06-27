import down from "../../assets/download2.svg"
import { useQuery } from "@tanstack/react-query"
import { useState,useEffect } from "react"
import { api } from "../../api/api"
import "../../styles/Agr.css"
type AgrType = {
    id:number
    title:string
    description:string
    enabled:boolean
}
function getData(){
    return api.get<AgrType[]>("/consents").then((res)=>res.data)
}
export default function Agreement(){
    const [enabledMap, setEnabledMap] = useState<Record<number, boolean>>({})
    const{data:consents} = useQuery({
        queryKey:["consents"],
        queryFn:getData
    })
    useEffect(() => {
    if (consents) {
        const map: Record<number, boolean> = {}
        consents.forEach(c => map[c.id] = c.enabled)
        setEnabledMap(map)
    }
    }, [consents])

    const handleToggle = (id: number) => {
        setEnabledMap(prev => ({ ...prev, [id]: !prev[id] }))
    }
    return(
        <div className="main-lab-agr">
            <p>Управление согласиями</p>
            <div id="label-agr">
                {consents?.map((item)=>(
                    <div id="agr-string" key={item.id}>
                    <img src={down} alt="logo" />
                    <div id="sub-agr">
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                    </div>
                    <input
                        type="checkbox"
                        checked={enabledMap[item.id] ?? item.enabled}
                        onChange={() => handleToggle(item.id)}
                    />                
                    </div>
                ))}
            </div>
        </div>
    )
}