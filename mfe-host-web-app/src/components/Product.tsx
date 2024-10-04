import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { loadRemote } from "@module-federation/enhanced/runtime";
import { ComponentProps } from "@uniformdev/canvas-react";
import { Button } from "@radix-ui/themes";

const RemoteProductListing = lazy(async (): Promise<any> => {
  const res = await loadRemote("MfeRemotePlp/ProductListing");
  return res;
});


type ProductProps = ComponentProps<{}>;

const Product = () => {
  return (
    <Suspense fallback={<div><p>Loading...</p></div>}>
      <Button>Bookmark</Button>
      <RemoteProductListing />
    </Suspense>
  );
};

export default Product;
