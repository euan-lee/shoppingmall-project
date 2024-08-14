import { OrderDetailsQueryOptions } from "../../Api/QueryOptions/QueryOptions";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Route } from "../../routes/_OrderDetails/OrderDetails/$OrderId.lazy";
import { OrderDetailsList } from "./OrderDetailsList";
import { OrderDetailFooter } from "./OrderDetailFooter";
import { CatchBoundary } from "@tanstack/react-router";
export const OrderDetails = () => {
  const OrderId = Route.useParams().OrderId;
  const {
    data: { orders },
  } = useSuspenseQuery(OrderDetailsQueryOptions(OrderId));

  return (
    <CatchBoundary
      getResetKey={() => "reset"}
      onCatch={(error) => console.error(error)}>
      <OrderDetailsList orders={orders} OrderId={Number(OrderId)} />
      <OrderDetailFooter orders={orders} />
    </CatchBoundary>
  );
};
