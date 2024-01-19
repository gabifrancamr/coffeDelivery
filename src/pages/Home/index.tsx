import {
  HomeContent,
  Intro,
  IntroText,
  Items,
  CoffeArea,
  CoffeOptions,
  CoffeInfo,
  CoffeDiv,
  CoffeAreaPrice,
  Price,
  InfoToBuy,
} from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import introImage from '../../assets/Intro.svg'
import tradicional from '../../assets/Image.svg'

export function Home() {
  return (
    <HomeContent>
      <Intro>
        <IntroText>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <Items>
            <div>
              <span>
                <div className="icon cart">
                  <ShoppingCart weight="fill" />
                </div>
                Compra simples e segura
              </span>
              <span>
                <div className="icon timer">
                  <Timer weight="fill" />
                </div>
                Entrega rápida e rastreada
              </span>
            </div>
            <div>
              <span>
                <div className="icon package">
                  <Package weight="fill" />
                </div>
                Embalagem mantém o café intacto
              </span>

              <span>
                <div className="icon coffe">
                  <Coffee weight="fill" />
                </div>
                O café chega fresquinho até você
              </span>
            </div>
          </Items>
        </IntroText>
        <img src={introImage} alt="café" />
      </Intro>

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
