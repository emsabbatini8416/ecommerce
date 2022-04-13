import React from "react";
import { useAppSelector } from "../../app/hooks"
import { cartSelector } from "../../slices/cartSlice"

import CartListItem from "./CartListItem";

const CardList = () => {
  const { items } = useAppSelector(cartSelector);
  
  return(
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" className="border-0 bg-light">
              <div className="p-2 px-3 text-uppercase">Product</div>
            </th>
            <th scope="col" className="border-0 bg-light">
              <div className="py-2 text-uppercase">Price</div>
            </th>
            <th scope="col" className="border-0 bg-light">
              <div className="py-2 text-uppercase">Quantity</div>
            </th>
            <th scope="col" className="border-0 bg-light">
              <div className="py-2 text-uppercase">Remove</div>
            </th>
          </tr>
        </thead>
        <tbody>
          { items.map(item => <CartListItem key={item?.itemId} {...item} />) }
        </tbody>
      </table>
    </div>
  )
}

export default React.memo(CardList);