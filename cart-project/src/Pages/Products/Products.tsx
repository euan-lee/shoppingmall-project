import { ProductsList } from "./ProductsList";
import { Suspense, useEffect } from "react";
import { LoadingSpinner } from "../../Components/LoadingSpinner/LoadingSpinner";
import { ProductLayout } from "../../routes/__root";
import { ProductInfiniteScroll } from "../../Hooks/ProductInfiniteScroll/ProductInfiniteScroll";
import { ErrorBoundary } from "react-error-boundary";
import { supabase } from "../../Api/supabase";

export const Products = () => {
  const [ref, products] = ProductInfiniteScroll();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("Product").select("*");

        console.log(data, error);
      } catch (error) {
        console.error("데이터 불러오기 실패:", error);
      }
    };

    fetchData(); // 비동기 함수 호출
  }, []); // 빈 배열을 의존성으로 전달하여 컴포넌트가 마운트될 때만 실행

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
