import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import {
  BaseStyle,
  BoldFont,
  CheckoutArea,
  ConfirmationButton,
  ContentCheckbox,
  InputArea,
  MapIcon,
  OptionsPayment,
  PriceArea,
  PriceCoffe,
  PurpleIcon,
  QuantityAndButton,
  RemoveButton,
  SelectedCoffe,
  SmallFont,
  StyleSelectCoffe,
  Title,
} from './styles'

import cafe from '../../assets/Type=Café com Leite.svg'
import { QuantityArea } from '../Home/styles'
import { NavLink } from 'react-router-dom'

export function Checkout() {
  return (
    <CheckoutArea>
      <ContentCheckbox>
        <h1>Complete seu pedido</h1>
        <BaseStyle>
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
        </BaseStyle>

        <BaseStyle>
          <Title>
            <PurpleIcon>
              <CurrencyDollar size={24} />
            </PurpleIcon>
            <div>
              <h2>Pagamento</h2>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </Title>
          <OptionsPayment>
            <div>
              <PurpleIcon>
                <CreditCard size={15} />
              </PurpleIcon>
              <span>cartão de crédito</span>
            </div>
            <div>
              <PurpleIcon>
                <Bank size={15} />
              </PurpleIcon>
              <span>cartão de débito</span>
            </div>
            <div>
              <PurpleIcon>
                <Money size={15} />
              </PurpleIcon>
              <span>dinheiro</span>
            </div>
          </OptionsPayment>
        </BaseStyle>
      </ContentCheckbox>

      <ContentCheckbox>
        <h1>Cafés selecionados</h1>
        <StyleSelectCoffe>
          <SelectedCoffe>
            <div>
              <img src={cafe} alt="" />
            </div>
            <div>
              <p>Expresso Tradicional</p>
              <QuantityAndButton>
                <QuantityArea>
                  <button>
                    <Minus />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus />
                  </button>
                </QuantityArea>
                <RemoveButton>
                  <PurpleIcon>
                    <Trash size={18} />
                  </PurpleIcon>
                  <span>remover</span>
                </RemoveButton>
              </QuantityAndButton>
            </div>
            <PriceCoffe>R$ 9,90</PriceCoffe>
          </SelectedCoffe>

          <SelectedCoffe>
            <div>
              <img src={cafe} alt="" />
            </div>
            <div>
              <p>Expresso Tradicional</p>
              <QuantityAndButton>
                <QuantityArea>
                  <button>
                    <Minus />
                  </button>
                  <span>1</span>
                  <button>
                    <Plus />
                  </button>
                </QuantityArea>
                <RemoveButton>
                  <PurpleIcon>
                    <Trash size={18} />
                  </PurpleIcon>
                  <span>remover</span>
                </RemoveButton>
              </QuantityAndButton>
            </div>
            <PriceCoffe>R$ 9,90</PriceCoffe>
          </SelectedCoffe>

          <PriceArea>
            <div>
              <SmallFont>Total Itens</SmallFont>
              <span>R$ 9,90</span>
            </div>
            <div>
              <SmallFont>Entrega</SmallFont>
              <span>R$ 5,00</span>
            </div>
            <BoldFont>
              <span>Total</span>
              <span>R$ 14,90</span>
            </BoldFont>
            <NavLink to="/success">
              <ConfirmationButton>Confirmar Pedido</ConfirmationButton>
            </NavLink>
          </PriceArea>
        </StyleSelectCoffe>
      </ContentCheckbox>
    </CheckoutArea>
  )
}
