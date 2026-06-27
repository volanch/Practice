import UserCard from '../../components/UserCard'
import { useState } from "react"
import HeadSwitch from '../../components/HeadSwitch';
import RightPage from './RightPage';
import "../../styles/Right.css"
import FreeDrugs from './FreeDrugs';
export default function History(){
    const [active, setActive] = useState<1 | 2>(1)
    return (
    <div id='main-label'>
        <UserCard/>
        <div style={{paddingTop:"24px"}}>
        <HeadSwitch active={active} setActive={setActive} data1="Права на услуги" data2="Бесплатные лекарства" />
        </div>
        <div style={{ paddingTop:"24px" }}>
            {active === 1 && <RightPage/>}
            {active === 2 && <FreeDrugs/>}
        </div>
    </div>
)
}
