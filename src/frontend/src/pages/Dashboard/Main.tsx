import UserCard from '../../components/UserCard'
import OsmsCard from "../../pages/Dashboard/OsmsCard";
import FinancialPassport from './FinancialPassport';
import MedicalSummary from './MedicalSummary';
import RecentAnalysis from "./RecentAnalysis"
import DataTable from '../../components/DataTable';
export default function Main(){
    return (
    <div id='main-label'>
        <UserCard/>
        <div className="grid-2">
            <OsmsCard/>
            <FinancialPassport/>
        </div>
        <div className="grid-2-rev">
            <MedicalSummary/>
            <RecentAnalysis/>
        </div>
        <div style={{ paddingTop:"24px", paddingBottom:"24px" }}>
            <DataTable/>
        </div>
    </div>
)
}
