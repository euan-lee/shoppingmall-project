import {
  getOrder,
  getProduct,
  getProducts,
  getOrders,
  getCarts,
} from "../../Api/Api";
import { queryOptions } from "@tanstack/react-query";

export const OrderPaymentQueryOptions = () =>
  queryOptions({
    queryKey: ["OrderPayment"],
    queryFn: () => getOrder("1"),
  });

export const ProductDetailQueryOptions = (ProductId: string) => {
  return {
    queryKey: ["posts", { ProductId }],
    queryFn: () => getProduct(ProductId),
  };
};

export const getQueryOptions = ({
  page,
  limit,
}: {
  page: number;
  limit: number;
}) => {
  return queryOptions({
    queryKey: ["products", page],
    queryFn: () => getProducts({ page, limit }),
  });
};

export const OrdersQueryOptions = () => {
  return { queryKey: ["orders"], queryFn: () => getOrders() };
};

export const OrderDetailsQueryOptions = (OrderId: string) => {
  return queryOptions({
    queryKey: ["OrderDetails", { OrderId }],
    queryFn: () => getOrder(OrderId),
  });
};

export const CartQueryOptions = () =>
  queryOptions({
    queryKey: ["Cart"],
    queryFn: () => getCarts(),
  });
