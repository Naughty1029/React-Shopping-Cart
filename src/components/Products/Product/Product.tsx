import { useCart } from 'contexts/cart-context'
import formatPrice from 'utils/formatPrice'
import { IProduct } from 'models'

import * as S from './style'

interface IProps {
  product: IProduct
}

const Product = ({ product }: IProps) => {
  const { openCart, addProduct } = useCart()
  const {
    sku,
    title,
    price,
    installments,
    currencyId,
    currencyFormat,
    isFreeShipping,
  } = product

  const formattedPrice = formatPrice(price, currencyId)
  let productInstallment //分割払いの情報を格納する

  if (installments) {
    const installmentPrice = price / installments

    productInstallment = (
      <S.Installment>
        <span>or {installments} x</span>
        <b>
          {currencyFormat}
          {formatPrice(installmentPrice, currencyId)}
        </b>
      </S.Installment>
    )
  }

  const handleAddProduct = () => {
    addProduct({ ...product, quantity: 1 })
    openCart()
  }

  return (
    <S.Container sku={sku} tabIndex={1}>
      {isFreeShipping && <S.Stopper>Free shipping</S.Stopper>}
      <S.Image alt={title}></S.Image>
      <S.Title>{title}</S.Title>
      <S.Price>
        <S.Val>
          <small>{currencyFormat}</small>
          <b>{formattedPrice.substring(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substring(formattedPrice.length - 3)}</span>
        </S.Val>
        {productInstallment}
      </S.Price>
      <S.BuyButton onClick={handleAddProduct}>Add to cart</S.BuyButton>
    </S.Container>
  )
}

export default Product
