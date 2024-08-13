import { OrderDetailsQueryOptions } from "../../routes/_OrderDetails/OrderDetails.$OrderId";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Route } from "../../routes/_OrderDetails/OrderDetails.$OrderId";
import { OrderDetailsHeader } from "./ OrderDetailsHeader";
import { OrderDetailsList } from "./OrderDetailsList";
import { OrderDetailFooter } from "./OrderDetailFooter";
import { CatchBoundary } from "@tanstack/react-router";
export const OrderDetails = () => {
  const OrderId = Route.useParams().OrderId;
  const {
    data: { orders },
  } = useSuspenseQuery(OrderDetailsQueryOptions(OrderId));

  return (
    <div className="gap-5 p-12 px-60 ">
      <OrderDetailsHeader />
      <CatchBoundary
        getResetKey={() => "reset"}
        onCatch={(error) => console.error(error)}>
        <OrderDetailsList orders={orders} OrderId={Number(OrderId)} />
        <OrderDetailFooter orders={orders} />
      </CatchBoundary>
    </div>
  );
};
