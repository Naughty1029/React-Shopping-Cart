import { useEffect } from 'react'

import Products from 'components/Products'
import Loader from 'components/Loader'
import Filter from 'components/Filter'
import Cart from 'components/Cart/Cart'

import { useProducts } from 'contexts/products-context'

import * as S from './style'

function App() {
  const { isFetching, products, fetchProducts } = useProducts()

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <S.Container>
      {isFetching && <Loader />}
      <S.TwoColumnGrid>
        <S.Side>
          <Filter />
        </S.Side>
        <S.Main>
          <S.MainHeader>
            <p>{products.length} Products found</p>
          </S.MainHeader>
          <Products products={products} />
        </S.Main>
      </S.TwoColumnGrid>
      <Cart />
    </S.Container>
  )
}

export default App
