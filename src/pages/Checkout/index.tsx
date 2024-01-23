import { CheckoutArea } from './styles'

import { Order } from './Order'
import { CompleteTheOrder } from './CompleteTheOrder'
import { FormProvider, useForm } from 'react-hook-form'

export function Checkout() {
  const methods = useForm()
  return (
    <CheckoutArea>
      <FormProvider {...methods}>
        <CompleteTheOrder />
        <Order />
      </FormProvider>
    </CheckoutArea>
  )
}
