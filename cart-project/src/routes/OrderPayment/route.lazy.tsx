import { createLazyFileRoute } from "@tanstack/react-router";
import { OrderPayment } from "../../Pages/OrderPayment/OrderPayment";

export const Route = createLazyFileRoute("/OrderPayment")({
  component: OrderPayment,
});
