import { CartRightLayout } from "../../../Layouts/Cart/CartRightLayout";
import { OrderSummary } from "./OrderSummary";
export const CartRight = () => {
  return (
    <>
      <CartRightLayout>
        <OrderSummary />
      </CartRightLayout>
    </>
  );
};
