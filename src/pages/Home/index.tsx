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
import { AllCoffes, Coffee } from './AllCoffes'
import { useState } from 'react'

interface NewCoffeeInCartProps {
  id: string
  name: string
  quantity: number
  price: number
  image: string
}

export function Home() {
  const [cartItems, setCartItems] = useState<NewCoffeeInCartProps[]>([])
  const [dataCoffes, setDataCoffes] = useState<Coffee[]>(AllCoffes)

  function handleIncreaseQuantity(id: string) {
    setDataCoffes((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  function handleDecreaseQuantity(id: string) {
    setDataCoffes((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      ),
    )
  }

  function handleAddCoffeeToCard(coffe: Coffee) {
    const newCoffeeInCart: NewCoffeeInCartProps = {
      id: coffe.id,
      name: coffe.name,
      image: coffe.image,
      price: coffe.price,
      quantity: coffe.quantity,
    }

    setCartItems((state) => [...state, newCoffeeInCart])
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
                  <h1>9,90</h1>
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
