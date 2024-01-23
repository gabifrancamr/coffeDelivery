import { ReactNode, createContext, useState } from 'react'
import { AllCoffes, Coffee } from '../pages/Home/AllCoffes'

interface NewCoffeeInCartProps {
  id: string
  name: string
  quantity: number
  price: number
  image: string
}

interface CartContextType {
  cartItems: NewCoffeeInCartProps[]
  dataCoffes: Coffee[]
  increaseQuantity: (id: string) => void
  decreaseQuantity: (id: string) => void
  addCoffeeToCard: (coffe: Coffee) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<NewCoffeeInCartProps[]>([])
  const [dataCoffes, setDataCoffes] = useState<Coffee[]>(AllCoffes)

  function increaseQuantity(id: string) {
    setDataCoffes((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  function decreaseQuantity(id: string) {
    setDataCoffes((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      ),
    )
  }

  function addCoffeeToCard(coffe: Coffee) {
    const newCoffeeInCart: NewCoffeeInCartProps = {
      id: coffe.id,
      name: coffe.name,
      image: coffe.image,
      price: coffe.price,
      quantity: coffe.quantity,
    }

    setCartItems((state) => [...state, newCoffeeInCart])
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        dataCoffes,
        addCoffeeToCard,
        decreaseQuantity,
        increaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
