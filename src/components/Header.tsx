import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../assets/Logo.svg'
import { Actions, HeaderContent, Localization, QuantityItems } from './styles'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { CartContext } from '../contexts/CartProvider'
import { useFormContext } from 'react-hook-form'

export function Header() {
  const { quantityTotal } = useContext(CartContext)
  const { watch } = useFormContext()

  const city = watch('cidade')
  const UF = watch('uf')

  return (
    <HeaderContent>
      <NavLink to="">
        <img src={logo} alt="Logo do CoffeDelivery" />
      </NavLink>
      <Actions>
        <Localization>
          <MapPin size={24} weight="fill" />
          {city && UF ? (
            <span>
              {city} - {UF}
            </span>
          ) : (
            <span>Brasil</span>
          )}
        </Localization>
        <NavLink to="/checkout">
          {quantityTotal > 0 ? (
            <>
              <ShoppingCart size={24} weight="fill" />
              <QuantityItems>{quantityTotal}</QuantityItems>
            </>
          ) : (
            <ShoppingCart size={24} weight="fill" />
          )}
        </NavLink>
      </Actions>
    </HeaderContent>
  )
}
