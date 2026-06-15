import build from "../../assets/buildings.svg"
import Calendar from "../../assets/Calendar.svg"
type ResultOfCalendarProps = {
    id: number,
    organization: string,
    date: string,
}
export default function ResultOfCalendar({id,organization,date}:ResultOfCalendarProps){
return(
    <div id="main-box">
        <div id="miniBox" key={id}>
            <span><img src={build} alt="" />{organization}</span>
            <span><img src={Calendar} alt="" />{date}</span>
        </div>
    </div>
)
}