import { ReactNode, createContext } from 'react'
import { FieldValues, UseFormRegister, useForm } from 'react-hook-form'

interface InformationContextProps {
  register: UseFormRegister<FieldValues>
  watch: UseFormRegister<FieldValues>
}

export const informationContext = createContext({} as InformationContextProps)

interface InformationContextProviderProps {
  children: ReactNode
}

export function InformationContextProvider({
  children,
}: InformationContextProviderProps) {
  const { register, watch } = useForm()
  return (
    <informationContext.Provider value={{ register, watch }}>
      {children}
    </informationContext.Provider>
  )
}
