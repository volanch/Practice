import { useState } from "react"
import "../styles/Searching.css"

type obtainType = {
    id: number
    name: string
    covered?: boolean
    available?:boolean
}

type PropsData = {
    heading: string
    parag: string
    palcehold: string
    services: obtainType[] | undefined
}

export default function Searching({ heading, parag, palcehold, services }: PropsData) {
    const [item, setItem] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const searchdata = services?.filter((i) =>
        i.name.toLowerCase().includes(item.toLowerCase())
    )

    const handleSearch = () => {
        if (item.trim()) setSubmitted(true)
    }

    const handleReset = () => {
        setItem("")
        setSubmitted(false)
    }

    return (
        <div className="label-search">
            <div id="sub-search">
                <p id="heading-search"><b>{heading}</b></p>
                <p>{parag}</p>
                <input
                    type="search"
                    placeholder={palcehold}
                    value={item}
                    onChange={(e) => {
                        setItem(e.target.value)
                        setSubmitted(false) 
                    }}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                {submitted && searchdata && (
                    <div id="results-list">
                        {searchdata.length > 0 ? (
                            searchdata.map((i) => (
                                <div key={i.id} id="results-res">
                                    <p>{i.name}</p>
                                    <span className={i.covered ? "accepted" : "decline"}>
                                        {i.covered ? "Одобрено" : "Не покрыто"}
                                    </span>
                                </div>
                            ))
                        ) : (
                            <p id="no-results">Услуга не найдена</p>
                        )}
                    </div>
                )}
                <div id="butto">
                    <button onClick={handleSearch}>Поиск</button>
                    <button onClick={handleReset}>Сбросить</button>
                </div>
            </div>
        </div>
    )
}