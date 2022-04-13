import CartForm from '../../components/Forms/CartForm';
import CheckoutForm from '../../components/Forms/CheckoutForm';

const Checkout = () =>  (
  <div className="checkout">
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row">
          <div className="col-md-4 order-md-2 mb-4">
            <CartForm />
          </div>
          <div className="col-md-8 order-md-1">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default Checkout;