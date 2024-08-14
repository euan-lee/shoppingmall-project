import { createFileRoute } from "@tanstack/react-router";
import { getOrders } from "../../Api/Api";
export const OrdersQueryOptions = () => {
  return { queryKey: ["orders"], queryFn: () => getOrders() };
};

export const Route = createFileRoute("/Orders/Orders")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(OrdersQueryOptions()),
});
