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

  return (
    <S.Container sku={sku} tabIndex={1}>
      <S.Image alt={title}></S.Image>
    </S.Container>
  )
}

export default Product
