import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { DefaultLayout } from './layout/DefaultLayout'
import { OrderConfirmedPage } from './pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/coffeDelivery" element={<DefaultLayout />}>
        <Route path="/coffeDelivery" element={<HomePage />} />
        <Route path="/coffeDelivery/checkout" element={<CompleteOrderPage />} />
        <Route
          path="/coffeDelivery/orderConfirmed"
          element={<OrderConfirmedPage />}
        />
      </Route>
    </Routes>
  )
}
