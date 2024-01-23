import { CheckoutArea } from './styles'

import { Order } from './Order'
import { CompleteTheOrder } from './CompleteTheOrder'

export function Checkout() {
  return (
    <CheckoutArea>
      <CompleteTheOrder />
      <Order />
    </CheckoutArea>
  )
}
