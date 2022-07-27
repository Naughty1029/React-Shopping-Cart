import formatPrice from 'utils/formatPrice'
import { ICartProduct } from 'models'

import * as S from './style'
import { useCart } from 'contexts/cart-context'

interface IProps {
  product: ICartProduct
}

const CartProduct = ({ product }: IProps) => {
  const { removeProduct, increaseProductQuantity, decreaseProductQuantity } =
    useCart()
  const {
    title,
    sku,
    style,
    price,
    currencyId,
    currencyFormat,
    availableSizes,
    quantity,
  } = product

  const handleRemoveProduct = () => removeProduct(product)
  const handleIncreaseProductQuantity = () => increaseProductQuantity(product)
  const handleDecreaseProductQuantity = () => decreaseProductQuantity(product)
  return (
    <S.Container>
      <S.DeleteButton
        title="カートから商品を削除"
        onClick={handleRemoveProduct}
      />
      <S.Image src={require(`static/products/${sku}-1-cart.webp`)} />
      <S.Details>
        <S.Title>{title}</S.Title>
        <S.Desc>
          {`${availableSizes[0]} | ${style}`} <br />
          Quantity: {quantity}
        </S.Desc>
      </S.Details>

      <S.Price>
        <p>{`${currencyFormat}  ${formatPrice(price, currencyId)}`}</p>
        <div>
          <S.ChangeQuantity
            onClick={handleDecreaseProductQuantity}
            disabled={quantity === 1 ? true : false}
          >
            -
          </S.ChangeQuantity>
          <S.ChangeQuantity onClick={handleIncreaseProductQuantity}>
            +
          </S.ChangeQuantity>
        </div>
      </S.Price>
    </S.Container>
  )
}

export default CartProduct
