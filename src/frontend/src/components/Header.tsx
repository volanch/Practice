import "../styles/Header_style.css"
import Logo from "../assets/Logo.svg"
export default function Header(){
    return(
        <div className="main">
            <img id="logo" src={Logo} alt="Logo" />
            <p id="headtext">Кабинет <br /> Предпринимателя</p>
        </div>
    )
}