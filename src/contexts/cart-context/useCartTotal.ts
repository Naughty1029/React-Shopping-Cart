import { ICartProduct } from 'models'
import { useCartContext } from './CartContextProvider'
//Cartの合計金額を監視するためのカスタムフック
const useCartTotal = () => {
  const { total, setTotal } = useCartContext()

  //合計金額を更新するための関数
  const updateCartTotal = (products: ICartProduct[]) => {
    const productQuantity = products.reduce(
      (sum: number, product: ICartProduct) => {
        sum += product.quantity
        return sum
      },
      0
    )

    const totalPrice = products.reduce()
  }

  return {
    total,
    updateCartTotal,
  }
}

export default useCartTotal
