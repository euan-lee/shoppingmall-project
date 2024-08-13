import { useSuspenseQuery } from "@tanstack/react-query";
import { OrderPaymentQueryOptions } from "../../Api/QueryOptions/QueryOptions";
import { OrderPaymentView } from "./OrderPaymentView";

export const OrderPayment = () => {
  const {
    data: { orders },
  } = useSuspenseQuery(OrderPaymentQueryOptions());
  return <OrderPaymentView orderDetails={orders} />;
};
