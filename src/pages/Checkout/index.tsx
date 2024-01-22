import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import {
  Address,
  AddressAndPayment,
  CheckoutArea,
  CompleteOrderArea,
  InputArea,
  MapIcon,
  MoneyIcon,
  Payment,
  Title,
} from './styles'

export function Checkout() {
  return (
    <CheckoutArea>
      <CompleteOrderArea>
        <h1>Complete seu pedido</h1>
        <AddressAndPayment>
          <Title>
            <MapIcon>
              <MapPinLine size={24} />
            </MapIcon>
            <div>
              <h2>Endereço de Entrega</h2>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </Title>
          <InputArea>
            <input type="number" className="cep" placeholder="CEP" />
            <input type="text" className="rua" placeholder="Rua" />
            <input type="number" className="num" placeholder="Número" />
            <input
              type="text"
              className="complemento"
              placeholder="Complemento"
            />
            <input type="text" className="bairro" placeholder="Bairro" />
            <input type="text" className="cidade" placeholder="Cidade" />
            <input type="text" className="uf" placeholder="UF" />
          </InputArea>
        </AddressAndPayment>

        <AddressAndPayment>
          <Title>
            <MoneyIcon>
              <CurrencyDollar size={24}/>
            </MoneyIcon>
            <div>
              <h2>Pagamento</h2>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </Title>
        </AddressAndPayment>
      </CompleteOrderArea>
    </CheckoutArea>
  )
}
