import { useQuery } from "@tanstack/react-query";
import {api} from "../api/api"
import Qcoins from "../assets/Q-coins.svg"
import "../styles/UserCard.css"
import tableIcon from "../assets/tabler-icon-info-circle.svg" 

type UserDataType = {
        name: string,
        iin: string,
        avatar: any
        qCoins: number
    }
function getUserData(){
        return api.get<UserDataType>("/user").then((res)=>res.data)
    }

export default function UserCard(){
    const {data: user} = useQuery({
        queryKey:["user"],
        queryFn:getUserData
    })

    return(
        <div>
        <div id='user-id'>
            <img id="pic" src={user?.avatar} alt="img" />
            <div id="user-info">
                <h2>{user?.name}</h2>
                <p>ИИН:{user?.iin}</p>
            </div>
            <div id="q-coins-wrapper">
                <img id="pic2" src={Qcoins} alt="logo" />
                <div id="q-coins">
                    <p>Q-Коины</p>
                    <p>{user?.qCoins}</p>
                </div>
            </div>
            <img id="pic3" src={tableIcon} alt="icon" />
        </div>
        
        </div>
    )
}

