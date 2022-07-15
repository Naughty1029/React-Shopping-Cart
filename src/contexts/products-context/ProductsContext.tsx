import { createContext, useContext, FC, useState } from 'react'
import { IProduct } from 'models'

export interface IProductsContext {
  isFetching: boolean
  setIsFetching(state: boolean): void
  products: IProduct[]
  setProducts(products: IProduct[]): void
  filters: string[]
  setFilters(filters: string[]): void
}

const ProductsContext = createContext<IProductsContext | undefined>(undefined) //初期値はundefined

/*
コンテキスト（state）を返すための関数 
カスタムフック（useProducts）で利用する
*/
const useProductsContext = (): IProductsContext => {
  const context = useContext(ProductsContext)

  if (!context) {
    throw new Error('useProductsContext must be used within a ProductsProvider')
  }

  return context
}

const ProductsProvider: FC = (props) => {
  const [isFetching, setIsFetching] = useState(false)
  const [products, setProducts] = useState<IProduct[]>([])
  const [filters, setFilters] = useState<string[]>([])

  const ProductsContextValue: IProductsContext = {
    isFetching,
    setIsFetching,
    products,
    setProducts,
    filters,
    setFilters,
  }

  return <ProductsContext.Provider value={ProductsContextValue} {...props} />
}

export { ProductsProvider, useProductsContext }
