import UserCard from "../../components/UserCard"
import FinancialPassport from "../Dashboard/FinancialPassport"
import Calendar from "./Calendar"
import Coefficient from "./Coefficient"
export default function Finance(){
    return(
        <div id='main-label'>
              <UserCard/>
              <div className="grid-2">
              <Coefficient/>
              <FinancialPassport/>
              </div>
              <div style={{  paddingTop: "24px"}}>
                    <Calendar/>
                </div>
        </div>      
    )
}