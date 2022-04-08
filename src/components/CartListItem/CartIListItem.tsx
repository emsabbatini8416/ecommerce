import React from "react"
import { useAppDispatch } from "../../app/hooks"
import { removeItemFromCart } from "../../slices/cartSlice"

type CartListItemProps = {
  itemId: number;
  count: number;
  product: any;
}

const CartListItem = ({ itemId, count, product }: CartListItemProps) => {
  const dispatch = useAppDispatch();
  
  const handleOnRemove = React.useCallback((e: any) => {
    e.preventDefault();
    dispatch(removeItemFromCart({ itemId }))
  }, [itemId, dispatch, removeItemFromCart])

  return (
    <tr>
      <th scope="row" className="border-0">
        <div className="p-2">
          <img src={product?.image} alt="" width="70" className="img-fluid rounded shadow-sm" />
          <div className="ms-3 d-inline-block align-middle">
            <h5 className="mb-0"> <a href="#" className="text-dark d-inline-block align-middle">{product?.title}</a></h5>
          </div>
        </div>
      </th>
      <td className="border-0 align-middle"><strong>{`USD ${product?.price}`}</strong></td>
      <td className="border-0 align-middle"><strong>{count}</strong></td>
      <td className="border-0 align-middle">
        <a href="#" className="text-dark" onClick={handleOnRemove}>
          <i className="bi bi-trash"></i>
        </a>
      </td>
    </tr> 
  )
};

export default CartListItem;