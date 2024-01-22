import {
  HomeContent,
  CoffeArea,
  CoffeOptions,
  CoffeInfo,
  CoffeDiv,
  CoffeAreaPrice,
  Price,
  InfoToBuy,
  ShoppingCartIcon,
  QuantityArea,
} from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { IntroArea } from './Intro'
import { AllCoffes } from './AllCoffes'

export function Home() {
  return (
    <HomeContent>
      <IntroArea />
      <CoffeArea>
        <h1>Nossos cafés</h1>
        <CoffeOptions>
          {AllCoffes.map((coffe) => (
            <CoffeDiv key={coffe.id}>
              <CoffeInfo>
                <img src={coffe.image} alt="café tradicional" />
                <span>{coffe.tag}</span>
                <h1>{coffe.name}</h1>
                <p>{coffe.description}</p>
              </CoffeInfo>
              <CoffeAreaPrice>
                <Price>
                  <span>R$</span>
                  <h1>9,90</h1>
                </Price>
                <InfoToBuy>
                  <QuantityArea>
                    <button>
                      <Minus />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus />
                    </button>
                  </QuantityArea>
                  <ShoppingCartIcon>
                    <ShoppingCart size={18} weight="fill" />
                  </ShoppingCartIcon>
                </InfoToBuy>
              </CoffeAreaPrice>
            </CoffeDiv>
          ))}
        </CoffeOptions>
      </CoffeArea>
    </HomeContent>
  )
}
