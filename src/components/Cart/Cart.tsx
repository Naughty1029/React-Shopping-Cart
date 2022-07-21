import { useCart } from 'contexts/cart-context'
import * as S from './style'

const Cart = () => {
  const { isOpen, total, openCart, closeCart } = useCart()

  const handleToggleCart = (isOpen: boolean) =>
    isOpen ? closeCart() : openCart()
  return (
    <S.Container isOpen={isOpen}>
      <S.CartButton onClick={() => handleToggleCart(isOpen)}>
        {isOpen ? (
          <span>X</span>
        ) : (
          <S.CartIcon>
            <S.CartQuantity title="Products in cart quantity">
              {total.productQuantity}
            </S.CartQuantity>
          </S.CartIcon>
        )}
      </S.CartButton>
    </S.Container>
  )
}

export default Cart
