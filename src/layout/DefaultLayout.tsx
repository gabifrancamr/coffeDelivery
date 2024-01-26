import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { LayoutStyles } from './styles'

export function DefaultLayout() {
  return (
    <LayoutStyles>
      <Header />
      <Outlet />
    </LayoutStyles>
  )
}
