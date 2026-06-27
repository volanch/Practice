import UserCard from '../../components/UserCard'
import { useState } from "react"
import HeadSwitch from '../../components/HeadSwitch';
import Agreement from "../ControlPage/Agreement"
import MagazineOfAccess from "../ControlPage/MagazineOfAccess"
export default function Safety(){
     const [active, setActive] = useState<1 | 2>(1)
        return (
        <div id='main-label'>
            <UserCard/>
            <div style={{paddingTop:"24px"}}>
            <HeadSwitch active={active} setActive={setActive} data1="Журнал доступа" data2="Управление согласиями" />
            </div>
            <div style={{ paddingTop:"24px", paddingBottom:"24px" }}>
                {active === 2 && <Agreement/>}
                {active === 1 && <MagazineOfAccess/>}
            </div>
        </div>
    )
}