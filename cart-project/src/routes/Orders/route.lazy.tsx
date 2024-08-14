import { createLazyFileRoute } from "@tanstack/react-router";
import { Orders } from "../../Pages/Orders/Orders";
import { getOrders } from "../../Api/Api";
export const OrdersQueryOptions = () => {
  return { queryKey: ["orders"], queryFn: () => getOrders() };
};

export const Route = createLazyFileRoute("/Orders")({
  component: Orders,
  notFoundComponent: () => {
    return <p>order page doesn't exist!</p>;
  },
});
