import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../assets/Logo.svg'
import { Actions, HeaderContent, Localization } from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContent>
      <NavLink to="">
        <img src={logo} alt="Logo do CoffeDelivery" />
      </NavLink>
      <Actions>
        <Localization>
          <MapPin size={24} weight="fill" />
          <span>Porto Alegre, RS</span>
        </Localization>
        <NavLink to="/checkout">
          <ShoppingCart size={24} weight="fill" />
        </NavLink>
      </Actions>
    </HeaderContent>
  )
}
