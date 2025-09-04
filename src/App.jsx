import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as menuLoader } from "./utils/menuLoader";
import { loader as orderLoader } from "./utils/orderLoader";
import { action as updateOrderFuction } from "./features/order/UpdateOrder";

import Home from "./ui/Home";
import Error from "./ui/Error"
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart"
import CreateOrder, {action as createOrderAction} from "./features/order/CreateOrder"
import Order from "./features/order/Order"
import AppLayout from "./ui/AppLayout";


function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/menu",
          element: <Menu />,
          loader: menuLoader,
          errorElement: <Error />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/order/new",
          element: <CreateOrder />,
          action:createOrderAction
        },
        {
          path: "/order/:orderId",
          element: <Order />,
          loader: orderLoader,
          errorElement: <Error />,
          action:updateOrderFuction
        }
      ]
    }

  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App
