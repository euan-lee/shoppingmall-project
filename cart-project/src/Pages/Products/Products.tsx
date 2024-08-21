import { ProductsList } from "./ProductsList";
import { Suspense } from "react";
import { LoadingSpinner } from "../../Components/LoadingSpinner/LoadingSpinner";
import { ProductLayout } from "../../routes/__root";
import { ProductInfiniteScroll } from "../../Hooks/ProductInfiniteScroll/ProductInfiniteScroll";
import { ErrorBoundary } from "react-error-boundary";
export const Products = () => {
  const [ref, products] = ProductInfiniteScroll();

  return (
    <ProductLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <ErrorBoundary fallback={<>error</>}>
          <ProductsList products={products} />
          <div ref={ref}></div>
        </ErrorBoundary>
      </Suspense>
    </ProductLayout>
  );
};
