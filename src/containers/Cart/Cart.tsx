import CartList from "../../components/CartList";
import CartSummary from "../../components/CartSummary";

const CartContainer = () => (
  <section className="py-5">
    <div className="container px-4 px-lg-5 my-5">
      <div className="row">
        <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-3">
          <CartList />
        </div>
      </div>
      <div className="row py-5 p-4 bg-white rounded shadow-sm">
        <div className="col-lg-12">
          <CartSummary />
        </div>
      </div>
    </div>
  </section>
)

export default CartContainer;