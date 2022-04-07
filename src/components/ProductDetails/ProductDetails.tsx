import React from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { productsSelector, fetchProductById } from "../../slices/productsSlice"
import { addItemToCart} from "../../slices/cartSlice"

const ProductDetails = () => {
  const dispatch = useAppDispatch();
  const { product } = useAppSelector(productsSelector);
  const { id } = useParams<{id: string}>()

  const [quantity, setQuantity] = React.useState<number>(1);

  React.useEffect(() => {
    dispatch(fetchProductById(id))
  }, [dispatch, id])

  const handleOnChange = React.useCallback((e: any) => {
    setQuantity(parseInt(e.target.value, 10))
  }, [setQuantity]);

  const handleAddToCart = React.useCallback(() => {
    dispatch(addItemToCart({
      count: quantity,
      ...product
    }))
    setQuantity(0)
  }, [addItemToCart, quantity, setQuantity])

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={product?.image} alt="..." /></div>
          <div className="col-md-6">
            <div className="small mb-1">SKU: {product?.id}</div>
            <h1 className="display-5 fw-bolder">{product?.title}</h1>
            <div className="fs-5 mb-5">
              <span>{`USD ${product?.price}`}</span>
            </div>
            <p className="lead">{product?.description}</p>
              <div className="d-flex">
                <input className="form-control text-center me-3" type="number" min="1" name="quantity" value={quantity} onChange={handleOnChange}  />
                <button className="btn btn-outline-dark flex-shrink-0" type="button" onClick={handleAddToCart}>
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </button>
              </div>
            </div>
        </div>
    </div>
  </section>
  )
}

export default ProductDetails;