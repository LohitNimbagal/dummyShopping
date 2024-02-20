import React from 'react'
import { useSelector } from 'react-redux'

function subTotal() {
  const cartProducts = useSelector(state => state.cart)
  const currency = useSelector(state => state.currency)
  let subTotalPrice = 0

  cartProducts.forEach(product => {
    const productTotal = (product.item.price * product.quantity * Math.floor(currency.countryRate))
    subTotalPrice += productTotal
  })

return subTotalPrice
}

export default subTotal