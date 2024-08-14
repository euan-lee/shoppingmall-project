import { createFileRoute } from "@tanstack/react-router";
import { OrderPaymentQueryOptions } from "../../Api/QueryOptions/QueryOptions";
import { OrderPayment } from "../../Pages/OrderPayment/OrderPayment";

export const Route = createFileRoute("/OrderPayment")({
  component: OrderPayment,
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(OrderPaymentQueryOptions());
  },
});
