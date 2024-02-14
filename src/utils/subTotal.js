import React from 'react'
import { useSelector } from 'react-redux'

function subTotal() {
  const cartProducts = useSelector(state => state.cart)
  let subTotalPrice = 0

  cartProducts.forEach(product => {
    const productTotal = (product.item.price * product.quantity)
    subTotalPrice += productTotal
  })

return subTotalPrice
}

export default subTotal