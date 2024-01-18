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

export const CoffeOptions = styled.div``
// img, tag, título, descricao
