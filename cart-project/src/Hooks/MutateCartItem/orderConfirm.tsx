import { useMutation } from "@tanstack/react-query";
import { postOrders } from "../../Api/Api";

export const useOrderConfirmMutation = () => {
  return useMutation({
    mutationFn: postOrders,

    onError: (error) => {
      console.error("Order confirmation error:", error);
    },

    onSuccess: (data) => {
      console.log("Order confirmation successful:", data);
    },
  });
};
