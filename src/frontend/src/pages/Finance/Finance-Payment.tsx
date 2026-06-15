import UserCard from "../../components/UserCard"
import FinancialPassport from "../Dashboard/FinancialPassport"
import Calendar from "./Calendar"
import Coefficient from "./Coefficient"
export default function Finance(){
    return(
        <div id='main-label'>
              <UserCard/>
              <div style={{
                paddingTop:"24px",
                display: "grid",
                gridTemplateColumns:"1fr 2fr",
                gap:"16px"
              }}>
              <Coefficient/>
              <FinancialPassport/>
              <div style={{ gridColumn: "1 / -1" }}>
                    <Calendar/>
                </div>
              </div>
        </div>      
    )
}