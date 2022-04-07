import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { productsSelector, fetchProducts } from "../../slices/productsSlice"
import Product from "../Product";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(productsSelector);

  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return(
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          { products.map(product => <Product key={product.id} product={product} />) }
        </div>
      </div>
    </section>
  )
}

export default React.memo(ProductList);