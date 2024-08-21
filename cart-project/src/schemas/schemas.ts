import { z } from "zod";

const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  imageUrl: z.string().url(),
});

const ProductsSchema = z.object({
  products: z.array(ProductSchema),
});

const CartItemSchema = z.object({
  id: z.number(),
  product: z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    imageUrl: z.string().url(),
    quantity: z.number(),
  }),
});

const CartItemWithCheckSchema = z.object({
  product: z.object({
    name: z.string(),
    price: z.number(),
    imageUrl: z.string().url(),
  }),
  quantity: z.number(),
  done: z.boolean(),
  id: z.number(),
});

const CartItemsWithCheckSchema = z.object({
  carts: z.array(CartItemWithCheckSchema),
});

const orderDetailsSchema = ProductSchema.extend({
  quantity: z.number(),
});

const OrderSchema = z.object({
  id: z.string(),
  orderDetails: z.array(orderDetailsSchema),
});

const OrderProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  imageUrl: z.string().url(),
  quantity: z.number(),
});

export {
  ProductSchema,
  ProductsSchema,
  CartItemSchema,
  CartItemWithCheckSchema,
  CartItemsWithCheckSchema,
  orderDetailsSchema,
  OrderSchema,
  OrderProductSchema,
};
