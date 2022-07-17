import formatPrice from 'utils/formatPrice'
import { IProduct } from 'models'

import * as S from './style'

interface IProps {
  product: IProduct
}

const Product = ({ product }: IProps) => {
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
  console.log(formattedPrice)

  return (
    <S.Container sku={sku} tabIndex={1}>
      <S.Image alt={title}></S.Image>
      <S.Title>{title}</S.Title>
      <S.Price>
        <S.Val>
          <small>{currencyFormat}</small>
          <b>{formattedPrice.substring(0, formattedPrice.length - 3)}</b>
          <span>{formattedPrice.substring(formattedPrice.length - 3)}</span>
        </S.Val>
      </S.Price>
      <S.BuyButton>Add to cart</S.BuyButton>
    </S.Container>
  )
}

export default Product
