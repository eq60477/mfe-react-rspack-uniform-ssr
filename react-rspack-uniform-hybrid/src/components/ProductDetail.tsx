import React, { Suspense, lazy } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ComponentProps } from "@uniformdev/canvas-react";
import { Button } from "@radix-ui/themes";

type ProductDetailProps = ComponentProps<{
  productId: string
}>;

const ProductDetailComponent: React.FC<ProductDetailProps> = ({ productId }) => {

  return (
    <div>
      <Button>Bookmark</Button>
      <p>Product Detail Page V3 {productId}</p>
    </div>
  );
};

export default ProductDetailComponent;
