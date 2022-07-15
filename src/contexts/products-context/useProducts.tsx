import { useCallback } from 'react'
import { useProductsContext } from './ProductsContext'
import { IProduct } from 'models'
import { getProducts } from 'services/products'

const useProducts = () => {
  const {
    isFetching,
    setIsFetching,
    products,
    setProducts,
    filters,
    setFilters,
  } = useProductsContext() //state（コンテキスト）を取得

  //商品を全て取得する関数
  const fetchProducts = useCallback(() => {
    setIsFetching(true)
    getProducts().then((products: IProduct[]) => {
      setIsFetching(false)
      setProducts(products)
    })
  }, [setIsFetching, setProducts])

  //商品にフィルターをかける関数
  const filterProducts = (filters: string[]) => {
    setIsFetching(true)

    getProducts().then((products: IProduct[]) => {
      setIsFetching(false)
      let filteredProducts

      if (filters && filters.length > 0) {
        filteredProducts = products.filter((p: IProduct) =>
          filters.find((filter: string) =>
            p.availableSizes.find((size: string) => size === filter)
          )
        )
      } else {
        filteredProducts = products
      }

      setFilters(filters)
      setProducts(filteredProducts)
    })
  }

  return {
    isFetching,
    fetchProducts,
    products,
    filterProducts,
    filters,
  }
}

export default useProducts