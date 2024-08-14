import { useSuspenseQuery } from "@tanstack/react-query";
import { OrdersQueryOptions } from "../../Api/QueryOptions/QueryOptions";
import { OrderListHeader } from "./OrderListHeader";
import { OrdersList } from "./Orderslist";

export const Orders = () => {
  const { data } = useSuspenseQuery(OrdersQueryOptions());

  return (
    <>
      <OrderListHeader />
      <OrdersList data={data} />
    </>
  );
};
