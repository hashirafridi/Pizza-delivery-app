/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem"
import UpdateItemQuantity from "./updateItemQuantity";
function CartItem({ item }) {
   const cart = useSelector(state=> state.cart.cart);
  const { pizzaId, name, quantity, totalPrice } = item;
  const currQuantity = cart.find(item => item.pizzaId === pizzaId)?.quantity ?? 0;
  return (
    <li className="py-3 sm:flex sm:felx sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} currentQuantity={currQuantity}/>
        <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
