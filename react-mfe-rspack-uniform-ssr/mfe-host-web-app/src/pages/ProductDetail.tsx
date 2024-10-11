import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { loadRemote } from "@module-federation/enhanced/runtime";
import { ComponentProps } from "@uniformdev/canvas-react";

const RemoteProductDetail = React.lazy(async (): Promise<any> => {
  const res = await loadRemote("MfeRemotePdp/ProductDetail");
  return res;
});


type ProductDetailProps = ComponentProps<{}>;

const ProductDetailComponent = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get('productId');

  return (
    <Suspense fallback={<div><p>Loading...</p></div>}>
      <RemoteProductDetail productId={productId} />
    </Suspense>
  );
};

export default ProductDetailComponent;
