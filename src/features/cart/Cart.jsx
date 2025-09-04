import { useDispatch, useSelector } from "react-redux"
import Button from "./../../ui/Button";
import EmptyCart from "./EmptyCart"
import LinkButton from '../../ui/LinkButton';
import CartItem from "./CartItem"
import { clearCart } from "./cartSlice";
function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(state=> state.cart.cart);
  const userName = useSelector(state=> state.user.userName);
  if (!cart.length) return <EmptyCart />
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {userName}</h2>
      <div className="">
      <ul className="mt-3 divide-y divide-stone-300 border-b border-stone-300">
        {cart.map((item,i) => <CartItem item={item} key={i} />)}
      </ul>
      </div>
      <div className="mt-6 space-x-3">
        <Button type="primary" to="/order/new">Order pizzas</Button>
        <Button type="secondary" onClick={()=> dispatch(clearCart()) }>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
