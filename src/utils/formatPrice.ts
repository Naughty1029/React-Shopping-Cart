const formatPrice = (price: number, currencyId: string) => {
  switch (currencyId) {
    case 'BRL':
      return price.toFixed(2).replace('.', ',')
    default:
      return price.toFixed(2)
  }
}

export default formatPrice
