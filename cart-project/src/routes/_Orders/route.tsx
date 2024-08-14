import { createFileRoute } from "@tanstack/react-router";
import { OrderLayout } from "../../Pages/Orders/OrdersLayout";
import { Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_Orders")({
  component: () => (
    <OrderLayout>
      <Outlet />
    </OrderLayout>
  ),
});
