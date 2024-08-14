import { createFileRoute } from "@tanstack/react-router";
import { OrderDetailsQueryOptions } from "../../../Api/QueryOptions/QueryOptions";

export const Route = createFileRoute("/_OrderDetails/OrderDetails/$OrderId")({
  loader: ({ context: { queryClient }, params: { OrderId } }) => {
    return queryClient.ensureQueryData(OrderDetailsQueryOptions(OrderId));
  },
});
