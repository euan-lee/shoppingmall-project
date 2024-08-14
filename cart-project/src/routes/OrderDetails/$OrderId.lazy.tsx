import { createLazyFileRoute } from "@tanstack/react-router";
import { OrderDetails } from "../../Pages/OrderDetails/OrderDetails";
import { getOrder } from "../../Api/Api";
import { queryOptions } from "@tanstack/react-query";

export const OrderDetailsQueryOptions = (OrderId: string) => {
  return queryOptions({
    queryKey: ["OrderDetails", { OrderId }],
    queryFn: () => getOrder(OrderId),
  });
};

export const Route = createLazyFileRoute("/OrderDetails/$OrderId")({
  component: OrderDetails,
});
