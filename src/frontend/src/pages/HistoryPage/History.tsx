import UserCard from '../../components/UserCard'
import { useState } from "react"
import HeadSwitch from '../../components/HeadSwitch';
import OverralDataTable from './OverralDataTable';
import ResultsTable from "../HistoryPage/ResultsTable"
export default function Main(){
    const [active, setActive] = useState<1 | 2>(1)
    return (
    <div id='main-label'>
        <UserCard/>
        <div style={{paddingTop:"24px"}}>
        <HeadSwitch active={active} setActive={setActive} data1="История услуг" data2="Результаты анализов" />
        </div>
        <div style={{ paddingTop:"24px", paddingBottom:"24px" }}>
            {active === 1 && <OverralDataTable />}
            {active === 2 && <ResultsTable />}
        </div>
    </div>
)
}
