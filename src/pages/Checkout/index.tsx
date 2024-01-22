import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  AddressAndPayment,
  CheckoutArea,
  ContentCheckbox,
  InputArea,
  MapIcon,
  OptionsPayment,
  PaymentIcon,
  Title,
} from './styles'

export function Checkout() {
  return (
    <CheckoutArea>
      <ContentCheckbox>
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
            <PaymentIcon>
              <CurrencyDollar size={24} />
            </PaymentIcon>
            <div>
              <h2>Pagamento</h2>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </Title>
          <OptionsPayment>
            <div>
              <PaymentIcon>
                <CreditCard size={15} />
              </PaymentIcon>
              <span>cartão de crédito</span>
            </div>
            <div>
              <PaymentIcon>
                <Bank size={15} />
              </PaymentIcon>
              <span>cartão de débito</span>
            </div>
            <div>
              <PaymentIcon>
                <Money size={15} />
              </PaymentIcon>
              <span>dinheiro</span>
            </div>
          </OptionsPayment>
        </AddressAndPayment>
      </ContentCheckbox>

      <ContentCheckbox>
        <h1>Cafés selecionados</h1>
      </ContentCheckbox>
    </CheckoutArea>
  )
}
