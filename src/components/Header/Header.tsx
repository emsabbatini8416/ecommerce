import { Link } from 'react-router-dom';
import { useAppSelector } from "../../app/hooks"
import { cartSelector } from "../../slices/cartSlice"

const Header = () => { 
  const { countItems } = useAppSelector(cartSelector)
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <Link className="navbar-brand" to={'/products'}>Emmanuel Sabbatini Shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse flex-grow-1 justify-content-end" id="navbarSupportedContent">
          <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">{countItems}</span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header;