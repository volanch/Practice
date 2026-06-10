import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
export default function Mainla(){
    return(
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Header/>
            <div style={{ display: 'flex', flex: 1 }}>
                <NavBar/>
                <Outlet/>
            </div>
        </div>
    )
}
