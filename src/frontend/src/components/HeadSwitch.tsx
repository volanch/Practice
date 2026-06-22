
import "../styles/HeadSwitch.css"
type AcceptedData = {
    data1: string,
    data2: string,
    setActive: (arg0: 1 | 2) => void,
active: 1 | 2
}
export default function HeadSwitch({ data1, data2, active, setActive }: AcceptedData) {
    return (
        <div className="switchBut">
            <button
                className={active === 1 ? "tab active" : "tab"}
                onClick={() => setActive(1)}
            >
                {data1}
            </button>
            <button
                className={active === 2 ? "tab active" : "tab"}
                onClick={() => setActive(2)}
            >
                {data2}
            </button>
        </div>
    )
}