import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import {
  BaseStyle,
  InputArea,
  MapIcon,
  OptionsPayment,
  Title,
  ContentCheckbox,
  PurpleIcon,
} from './styles'
import { useFormContext } from 'react-hook-form'

export function CompleteTheOrder() {
  const { register } = useFormContext()

  return (
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
            {...register('rua')}
          />
          <input
            type="number"
            className="num"
            placeholder="Número"
            required
            {...register('num', { valueAsNumber: true })}
          />
          <input
            type="text"
            required
            className="complemento"
            placeholder="Complemento"
            {...register('complemento')}
          />
          <input
            type="text"
            className="bairro"
            placeholder="Bairro"
            required
            {...register('bairro')}
          />
          <input
            type="text"
            className="cidade"
            placeholder="Cidade"
            required
            {...register('cidade')}
          />
          <input
            type="text"
            className="uf"
            placeholder="UF"
            required
            {...register('uf')}
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
  )
}
