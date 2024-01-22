import {
  HomeContent,
  CoffeArea,
  CoffeOptions,
  CoffeInfo,
  CoffeDiv,
  CoffeAreaPrice,
  Price,
  InfoToBuy,
} from './styles'
import { ShoppingCart } from 'phosphor-react'
import tradicional from '../../assets/Image.svg'
import { IntroArea } from './Intro'

export function Home() {
  return (
    <HomeContent>
      <IntroArea />
      <CoffeArea>
        <h1>Nossos cafés</h1>
        <CoffeOptions>
          <CoffeDiv>
            <CoffeInfo>
              <img src={tradicional} alt="café tradicional" />
              <span>TRADICIONAL</span>
              <h1>Expresso Tradicional</h1>
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </CoffeInfo>
            <CoffeAreaPrice>
              <Price>
                <span>R$</span>
                <h1>9,90</h1>
              </Price>
              <InfoToBuy>
                <div>
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                </div>
                <ShoppingCart />
              </InfoToBuy>
            </CoffeAreaPrice>
          </CoffeDiv>
        </CoffeOptions>
      </CoffeArea>
    </HomeContent>
  )
}
