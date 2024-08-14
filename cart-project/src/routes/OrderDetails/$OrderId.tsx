import { createFileRoute } from "@tanstack/react-router";
import { getOrder } from "../../Api/Api";
import { queryOptions } from "@tanstack/react-query";

export const OrderDetailsQueryOptions = (OrderId: string) => {
  return queryOptions({
    queryKey: ["OrderDetails", { OrderId }],
    queryFn: () => getOrder(OrderId),
  });
};

export const Route = createFileRoute("/OrderDetails/$OrderId")({
  loader: ({ context: { queryClient }, params: { OrderId } }) => {
    return queryClient.ensureQueryData(OrderDetailsQueryOptions(OrderId));
  },
});
