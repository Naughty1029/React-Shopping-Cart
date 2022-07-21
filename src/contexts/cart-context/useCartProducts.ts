import { useCartContext } from './CartContextProvider'
import useCartTotal from './useCartTotal'
import { ICartProduct } from 'models'

const useCartProducts = () => {
  const { products, setProducts } = useCartContext()
  const { updateCartTotal } = useCartTotal()

  //カートに同じ商品があった場合に、その商品のquantityを増やす関数
  const updateQuantitySafely = (
    currentProduct: ICartProduct,
    targetProduct: ICartProduct,
    quantity: number
  ): ICartProduct => {
    if (currentProduct.id === targetProduct.id) {
      return Object.assign({
        ...currentProduct,
        quantity: currentProduct.quantity + quantity,
      })
    } else {
      return currentProduct
    }
  }

  //選択した商品をカートに追加する関数
  const addProduct = (newProduct: ICartProduct) => {
    let updatedProducts
    //すでに商品カートに同じ商品があるか確認する
    const isProductAlreadyCart = products.some(
      (product: ICartProduct) => newProduct.id === product.id
    )

    //もしカートに同じ商品があれば、その商品のquantityだけ増やし、なければ商品を追加する
    if (isProductAlreadyCart) {
      updatedProducts = products.map((product: ICartProduct) => {
        return updateQuantitySafely(product, newProduct, newProduct.quantity)
      })
    } else {
      updatedProducts = [...products, newProduct]
    }

    setProducts(updatedProducts)
    updateCartTotal(updatedProducts)
  }

  //対象の商品をカートから削除する関数
  const removeProduct = (productToRemove: ICartProduct) => {
    const updatedProducts = products.filter(
      (product: ICartProduct) => product.id !== productToRemove.id
    )

    setProducts(updatedProducts)
    updateCartTotal(updatedProducts)
  }

  //商品の個数を増やす関す
  const increaseProductQuantity = (productToIncrease: ICartProduct) => {
    const updatedProducts = products.map((product: ICartProduct) => {
      return updateQuantitySafely(product, productToIncrease, +1)
    })

    setProducts(updatedProducts)
    updateCartTotal(updatedProducts)
  }

  //商品の個数を減らす関数
  const decreaseProductQuantity = (productToDecrease: ICartProduct) => {
    const updatedProducts = products.map((product: ICartProduct) => {
      return updateQuantitySafely(product, productToDecrease, -1)
    })

    setProducts(updatedProducts)
    updateCartTotal(updatedProducts)
  }

  return {
    products,
    addProduct,
    removeProduct,
    increaseProductQuantity,
    decreaseProductQuantity,
  }
}

export default useCartProducts
