import { Outlet, createFileRoute } from "@tanstack/react-router";
import { OrderDetailsHeader } from "../../Pages/OrderDetails/ OrderDetailsHeader";

export const Route = createFileRoute("/_OrderDetails")({
  component: () => (
    <div className="bg-gray-100">
      <div className="gap-5 p-12 px-60 ">
        <OrderDetailsHeader />
        <Outlet />
      </div>
    </div>
  ),
});
