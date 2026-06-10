import UserCard from '../../components/UserCard'
import OsmsCard from "../../pages/Dashboard/OsmsCard";
export default function Main(){
    return(
      <div id='main-label'>
      <UserCard/>
      <br/>
      <OsmsCard/>
      </div>
    )
}
