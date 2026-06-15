import { useQuery } from "@tanstack/react-query"
import {api} from "../../api/api"
import "../../styles/MedicalSummary.css"
type MedicalItem = {
    label: string
    title: string
    date: string
}

type MedicalSummaryType = {
    chronic: MedicalItem
    operations: MedicalItem
    allergy: MedicalItem
    contraindications: MedicalItem
}
function getFinancialData(){
    return api.get<MedicalSummaryType>("/medicalSummary").then((res)=> res.data)
}
export default function MedicalSummary(){
    const{data:medicalSummary , refetch} = useQuery({
        queryKey:["medicalSummary"],
        queryFn:getFinancialData
    })
    return(
        <div id="medical-overral">
            <div id="med-header">
                <p>Медицинское суммари</p>
                <button onClick={ () => refetch()}>Обновить данные</button>
            </div>
            <div id="all-cards">
                <div className="cardstyle">
                    <p>{medicalSummary?.chronic.label}</p>
                    <div>
                        <p>{medicalSummary?.chronic.title}</p>
                        <p>Диагноз от {medicalSummary?.chronic.date}</p>
                    </div>
                </div>
                <div className="cardstyle">
                    <p>{medicalSummary?.operations.label}</p>
                    <div>
                        <p>{medicalSummary?.operations.title}</p>
                        <p>Проведено {medicalSummary?.operations.date}</p>
                    </div>
                </div>
                <div className="cardstyle">
                    <p>{medicalSummary?.allergy.label}</p>
                    <div>
                    <p>{medicalSummary?.allergy.title}</p>
                    <p>Диагноз от {medicalSummary?.allergy.date}</p>
                    </div>
                </div>
                <div className="cardstyle">
                    <p>{medicalSummary?.contraindications.label}</p>
                    <div>
                    <p>{medicalSummary?.contraindications.title}</p>
                    <p>Проведено {medicalSummary?.contraindications.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}