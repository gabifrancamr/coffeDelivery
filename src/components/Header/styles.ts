import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors['base-background']};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 5;
  padding: 2rem 0;
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const HeaderButton = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
`

export const Localization = styled(HeaderButton)`
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  gap: 0.25rem;
  background-color: ${({ theme }) => theme.colors['brand-purple-light']};
  color: ${({ theme }) => theme.colors['brand-purple-dark']};
  line-height: 1.3;

  &:first-child {
    // ícone de localização
    color: ${({ theme }) => theme.colors['brand-purple']};
  }
`

export const ShoppingCartButton = styled(HeaderButton)`
  background-color: ${({ theme }) => theme.colors['brand-yellow-light']};
  cursor: pointer;

  a {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
    display: flex;
    align-items: center;
  }
`
