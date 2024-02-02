import { FormProvider, useForm } from 'react-hook-form'
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CompleteOrderContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router'
import { useCart } from '../../hooks/UseCart'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const formValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o cep'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  state: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderType = zod.infer<typeof formValidationSchema>

type ConfirmOrderValidation = OrderType

export function CompleteOrderPage() {
  const formValidation = useForm<ConfirmOrderValidation>({
    resolver: zodResolver(formValidationSchema),
  })

  const { handleSubmit } = formValidation

  const { clearCart } = useCart()

  const navigate = useNavigate()

  function handleCompleteOrder(data: ConfirmOrderValidation) {
    navigate('/orderConfirmed', {
      state: data,
    })

    clearCart()
  }

  return (
    <FormProvider {...formValidation}>
      <CompleteOrderContainer onSubmit={handleSubmit(handleCompleteOrder)}>
        <CompleteOrderForm />
        <SelectedCoffees />
      </CompleteOrderContainer>
    </FormProvider>
  )
}
