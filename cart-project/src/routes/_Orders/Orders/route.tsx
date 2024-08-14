import { createFileRoute } from "@tanstack/react-router";
import { OrdersQueryOptions } from "../../../Api/QueryOptions/QueryOptions";
import { Orders } from "../../../Pages/Orders/Orders";
export const Route = createFileRoute("/_Orders/Orders")({
  component: Orders,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(OrdersQueryOptions()),
});
