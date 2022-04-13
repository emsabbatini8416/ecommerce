import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from "../../../app/hooks"
import { addToCart } from "../../../slices/cartSlice"

type ProductListItemProps = {
  product: any
}

const ProductListItem = ({ product }: ProductListItemProps) => { 
  const dispatch = useAppDispatch();
  
  const handleAddToCart = React.useCallback(() => {
    dispatch(addToCart({
      count: 1,
      product: product
    }))
  }, [product, dispatch])

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img width="450" height="300" className="card-img-top" src={product?.image} alt="..." />
        <div className="card-body p-4">
          <div className="text-center">
            <Link to={`/products/${product?.id}`}><h5 className="fw-bolder">{product?.title}</h5></Link>
            {`USD ${product?.price}`}
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            <button type="button" className="btn btn-outline-dark mt-auto" onClick={handleAddToCart}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListItem;