import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from "../../app/hooks"
import { cartSelector } from "../../slices/cartSlice"

const CartSummary = () => {
  const history = useHistory();
  const { subTotal, shipping, tax, total } = useAppSelector(cartSelector);

  const handleGoCheckout = React.useCallback((e: any) => {
    e.preventDefault();
    history.push('/checkout')
  }, [])

  return (
    <>
      <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Order summary</div>
      <div className="p-4">
        <p className="mb-4"><em>Shipping and additional costs are calculated based on values you have entered.</em></p>
        <ul className="list-unstyled mb-4">
          <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>{`USD ${subTotal}`}</strong></li>
          <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>{`USD ${shipping}`}</strong></li>
          <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>{`USD ${tax}`}</strong></li>
          <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
            <h5 className="fw-bold">{`USD ${total}`}</h5>
          </li>
        </ul>
        <a className="btn btn-dark rounded-pill py-2 d-md-block" onClick={handleGoCheckout}>Procceed to checkout</a>
      </div>
    </>
  )
}
export default CartSummary;