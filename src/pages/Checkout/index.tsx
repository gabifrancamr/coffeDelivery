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
import { SubmitHandler, useForm } from 'react-hook-form'
import { QuantityArea } from '../Home/styles'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/CartProvider'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

type FormInputs = {
  cep: number
  street: string
  number: string
  fullAddress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const completeOrderFormValidationSchema = zod.object({
  cep: zod.number({ invalid_type_error: 'Informe o CEP' }),
  street: zod.string().min(1, 'Informe a rua'),
  number: zod.string().min(1, 'Informe o número'),
  fullAddress: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o bairro'),
  city: zod.string().min(1, 'Informe a cidade'),
  state: zod.string().min(2, 'Informe a UF'),
  paymentMethod: zod.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

// type CompleteOrderFormData = zod.infer<typeof completeOrderFormValidationSchema>

export function Checkout() {
  const { register, watch, handleSubmit } = useForm<FormInputs>({
    resolver: zodResolver(completeOrderFormValidationSchema),
  })

  const [shipping, setShipping] = useState(0)

  const city = watch('city')

  useEffect(() => {
    if (city) {
      setShipping(5.99)
    }
  }, [city])

  const {
    cartItems,
    totalPrice,
    decreaseQuantity,
    increaseQuantity,
    totalPriceOfEachItem,
  } = useContext(CartContext)

  function handleIncreaseQuantity(id: string) {
    increaseQuantity(id)
  }

  function handleDecreaseQuantity(id: string) {
    decreaseQuantity(id)
  }

  const handleOrderCheckout: SubmitHandler<FormInputs> = () => {
    if (cartItems.length === 0) {
      return alert('É preciso ter pelo menos um item no carrinho')
    } else {
      alert('ok')
    }
  }

  return (
    <CheckoutArea>
      <ContentCheckbox>
        <h1>Complete seu pedido</h1>
        <form onSubmit={handleSubmit(handleOrderCheckout)} id="order">
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
              <input
                type="number"
                className="cep"
                placeholder="CEP"
                required
                {...register('cep', { valueAsNumber: true })}
              />
              <input
                type="text"
                className="rua"
                placeholder="Rua"
                required
                {...register('street')}
              />
              <input
                type="number"
                className="num"
                placeholder="Número"
                required
                {...register('number')}
              />
              <input
                type="text"
                required
                className="complemento"
                placeholder="Complemento"
                {...register('fullAddress')}
              />
              <input
                type="text"
                className="bairro"
                placeholder="Bairro"
                required
                {...register('neighborhood')}
              />
              <input
                type="text"
                className="cidade"
                placeholder="Cidade"
                required
                {...register('city')}
              />
              <input
                type="text"
                className="uf"
                placeholder="UF"
                required
                {...register('state')}
              />
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
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
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
        </form>
      </ContentCheckbox>

      <ContentCheckbox>
        <h1>Cafés selecionados</h1>
        <StyleSelectCoffe>
          {cartItems.map((item) => (
            <SelectedCoffe key={item.id}>
              <div>
                <img src={item.image} alt="" />
              </div>
              <div>
                <p>{item.name}</p>
                <QuantityAndButton>
                  <QuantityArea>
                    <button onClick={() => handleDecreaseQuantity(item.id)}>
                      <Minus />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncreaseQuantity(item.id)}>
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
              <PriceCoffe>R$ {totalPriceOfEachItem(item)}</PriceCoffe>
            </SelectedCoffe>
          ))}

          <PriceArea>
            <div>
              <SmallFont>Total Itens</SmallFont>
              <span>R$ {totalPrice}</span>
            </div>
            <div>
              <SmallFont>Entrega</SmallFont>
              <span>R$ {shipping}</span>
            </div>
            <BoldFont>
              <span>Total</span>
              {shipping > 0 ? (
                <span>R$ {(totalPrice + 5.99).toFixed(2)}</span>
              ) : (
                <span>R$ {totalPrice}</span>
              )}
            </BoldFont>

            <ConfirmationButton type="submit" form="order">
              Confirmar Pedido
            </ConfirmationButton>
          </PriceArea>
        </StyleSelectCoffe>
      </ContentCheckbox>
    </CheckoutArea>
  )
}
