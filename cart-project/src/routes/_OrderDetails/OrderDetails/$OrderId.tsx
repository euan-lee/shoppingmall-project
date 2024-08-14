import { createFileRoute } from "@tanstack/react-router";
import { OrderDetailsQueryOptions } from "../../../Api/QueryOptions/QueryOptions";
import { OrderDetails } from "../../../Pages/OrderDetails/OrderDetails";
export const Route = createFileRoute("/_OrderDetails/OrderDetails/$OrderId")({
  loader: ({ context: { queryClient }, params: { OrderId } }) => {
    return queryClient.ensureQueryData(OrderDetailsQueryOptions(OrderId));
  },
  component: OrderDetails,
});
