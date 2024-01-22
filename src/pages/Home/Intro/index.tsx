import { Intro, IntroText, Items } from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import introImage from '../../../assets/Intro.svg'

export function IntroArea() {
  return (
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
  )
}
