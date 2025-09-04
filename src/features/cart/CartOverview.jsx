import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { formatCurrency } from "./../../utils/helpers"
function CartOverview() {
const cart = useSelector((state)=> state.cart.cart);
const totalCartrQuantity = cart.reduce((sum,item)=> sum + item.quantity , 0);
const totalPrice = cart.reduce((sum,item)=> sum + item.unitPrice , 0);
if(!totalCartrQuantity) return null;
  return (
    <div className="bg-slate-800 text-slate-300 uppercase px-4 py-4 sm:px-6 text-sm md:text-base
    flex items-center justify-between">
      <p className="space-x-4 sm:space-x-6 font-sans">
        <span>{totalCartrQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
