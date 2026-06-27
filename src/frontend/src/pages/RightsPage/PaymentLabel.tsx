import cash from "../../assets/Cash.svg"
import "../../styles/PaymentLabel.css"
export default function PaymentLabel(){
    return(
        <div id="pay-lab">
            <div id="lab-content">
                <img src={cash} alt="cash" />
                <p><b>Платежи отсутствуют</b></p>
                <p>Вы можете заранее оплатить за текущий период. Используйте калькулятор ОСМС для расчета платежа или перейдите к оплате в случае если заранее знаете сумму платежа.</p>
            </div>
        </div>
    )
}