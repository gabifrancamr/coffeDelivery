import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input/Input'
import { AddressFormContainer } from './styles'

interface errorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export function AddressForm() {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as errorsType

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        className="cep"
        type="number"
        {...register('cep')}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register('street')}
        error={errors.street?.message}
      />
      <Input
        placeholder="Número"
        type="number"
        {...register('number')}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
        error={errors.complement?.message}
      />
      <Input
        placeholder="Bairro"
        {...register('neighborhood')}
        error={errors.neighborhood?.message}
      />
      <Input
        placeholder="Cidade"
        {...register('city')}
        error={errors.city?.message}
      />
      <Input
        placeholder="UF"
        {...register('state')}
        error={errors.state?.message}
      />
    </AddressFormContainer>
  )
}
