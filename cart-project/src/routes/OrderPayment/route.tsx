import { createFileRoute } from "@tanstack/react-router";
import { OrderPayment } from "../../Pages/OrderPayment/OrderPayment";
import { OrderPaymentQueryOptions } from "../../Api/QueryOptions/QueryOptions";

export const Route = createFileRoute("/OrderPayment")({
  component: OrderPayment,
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(OrderPaymentQueryOptions());
  },
});
