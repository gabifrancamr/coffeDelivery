import { ReactNode, createContext, useState } from 'react'
import { Coffee } from '../pages/Home/components/CoffeCard'
import { produce } from 'immer'

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextTypes {
  cartItems: CartItem[]
  cartQuantity: number
  cartTotalPrice: number
  addCoffeeToCart: (coffee: CartItem) => void
  changeQuantityCoffee: (
    coffeeId: number,
    type: 'increase' | 'decrease',
  ) => void
  removeCoffee: (coffeId: number) => void
}

export const CartContext = createContext({} as CartContextTypes)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.length

  const cartTotalPrice = cartItems.reduce((valor, item) => {
    return valor + item.price * item.quantity
  }, 0)

  function addCoffeeToCart(coffee: CartItem) {
    const thereIsThisCoffeeInCart = cartItems.findIndex(
      (item) => item.id === coffee.id,
    )

    const newListCoffee = produce(cartItems, (draft) => {
      if (thereIsThisCoffeeInCart < 0) {
        draft.push(coffee)
      } else {
        draft[thereIsThisCoffeeInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newListCoffee)
  }

  function changeQuantityCoffee(
    coffeeId: number,
    type: 'increase' | 'decrease',
  ) {
    const thereIsThisCoffeeInCart = cartItems.findIndex(
      (item) => item.id === coffeeId,
    )

    const newListCoffee = produce(cartItems, (draft) => {
      if (thereIsThisCoffeeInCart >= 0) {
        draft[thereIsThisCoffeeInCart].quantity =
          type === 'increase'
            ? draft[thereIsThisCoffeeInCart].quantity + 1
            : draft[thereIsThisCoffeeInCart].quantity - 1
      }
    })

    setCartItems(newListCoffee)
  }

  function removeCoffee(coffeeId: number) {
    const thereIsThisCoffeeInCart = cartItems.findIndex(
      (item) => item.id === coffeeId,
    )

    const newListCoffee = produce(cartItems, (draft) => {
      draft.splice(thereIsThisCoffeeInCart, 1)
    })

    setCartItems(newListCoffee)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeQuantityCoffee,
        removeCoffee,
        cartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
