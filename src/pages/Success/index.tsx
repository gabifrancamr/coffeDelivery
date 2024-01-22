import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  OrderDetails,
  OrderInformation,
  OrderText,
  SuccessArea,
  SuccessInfoAndLogo,
} from './styles'

import SuccessLogo from '../../assets/success.svg'

export function Success() {
  return (
    <SuccessArea>
      <SuccessInfoAndLogo>
        <OrderText>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
          <OrderInformation>
            <div>
              <span className="icon pin">
                <MapPin weight="fill" />
              </span>
              <OrderDetails>
                <span>
                  Entrega em <strong> Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
              </OrderDetails>
            </div>

            <div>
              <span className="icon timer">
                <Timer weight="fill" />
              </span>
              <OrderDetails>
                <span>Previsão de entrega</span>
                <span>
                  <strong>20 min - 30 min </strong>
                </span>
              </OrderDetails>
            </div>

            <div>
              <span className="icon money">
                <CurrencyDollar weight="fill" />
              </span>
              <OrderDetails>
                <span>Pagamento na entrega</span>
                <span>
                  <strong>Cartão de Crédito </strong>
                </span>
              </OrderDetails>
            </div>
          </OrderInformation>
        </OrderText>
        <img src={SuccessLogo} alt="" />
      </SuccessInfoAndLogo>
    </SuccessArea>
  )
}
