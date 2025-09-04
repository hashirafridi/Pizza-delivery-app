import { formatCurrency } from "../../utils/helpers";

/* eslint-disable react/prop-types */
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li>
      <div className="sm:flex sm:flex-row sm:justify-between sm:items-center">
        <p>
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">{isLoadingIngredients ? "is loading... " : ingredients}</p>
    </li>
  );
}

export default OrderItem;
