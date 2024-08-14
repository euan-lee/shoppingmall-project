import { createFileRoute } from "@tanstack/react-router";
import { OrderPaymentQueryOptions } from "../../Api/QueryOptions/QueryOptions";

export const Route = createFileRoute("/OrderPayment")({
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(OrderPaymentQueryOptions());
  },
});
