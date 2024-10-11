import React, { Suspense, lazy } from "react";
import { useParams } from "react-router-dom";
import { ComponentProps } from "@uniformdev/canvas-react";
import { Button } from "@radix-ui/themes";


type ProductProps = ComponentProps<{}>;

const Product = () => {
  return (
    <Suspense fallback={<div><p>Loading...</p></div>}>
      <Button>Bookmark</Button>
      <p>This is the Product Page</p>
    </Suspense>
  );
};

export default Product;
