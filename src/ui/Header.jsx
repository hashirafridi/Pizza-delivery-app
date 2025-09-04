import { Link } from "react-router-dom";
import Username from "../features/user/userName";
import SearchOrder from "../features/order/SearchOrder"
export default function Header() {
  return (
    <header className="bg-yellow-400 tracking-widest font-semibold uppercase text-4xl px-4 sm:px-6 py-3 border-b border-stone-300 flex items-center justify-between">
        <Link to="/"> Fast React Pizza.Co </Link>
        <SearchOrder />
        <Username />
    </header>
  )
}
