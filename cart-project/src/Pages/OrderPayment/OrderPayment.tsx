import { useSuspenseQuery } from "@tanstack/react-query";
import { OrderPaymentQueryOptions } from "../../Api/QueryOptions/QueryOptions";
import { OrderPaymentView } from "./OrderPaymentView";
import { CatchBoundary } from "@tanstack/react-router";

export const OrderPayment = () => {
  const {
    data: { orders },
  } = useSuspenseQuery(OrderPaymentQueryOptions());
  return (
    <>
      <CatchBoundary
        getResetKey={() => "reset"}
        onCatch={(error) => console.error(error)}>
        <OrderPaymentView orderDetails={orders} />
      </CatchBoundary>
      ;
    </>
  );
};
