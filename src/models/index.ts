//APIで返ってきた商品情報オブジェクトの型指定
export interface IProduct {
  id: number
  sku: number
  title: string
  description: string
  availableSizes: string[]
  style: string
  price: number
  installments: number
  currencyId: string
  currencyFormat: string
  isFreeShipping: boolean
}

//Cartに入れられた商品情報オブジェクトの型指定
export interface ICartProduct extends IProduct {
  quantity: number
}

export interface ICartTotal {
  productQuantity: number
  installments: number
  totalPrice: number
  currencyId: string
  currencyFormat: string
}

//API返り値の型指定
export interface IGetProductsResponse {
  data: {
    products: IProduct[]
  }
}
