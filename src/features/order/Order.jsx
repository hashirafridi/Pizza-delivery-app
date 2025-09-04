// Test ID: IIDSAT

import { useFetcher, useLoaderData } from "react-router-dom";
import OrderItem from "./OrderItem"
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import { useEffect } from "react";
// import SearchOrder from "./SearchOrder";

function Order() {
  const fetcher = useFetcher();
  useEffect(
    function(){
      if (!fetcher.data && fetcher.state === "idle") fetcher.load("/menu")
    },[fetcher]
  )
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
const order = useLoaderData();
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
 <div className="px-4 py-6 max-w-3xl mx-auto space-y-8 bg-white rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
  {/* Header Section */}
  <div className="space-y-3">
    <h2 className="text-2xl font-bold text-gray-900">
      🧾 Order #{id} Status
    </h2>

    <div className="flex items-center flex-wrap gap-2 text-sm">
      {priority && (
        <span className="inline-flex items-center gap-1 px-2 py-1 bg-red-100 text-red-700 font-bold uppercase tracking-wide text-xs rounded-full shadow-sm">
          <span>🔥 Priority</span>
        </span>
      )}

      {status === "preparing" && (
        <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 font-semibold uppercase tracking-wide text-xs rounded-full shadow-sm">
          <span>🍕 Preparing</span>
        </span>
      )}

      <span className="capitalize text-gray-500">{status} order</span>
    </div>
  </div>

  {/* Delivery Time */}
  <div className="space-y-1 text-sm">
    <p
      className={`font-medium ${
        deliveryIn >= 0 ? "text-emerald-600" : "text-red-600"
      }`}
    >
      {deliveryIn >= 0
        ? `⏳ Only ${calcMinutesLeft(estimatedDelivery)} minutes left`
        : "⚠️ Order should have arrived"}
    </p>
    <p className="text-gray-400">
      (Estimated delivery: {formatDate(estimatedDelivery)})
    </p>
  </div>

  {/* Order Items List */}
  <div className="space-y-4 bg-gray-50 p-5 rounded-lg border border-gray-300">
    <h3 className="text-lg font-semibold text-gray-700">🧺 Your Items</h3>
    <ul className="space-y-3">
      {cart.map((item,i) => (
        <li
          key={i}
          className="bg-white rounded-lg shadow-sm p-4 border border-gray-300 hover:shadow-md transition"
        >
          <OrderItem item={item} isLoadingIngredients={fetcher.state === "loading"} ingredients={fetcher.data?.find(el => el.id === item.pizzaId).ingredients?.join(", ")} />
        </li>
      ))}
    </ul>
  </div>

  {/* Price Breakdown */}
  <div className="m-1 p-3 pt-4 border border-gray-300 text-sm space-y-1">
    <p>
      🍕 <span className="text-gray-600">Pizza total:</span>{" "}
      <span className="font-medium">{formatCurrency(orderPrice)}</span>
    </p>
    {priority && (
      <p className="text-red-600 font-semibold">
        🔺 Priority fee: {formatCurrency(priorityPrice)}
      </p>
    )}
    <p className="text-lg font-bold text-gray-800 pt-2">
      💵 Total to pay on delivery:{" "}
      {formatCurrency(orderPrice + priorityPrice)}
    </p>
  </div>
</div>


  );
}

export default Order;
