import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { DefaultLayout } from './layout/DefaultLayout'
import { OrderConfirmedPage } from './pages/OrderConfirmed'

export function Router() {
  return (
    <Routes>
      <Route path="/coffeeDelivery" element={<DefaultLayout />}>
        <Route path="/coffeeDelivery" element={<HomePage />} />
        <Route
          path="/coffeeDelivery/checkout"
          element={<CompleteOrderPage />}
        />
        <Route
          path="/coffeeDelivery/orderConfirmed"
          element={<OrderConfirmedPage />}
        />
      </Route>
    </Routes>
  )
}
