/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as OrdersRouteImport } from './routes/_Orders/route'
import { Route as OrderDetailsRouteImport } from './routes/_OrderDetails/route'
import { Route as CartRouteImport } from './routes/_Cart/route'
import { Route as OrderPaymentRouteImport } from './routes/OrderPayment/route'
import { Route as IndexImport } from './routes/index'
import { Route as ProductsParamsIdImport } from './routes/Products/$ParamsId'
import { Route as OrdersOrdersRouteImport } from './routes/_Orders/Orders/route'
import { Route as CartCartRouteImport } from './routes/_Cart/Cart/route'
import { Route as OrderDetailsOrderDetailsOrderIdImport } from './routes/_OrderDetails/OrderDetails/$OrderId'

// Create/Update Routes

const OrdersRouteRoute = OrdersRouteImport.update({
  id: '/_Orders',
  getParentRoute: () => rootRoute,
} as any)

const OrderDetailsRouteRoute = OrderDetailsRouteImport.update({
  id: '/_OrderDetails',
  getParentRoute: () => rootRoute,
} as any)

const CartRouteRoute = CartRouteImport.update({
  id: '/_Cart',
  getParentRoute: () => rootRoute,
} as any)

const OrderPaymentRouteRoute = OrderPaymentRouteImport.update({
  path: '/OrderPayment',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsParamsIdRoute = ProductsParamsIdImport.update({
  path: '/Products/$ParamsId',
  getParentRoute: () => rootRoute,
} as any)

const OrdersOrdersRouteRoute = OrdersOrdersRouteImport.update({
  path: '/Orders',
  getParentRoute: () => OrdersRouteRoute,
} as any).lazy(() =>
  import('./routes/_Orders/Orders/route.lazy').then((d) => d.Route),
)

const CartCartRouteRoute = CartCartRouteImport.update({
  path: '/Cart',
  getParentRoute: () => CartRouteRoute,
} as any).lazy(() =>
  import('./routes/_Cart/Cart/route.lazy').then((d) => d.Route),
)

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
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/OrderPayment': {
      id: '/OrderPayment'
      path: '/OrderPayment'
      fullPath: '/OrderPayment'
      preLoaderRoute: typeof OrderPaymentRouteImport
      parentRoute: typeof rootRoute
    }
    '/_Cart': {
      id: '/_Cart'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof CartRouteImport
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
      preLoaderRoute: typeof CartCartRouteImport
      parentRoute: typeof CartRouteImport
    }
    '/_Orders/Orders': {
      id: '/_Orders/Orders'
      path: '/Orders'
      fullPath: '/Orders'
      preLoaderRoute: typeof OrdersOrdersRouteImport
      parentRoute: typeof OrdersRouteImport
    }
    '/Products/$ParamsId': {
      id: '/Products/$ParamsId'
      path: '/Products/$ParamsId'
      fullPath: '/Products/$ParamsId'
      preLoaderRoute: typeof ProductsParamsIdImport
      parentRoute: typeof rootRoute
    }
    '/_OrderDetails/OrderDetails/$OrderId': {
      id: '/_OrderDetails/OrderDetails/$OrderId'
      path: '/OrderDetails/$OrderId'
      fullPath: '/OrderDetails/$OrderId'
      preLoaderRoute: typeof OrderDetailsOrderDetailsOrderIdImport
      parentRoute: typeof OrderDetailsRouteImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  OrderPaymentRouteRoute,
  CartRouteRoute: CartRouteRoute.addChildren({ CartCartRouteRoute }),
  OrderDetailsRouteRoute: OrderDetailsRouteRoute.addChildren({
    OrderDetailsOrderDetailsOrderIdRoute,
  }),
  OrdersRouteRoute: OrdersRouteRoute.addChildren({ OrdersOrdersRouteRoute }),
  ProductsParamsIdRoute,
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
        "/_Cart",
        "/_OrderDetails",
        "/_Orders",
        "/Products/$ParamsId"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/OrderPayment": {
      "filePath": "OrderPayment/route.tsx"
    },
    "/_Cart": {
      "filePath": "_Cart/route.tsx",
      "children": [
        "/_Cart/Cart"
      ]
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
      "filePath": "_Cart/Cart/route.tsx",
      "parent": "/_Cart"
    },
    "/_Orders/Orders": {
      "filePath": "_Orders/Orders/route.tsx",
      "parent": "/_Orders"
    },
    "/Products/$ParamsId": {
      "filePath": "Products/$ParamsId.tsx"
    },
    "/_OrderDetails/OrderDetails/$OrderId": {
      "filePath": "_OrderDetails/OrderDetails/$OrderId.tsx",
      "parent": "/_OrderDetails"
    }
  }
}
ROUTE_MANIFEST_END */
