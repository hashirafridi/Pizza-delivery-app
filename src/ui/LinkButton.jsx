/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";

export default function LinkButton({children,to}) {
    const className = 'text-blue-500 text-sm hover:text-blue-800 hover:underline'
    const navigate = useNavigate();
    if (to=== "-1") return <button className={className} onClick={() => navigate(-1)}>{children}</button>
  return (
    <Link className={className} to={to}>{children}</Link>
  )
}
