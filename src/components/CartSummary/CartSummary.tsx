const CartSummary = () => {
  return (
    <>
      <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Order summary</div>
      <div className="p-4">
        <p className="mb-4"><em>Shipping and additional costs are calculated based on values you have entered.</em></p>
        <ul className="list-unstyled mb-4">
          <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order Subtotal </strong><strong>$390.00</strong></li>
          <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Shipping and handling</strong><strong>$10.00</strong></li>
          <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Tax</strong><strong>$0.00</strong></li>
          <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Total</strong>
            <h5 className="fw-bold">$400.00</h5>
          </li>
        </ul>
        <a href="#" className="btn btn-dark rounded-pill py-2 d-md-block">Procceed to checkout</a>
      </div>
    </>
  )
}
export default CartSummary;