import UserCard from '../../components/UserCard'
import OsmsCard from "../../pages/Dashboard/OsmsCard";
import FinancialPassport from './FinancialPassport';
import MedicalSummary from './MedicalSummary';
import RecentAnalysis from "./RecentAnalysis"
import DataTable from '../../components/DataTable';
export default function Main(){
    return(
      <div id='main-label'>
        <UserCard/>
        <div style={{
          paddingTop:"24px",
          display: "grid",
          gridTemplateColumns:"1fr 2fr",
          gap:"16px"
        }}>
        <OsmsCard/>
        <FinancialPassport/>
        </div>
        <div style={{
          paddingTop:"24px",
          display: "grid",
          gridTemplateColumns:"2fr 1fr",
          gap:"16px"
        }}>     
        <MedicalSummary/>
        <RecentAnalysis/>
        </div>
        <div style={{
          paddingTop:"24px",
          paddingBottom:"24px"
        }} >
        <DataTable/>
        </div>
      </div>
    )
}
