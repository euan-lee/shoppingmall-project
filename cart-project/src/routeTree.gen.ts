/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as OrdersRouteImport } from './routes/_Orders/route'
import { Route as OrderDetailsRouteImport } from './routes/_OrderDetails/route'
import { Route as ProductsRouteImport } from './routes/Products/route'
import { Route as OrderPaymentRouteImport } from './routes/OrderPayment/route'
import { Route as OrdersOrdersImport } from './routes/_Orders/Orders'
import { Route as CartCartImport } from './routes/_Cart/Cart'
import { Route as ProductDetailProductsParamsIdImport } from './routes/_ProductDetail/Products.$ParamsId'
import { Route as OrderDetailsOrderDetailsOrderIdImport } from './routes/_OrderDetails/OrderDetails.$OrderId'

// Create Virtual Routes

const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const OrdersRouteRoute = OrdersRouteImport.update({
  id: '/_Orders',
  getParentRoute: () => rootRoute,
} as any)

const OrderDetailsRouteRoute = OrderDetailsRouteImport.update({
  id: '/_OrderDetails',
  getParentRoute: () => rootRoute,
} as any)

const ProductsRouteRoute = ProductsRouteImport.update({
  path: '/Products',
  getParentRoute: () => rootRoute,
} as any)

const OrderPaymentRouteRoute = OrderPaymentRouteImport.update({
  path: '/OrderPayment',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const OrdersOrdersRoute = OrdersOrdersImport.update({
  path: '/Orders',
  getParentRoute: () => OrdersRouteRoute,
} as any)

const CartCartRoute = CartCartImport.update({
  path: '/Cart',
  getParentRoute: () => rootRoute,
} as any)

const ProductDetailProductsParamsIdRoute =
  ProductDetailProductsParamsIdImport.update({
    path: '/Products/$ParamsId',
    getParentRoute: () => rootRoute,
  } as any)

const OrderDetailsOrderDetailsOrderIdRoute =
  OrderDetailsOrderDetailsOrderIdImport.update({
    path: '/OrderDetails/$OrderId',
    getParentRoute: () => OrderDetailsRouteRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/OrderPayment': {
      id: '/OrderPayment'
      path: '/OrderPayment'
      fullPath: '/OrderPayment'
      preLoaderRoute: typeof OrderPaymentRouteImport
      parentRoute: typeof rootRoute
    }
    '/Products': {
      id: '/Products'
      path: '/Products'
      fullPath: '/Products'
      preLoaderRoute: typeof ProductsRouteImport
      parentRoute: typeof rootRoute
    }
    '/_OrderDetails': {
      id: '/_OrderDetails'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof OrderDetailsRouteImport
      parentRoute: typeof rootRoute
    }
    '/_Orders': {
      id: '/_Orders'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof OrdersRouteImport
      parentRoute: typeof rootRoute
    }
    '/_Cart/Cart': {
      id: '/_Cart/Cart'
      path: '/Cart'
      fullPath: '/Cart'
      preLoaderRoute: typeof CartCartImport
      parentRoute: typeof rootRoute
    }
    '/_Orders/Orders': {
      id: '/_Orders/Orders'
      path: '/Orders'
      fullPath: '/Orders'
      preLoaderRoute: typeof OrdersOrdersImport
      parentRoute: typeof OrdersRouteImport
    }
    '/_OrderDetails/OrderDetails/$OrderId': {
      id: '/_OrderDetails/OrderDetails/$OrderId'
      path: '/OrderDetails/$OrderId'
      fullPath: '/OrderDetails/$OrderId'
      preLoaderRoute: typeof OrderDetailsOrderDetailsOrderIdImport
      parentRoute: typeof OrderDetailsRouteImport
    }
    '/_ProductDetail/Products/$ParamsId': {
      id: '/_ProductDetail/Products/$ParamsId'
      path: '/Products/$ParamsId'
      fullPath: '/Products/$ParamsId'
      preLoaderRoute: typeof ProductDetailProductsParamsIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  OrderPaymentRouteRoute,
  ProductsRouteRoute,
  OrderDetailsRouteRoute: OrderDetailsRouteRoute.addChildren({
    OrderDetailsOrderDetailsOrderIdRoute,
  }),
  OrdersRouteRoute: OrdersRouteRoute.addChildren({ OrdersOrdersRoute }),
  CartCartRoute,
  ProductDetailProductsParamsIdRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/OrderPayment",
        "/Products",
        "/_OrderDetails",
        "/_Orders",
        "/_Cart/Cart",
        "/_ProductDetail/Products/$ParamsId"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/OrderPayment": {
      "filePath": "OrderPayment/route.tsx"
    },
    "/Products": {
      "filePath": "Products/route.tsx"
    },
    "/_OrderDetails": {
      "filePath": "_OrderDetails/route.tsx",
      "children": [
        "/_OrderDetails/OrderDetails/$OrderId"
      ]
    },
    "/_Orders": {
      "filePath": "_Orders/route.tsx",
      "children": [
        "/_Orders/Orders"
      ]
    },
    "/_Cart/Cart": {
      "filePath": "_Cart/Cart.tsx"
    },
    "/_Orders/Orders": {
      "filePath": "_Orders/Orders.tsx",
      "parent": "/_Orders"
    },
    "/_OrderDetails/OrderDetails/$OrderId": {
      "filePath": "_OrderDetails/OrderDetails.$OrderId.tsx",
      "parent": "/_OrderDetails"
    },
    "/_ProductDetail/Products/$ParamsId": {
      "filePath": "_ProductDetail/Products.$ParamsId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
