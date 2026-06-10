import "../styles/NavBar_style.css"
import Logo1 from "../assets/Logo (1).svg"
import Row from "../assets/arrow.svg"
import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function NavBar(){
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="background">
            <div id="button1">
                <button id="main-button" onClick={() => setIsOpen(!isOpen)}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <img src={Logo1} alt="Logo" />
                        Цифровой контроль ОСМС
                    </div>
                    <img src={Row} alt="row" className={`arrow ${isOpen ? 'open' : ''}`} />
                </button>
            </div>
            <div className={`sub-button ${isOpen ? 'closed' : ''}`}>
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/finances">Финансы и Платежи</NavLink>
                    <NavLink to="/history">История услуг</NavLink>
                    <NavLink to="/rights">Мои права</NavLink>
                    <NavLink to="/safety">Контроль и Безопасность</NavLink>
                    <NavLink to="/fond">Обращения в Фонд</NavLink>
            </div>
        </div>
    )
}