import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextTypes {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
}

export const CartContext = createContext({} as CartContextTypes)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  function addCoffeeToCart(coffee: CartItem) {
    const thereIsThisCoffeeInCart = cartItems.findIndex(
      (item) => item.id === coffee.id,
    )

    const newCoffee = produce(cartItems, (draft) => {
      if (thereIsThisCoffeeInCart < 0) {
        draft.push(coffee)
      } else {
        draft[thereIsThisCoffeeInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCoffee)
  }

  return (
    <CartContext.Provider value={{ cartItems, cartQuantity, addCoffeeToCart }}>
      {children}
    </CartContext.Provider>
  )
}
