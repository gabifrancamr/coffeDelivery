import { TitleText } from '../../../../components/Typography'
import { coffees } from '../../../../data/coffees'
import { CoffeeCard } from '../CoffeCard'
import { CoffeeList, OurCoffeesCointainer } from './styles'

export function OurCoffees() {
  return (
    <OurCoffeesCointainer>
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </OurCoffeesCointainer>
  )
}
