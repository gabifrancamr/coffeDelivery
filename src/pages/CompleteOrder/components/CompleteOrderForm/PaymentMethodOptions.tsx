import { Bank, CreditCard, CurrencyDollar } from 'phosphor-react'
import { PaymentMethodInput } from '../PaymentMethodInput'
import { PaymentMethodOptionsContainer } from './styles'
import { useFormContext } from 'react-hook-form'
import { RegularText } from '../../../../components/Typography'

export const allMethodsPayment = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank />,
  },
  money: {
    label: 'Dinheiro',
    icon: <CurrencyDollar />,
  },
}

export function PaymentMethodOptions() {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodErros = errors?.paymentMethod?.message as unknown as string

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(allMethodsPayment).map(([key, { label, icon }]) => (
        <PaymentMethodInput
          key={label}
          label={label}
          icon={icon}
          id={key}
          value={key}
          {...register('paymentMethod')}
        />
      ))}
      {paymentMethodErros && <RegularText>{paymentMethodErros}</RegularText>}
    </PaymentMethodOptionsContainer>
  )
}
