import "../styles/NavBar_style.css"
import Logo1 from "../assets/Logo (1).svg"
import Row from "../assets/arrow.svg"
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(){
    const [isOpen, setIsOpen] = useState(true);
    const [burgerOpen, setBurgerOpen] = useState(false);

    return(
        <>
            {/* Бургер кнопка — только на мобилке */}
            <button className="burger-btn" onClick={() => setBurgerOpen(!burgerOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Оверлей */}
            {burgerOpen && <div className="overlay" onClick={() => setBurgerOpen(false)} />}

            <div className={`background ${burgerOpen ? 'mobile-open' : ''}`}>
                <div id="button1">
                    <button id="main-button" onClick={() => setIsOpen(!isOpen)}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
                            <img src={Logo1} alt="Logo" style={{ flexShrink: 0 }} />
                            <span className="nav-title">Цифровой контроль ОСМС</span>
                        </div>
                        <img src={Row} alt="row" className={`arrow ${isOpen ? 'open' : ''}`} style={{ flexShrink: 0 }} />
                    </button>
                </div>
                <div className={`sub-button ${!isOpen ? 'closed' : ''}`}>
                    <NavLink to="/">Главная</NavLink>
                    <NavLink to="/finances">Финансы и Платежи</NavLink>
                    <NavLink to="/history">История услуг</NavLink>
                    <NavLink to="/rights">Мои права</NavLink>
                    <NavLink to="/safety">Контроль и Безопасность</NavLink>
                    <NavLink to="/fond">Обращения в Фонд</NavLink>
                </div>
            </div>
        </>
    )
}