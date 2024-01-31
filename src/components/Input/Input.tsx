import { InputHTMLAttributes, forwardRef } from 'react'
import { InputStyleContainer, InputWrapper } from './styles'
import { RegularText } from '../Typography'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <InputWrapper className={className}>
        <InputStyleContainer {...props} ref={ref} />
        {error && <RegularText>{error}</RegularText>}
      </InputWrapper>
    )
  },
)

Input.displayName = 'Input'
