import "../styles/DataTable.css"
type DataTableType = {
    id: number
    date: string
    organization: string
    service: string
    cost: string
    status: string
    paymentType?:"ОСМС"|"Платно"|"Все"
}
type DataTableProps = {
    RecentServices: DataTableType[] | undefined
}

export default function DataTable({ RecentServices }: DataTableProps){
    return(
        <div id="overral-main">
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
                    {RecentServices?.map((item)=>(
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