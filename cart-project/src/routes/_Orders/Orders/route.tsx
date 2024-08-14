import { createFileRoute } from "@tanstack/react-router";
import { OrdersQueryOptions } from "../../../Api/QueryOptions/QueryOptions";

export const Route = createFileRoute("/_Orders/Orders")({
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(OrdersQueryOptions()),
});
