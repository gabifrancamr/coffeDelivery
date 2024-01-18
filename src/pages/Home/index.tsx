import {
  HomeContent,
  Intro,
  IntroText,
  Items,
  CoffeArea,
  CoffeOptions,
} from './styles'
import introImage from '../../assets/Intro.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

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
          <div>
            <div>
              <span>tradicional</span>
              <h1>Expresso Tradicional</h1>
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </div>
            <div>
              <span>preço</span>
              <div>quantidade</div>
            </div>
          </div>
        </CoffeOptions>
      </CoffeArea>
    </HomeContent>
  )
}
