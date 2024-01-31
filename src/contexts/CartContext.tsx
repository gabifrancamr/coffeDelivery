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
  changeQuantityCoffee: (
    coffeeId: number,
    type: 'increase' | 'decrease',
  ) => void
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

  function changeQuantityCoffee(
    coffeeId: number,
    type: 'increase' | 'decrease',
  ) {
    const thereIsThisCoffeeInCart = cartItems.findIndex(
      (item) => item.id === coffeeId,
    )

    const newCoffee = produce(cartItems, (draft) => {
      if (thereIsThisCoffeeInCart >= 0) {
        draft[thereIsThisCoffeeInCart].quantity =
          type === 'increase'
            ? draft[thereIsThisCoffeeInCart].quantity + 1
            : draft[thereIsThisCoffeeInCart].quantity - 1
      }
    })

    setCartItems(newCoffee)
  }

  return (
    <CartContext.Provider
      value={{ cartItems, cartQuantity, addCoffeeToCart, changeQuantityCoffee }}
    >
      {children}
    </CartContext.Provider>
  )
}
