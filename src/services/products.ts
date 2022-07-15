import axios from 'axios'
import { IGetProductsResponse } from 'models'

export const getProducts = async () => {
  let response: IGetProductsResponse = await axios.get(
    'https://gist.githubusercontent.com/Naughty1029/f465d40953a349aaf30d4b7f387239c4/raw/675eb98ddcd0be4a7a32b19c5d49fcb25f7a959b/shopping-cart-products'
  )

  const { products } = response.data || []

  return products
}
