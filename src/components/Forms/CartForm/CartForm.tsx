import React from "react";
import { useAppSelector } from "../../../app/hooks"
import { cartSelector } from "../../../slices/cartSlice"

type CartFormItemProps = {
  count: number 
  title: string
  price: string
}

const CartFormItem = ({ title, price, count }: CartFormItemProps) => (
  <li className="list-group-item d-flex justify-content-between lh-condensed">
    <div>
      <h6 className="my-0">{title}</h6>
      <small className="text-muted">{`x ${count}`}</small>
    </div>
    <span className="text-muted">{`USD ${price}`}</span>
  </li>
)

const CartForm = () => {
  const { items, subTotal } = useAppSelector(cartSelector);
  return (
    <>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Your cart</span>
      </h4>
      <ul className="list-group mb-3">
        {
          items.length > 0 && items.map((item: any) => <CartFormItem key={item?.itemId} count={item.count} {...item.product} />)
        } 
        <li className="list-group-item d-flex justify-content-between">
            <span>SubTotal</span>
            <strong>{`USD ${subTotal}`}</strong>
        </li>
      </ul>
    </>
  )
}

export default CartForm;