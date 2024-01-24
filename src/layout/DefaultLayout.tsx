import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'
import { LayoutStyles } from './styles'
import { FormProvider, useForm } from 'react-hook-form'

export function DefaultLayout() {
  const methods = useForm()
  return (
    <LayoutStyles>
      <FormProvider {...methods}>
        <Header />
        <Outlet />
      </FormProvider>
    </LayoutStyles>
  )
}
