import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { productsSelector, fetchProducts } from "../../slices/productsSlice"
import ProductListItem from "./ProductListItem";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector(productsSelector);

  React.useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
      { products.map(product => <ProductListItem key={product.id} product={product} />) }
    </div>
  )
}

export default React.memo(ProductList);