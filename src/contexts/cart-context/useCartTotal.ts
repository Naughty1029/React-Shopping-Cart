import { ICartProduct } from 'models'
import { useCartContext } from './CartContextProvider'

//Cartの合計情報を監視するためのカスタムフック
const useCartTotal = () => {
  const { total, setTotal } = useCartContext()

  //商品カートの情報を更新するための関数
  const updateCartTotal = (products: ICartProduct[]) => {
    //商品の合計数
    const productQuantity = products.reduce(
      (sum: number, product: ICartProduct) => {
        sum += product.quantity
        return sum
      },
      0 //initialValue
    )

    //商品の合計金額
    const totalPrice = products.reduce(
      (sum: number, product: ICartProduct) => {
        sum += product.price * product.quantity
        return sum
      },
      0 //initialValue
    )

    //最大分割回数
    const installments = products.reduce(
      (greater: number, product: ICartProduct) => {
        greater =
          product.installments > greater ? product.installments : greater
        return greater
      },
      0
    )

    const total = {
      productQuantity,
      installments,
      totalPrice,
      currencyId: 'USD',
      currencyFormat: '$',
    }

    setTotal(total)
  }

  return {
    total,
    updateCartTotal,
  }
}

export default useCartTotal
