import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCard: (coffee: CartItem) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  function addCoffeeToCard(coffee: CartItem) {
    const coffeeAlreadyExistsInCard = cartItems.findIndex(
      (cardItem) => cardItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCard < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCard].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  console.log(cartItems)

  return (
    <CartContext.Provider value={{ cartItems, addCoffeeToCard, cartQuantity }}>
      {children}
    </CartContext.Provider>
  )
}
