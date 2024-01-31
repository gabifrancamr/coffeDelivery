import { FormProvider, useForm } from 'react-hook-form'
import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import { CompleteOrderContainer } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const formValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o cep'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  neighborhood: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  state: zod.string().min(1, 'Informe a UF'),
})

export type OrderType = zod.infer<typeof formValidationSchema>

type CompleteOrderType = OrderType

export function CompleteOrderPage() {
  const formValidation = useForm<CompleteOrderType>({
    resolver: zodResolver(formValidationSchema),
  })

  const { handleSubmit } = formValidation

  function handleCompleteOrder(data: CompleteOrderType) {
    console.log(data)
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
