import "../styles/Header_style.css"
import Logo from "../assets/Logo.svg"
import Row from "../assets/arrow.svg"
import Chat from "../assets/chat.svg"
import Notify from "../assets/notify.svg"
import Lang from "../assets/lang.svg"
import { useQuery } from "@tanstack/react-query";
import {api} from "../api/api"

type UserDataType = {
        iin: string
    }
function getUserData(){
        return api.get<UserDataType>("/user").then((res)=>res.data)
    }
export default function Header(){
    const {data: user} = useQuery({
            queryKey:["user"],
            queryFn:getUserData
        })
    return(
        <div className="main">
            <img id="logo" src={Logo} alt="Logo" />
            <p id="headtext">Кабинет <br /> предпринимателя</p>
            <img id="row" src={Row} alt="Logo" />
            <div id="t">
                <span>Физическое лицо </span>
                <span className="t2">ИИН:{user?.iin}</span>
            </div>
            <div id="icons">
            <div id="icons-group">
                <img src={Notify} alt="notify" />
                <img src={Chat} alt="chat" />
                <img src={Lang} alt="lang" />
            </div>
            <span className="t3">Физ.лицо</span>
        </div>
        </div>
    )
}