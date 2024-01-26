import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { CompleteOrderPage } from './pages/CompleteOrder'
// import { Success } from './pages/Success'
import { DefaultLayout } from './layout/DefaultLayout'
// <Route path="/success" element={<Success />} />
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CompleteOrderPage />} />
      </Route>
    </Routes>
  )
}
