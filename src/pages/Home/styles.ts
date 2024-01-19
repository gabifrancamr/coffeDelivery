import styled from 'styled-components'

export const HomeContent = styled.main`
  margin-top: 4rem;
`

export const Intro = styled.div`
  display: flex;
  gap: 1rem;
`

export const IntroText = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: bolder;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    margin: 1rem 0 4.125rem 0;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Items = styled.div`
  display: flex;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['base-text']};

    .icon {
      border-radius: 50%;
      padding: 0.5rem;
      display: flex;
      color: ${(props) => props.theme.white};
    }

    .cart {
      background-color: ${(props) => props.theme['yellow-dark']};
    }

    .timer {
      background-color: ${(props) => props.theme.yellow};
    }

    .package {
      background-color: ${(props) => props.theme['base-text']};
    }

    .coffe {
      background-color: ${(props) => props.theme.purple};
    }
  }
`

export const CoffeArea = styled.div`
  margin-top: 4rem;
  h1 {
    font-size: 2rem;
    font-weight: bolder;
  }
`

export const CoffeOptions = styled.div`
  display: flex;
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
  }
`

export const InfoToBuy = styled.div`
  display: flex;
  gap: 0.75rem;
  div {
    display: flex;
  }
`
