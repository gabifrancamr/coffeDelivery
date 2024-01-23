import { createContext } from 'react'

export const CartContext = createContext()

export function CartContextProvider() {
  return <CartContext.Provider value={}></CartContext.Provider>
}
