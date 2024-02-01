import { ContentContainer, PaymentMethodContainer } from './styles'
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'

type PaymentMethodInputTypes = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputTypes
>(({ label, icon, id, ...props }, ref) => {
  return (
    <PaymentMethodContainer>
      <input type="radio" id={id} {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
})

PaymentMethodInput.displayName = 'PaymentMethodInput'
