import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { loadRemote } from "@module-federation/enhanced/runtime";

const RemoteProductListing = lazy(async (): Promise<any> => {
  const res = await loadRemote("MfeRemotePlp/ProductListing");
  return res;
});

const Product = () => {
  return (
    <Suspense fallback={<div><p>Loading...</p></div>}>
      <RemoteProductListing />
    </Suspense>
  );
};

export default Product;
