import styled from 'styled-components'

export const HomeContent = styled.main`
  margin-top: 4rem;
`

export const CoffeArea = styled.div`
  margin-top: 4rem;
  h1 {
    font-size: 2rem;
    font-weight: bolder;
  }
`

export const CoffeOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 4rem;
`

export const CoffeDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-card']};
  border-top-left-radius: 10px;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 50px;
  padding: 1rem;
`

export const CoffeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transform: translateY(-15%);

  span {
    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
    border-radius: 8px;
    padding: 0.25rem 0.5rem;
    font-size: 0.625rem;
    line-height: 1.3;
    font-weight: bold;
    margin: 1rem;
    text-transform: uppercase;
  }

  h1 {
    font-size: 1.25rem;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    max-width: 13.5rem;
    margin: 0.75rem 0;
  }
`

export const CoffeAreaPrice = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: -2rem;
`

export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  span {
    font-size: 0.875rem;
  }
  h1 {
    font-size: 1.5rem;
    font-weight: bolder;
    color: ${(props) => props.theme['base-text']};
  }
`

export const InfoToBuy = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
`

export const QuantityArea = styled.div`
  background-color: ${(props) => props.theme['base-button']};
  gap: 0.4rem;
  border-radius: 6px;
  font-weight: bold;
  color: ${(props) => props.theme['base-title']};

  button {
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }
`

export const ShoppingCartIcon = styled.div`
  background-color: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  border-radius: 6px;
  cursor: pointer;
`
