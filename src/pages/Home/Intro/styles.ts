import styled from 'styled-components'

export const Intro = styled.div`
  display: flex;
  gap: 1rem;
`

export const IntroText = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: bolder;
    font-family: ${({ theme }) => theme.fonts.title};
    line-height: 1.3;
    color: ${({ theme }) => theme.colors['base-title']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    margin: 1rem 0 4.125rem 0;
    color: ${({ theme }) => theme['base-subtitle']};
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
    color: ${({ theme }) => theme.colors['base-text']};

    .icon {
      border-radius: 50%;
      padding: 0.5rem;
      display: flex;
      color: ${({ theme }) => theme.colors['base-white']};
    }

    .cart {
      background-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    }

    .timer {
      background-color: ${({ theme }) => theme.colors['brand-yellow']};
    }

    .package {
      background-color: ${({ theme }) => theme.colors['base-text']};
    }

    .coffe {
      background-color: ${({ theme }) => theme.colors['brand-purple']};
    }
  }
`
