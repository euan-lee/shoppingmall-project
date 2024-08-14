import { createLazyFileRoute } from "@tanstack/react-router";
import { OrderDetails } from "../../../Pages/OrderDetails/OrderDetails";

export const Route = createLazyFileRoute(
  "/_OrderDetails/OrderDetails/$OrderId"
)({
  component: OrderDetails,
});
