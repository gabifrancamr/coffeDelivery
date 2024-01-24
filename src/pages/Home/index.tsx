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
import { Coffee } from './AllCoffes'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartProvider'

export function Home() {
  const { dataCoffes, addCoffeeToCard, decreaseQuantity, increaseQuantity } =
    useContext(CartContext)

  function handleIncreaseQuantity(id: string) {
    increaseQuantity(id)
  }

  function handleDecreaseQuantity(id: string) {
    decreaseQuantity(id)
  }

  function handleAddCoffeeToCard(coffe: Coffee) {
    addCoffeeToCard(coffe)
  }

  return (
    <HomeContent>
      <IntroArea />
      <CoffeArea>
        <h1>Nossos cafés</h1>
        <CoffeOptions>
          {dataCoffes.map((coffe) => (
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
                  <h1>{coffe.price}</h1>
                </Price>
                <InfoToBuy>
                  <QuantityArea>
                    <button>
                      <Minus onClick={() => handleDecreaseQuantity(coffe.id)} />
                    </button>
                    <span>{coffe.quantity}</span>
                    <button onClick={() => handleIncreaseQuantity(coffe.id)}>
                      <Plus />
                    </button>
                  </QuantityArea>
                  <ShoppingCartIcon
                    onClick={() => handleAddCoffeeToCard(coffe)}
                  >
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
