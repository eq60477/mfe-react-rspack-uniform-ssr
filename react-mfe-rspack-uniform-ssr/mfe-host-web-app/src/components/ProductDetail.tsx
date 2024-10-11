import React, { Suspense, lazy } from "react";
import { useLocation, useParams } from "react-router-dom";
import { ComponentProps } from "@uniformdev/canvas-react";
import { Button } from "@radix-ui/themes";

type ProductDetailProps = ComponentProps<{}>;

const ProductDetailComponent = () => {
    // const location = useLocation();
    // console.log('Product Id - ', window.location.search);
    // const location = useLocation();

//     const queryParams = new URLSearchParams(window.location.search);
//     const productId = queryParams.get('productId');
  return (
    <div>
      <Button>Bookmark</Button>
      {/* <p>Product Id - {productId}</p> */}
    </div>
  );
};

export default ProductDetailComponent;
