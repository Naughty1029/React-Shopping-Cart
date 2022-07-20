import { useCartContext } from './CartContextProvider'

const useCart = () => {
  const { isOpen, setIsOpen } = useCartContext()
}

export default useCart
