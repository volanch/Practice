import "../styles/DataTable.css"
type DataTableType = {
    id: number
    date: string
    organization: string
    service?: string
    cost?: string
    status?: string
    paymentType?:"ОСМС"|"Платно"|"Все"
    basis?:string ,
    action?: string,
    accessStatus?: "Получен"|"Отклонен"

}
type DataTableProps = {
    RecentServices: DataTableType[] | undefined
    cond?:number
}

export default function DataTable({ RecentServices,cond }: DataTableProps){
    return(
        <div id="overral-main">
        <div id="main-datalabel">
            <table>
                <thead>
                    <th scope="col">Дата</th>
                    <th scope="col">Наименование организации</th>
                    <th scope="col">{cond===1?"Основание":"Услуга"}</th>
                    <th scope="col">{cond===1?"Действие":"Стоимость"}</th>
                    <th scope="col">{cond===1?"Статус доступа":"Статус"}</th>
                </thead>
                <tbody>
                    {RecentServices?.map((item)=>(
                        <tr key={item.id}>
                        <th scope="row">{item.date}</th>
                        <td>{item.organization}</td>
                        <td>{item.service}{item.basis}</td>
                        <td style={{
                            whiteSpace:"nowrap"
                        }}>{item.cost}{item.action}</td>
                        <td className={
                        item.status === "В работе" ? "work" 
                        : item.status === "Подтверждено" ? "confirmed" 
                        : item.accessStatus === "Получен" ? "confirmed"
                        : item.accessStatus === "Отклонен" ? "other"
                        : "other"
                    }>
                        <span>{item.status || item.accessStatus}</span>
                    </td>                   
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>

    )
}