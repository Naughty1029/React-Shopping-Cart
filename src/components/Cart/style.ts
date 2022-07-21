import styled from 'styled-components'

export const CartButton = styled.button`
  border: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  color: #ececec;
  background-color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  line-height: 50px;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  z-index: 2;
  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.secondary};
  }
  &:hover {
    filter: brightness(85%);
  }
`

interface IContainer {
  isOpen: boolean
}

export const Container = styled.div<IContainer>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '100%')};
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  z-index: 99;
  transition: right 0.2s;
  ${CartButton} {
    left: ${({ isOpen }) => (isOpen ? '0' : '-50px')};
    background-color: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.black : theme.colors.primary};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 450px;
    right: ${({ isOpen }) => (isOpen ? '0' : '-450px')};
    ${CartButton} {
      left: -50px;
    }
  }
`

interface ICartIcon {
  large?: boolean
}
export const CartIcon = styled.div<ICartIcon>`
  width: ${({ large }) => (large ? '60px' : '50px')};
  height: ${({ large }) => (large ? '60px' : '50px')};
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-right: 15px;
  background-image: url(${require('static/cart-icon.png')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-size: 50%;
`

export const CartQuantity = styled.div`
  display: inline-block;
  width: 18px;
  height: 18px;
  color: #0c0b10;
  font-weight: bold;
  font-size: 0.7em;
  text-align: center;
  line-height: 18px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  bottom: 0;
  right: 5px;
`