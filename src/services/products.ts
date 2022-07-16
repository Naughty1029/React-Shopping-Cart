import axios from 'axios'
import { IGetProductsResponse } from 'models'

export const getProducts = async () => {
  let response: IGetProductsResponse = await axios.get(
    'https://gist.githubusercontent.com/Naughty1029/f465d40953a349aaf30d4b7f387239c4/raw/72efd02501442aa3da2469f3d1330e2231ca04c2/shopping-cart-products'
  )

  const { products } = response.data || []

  return products
}
