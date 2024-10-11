import { registerUniformComponent } from "@uniformdev/canvas-react";
import Page from "./Page";
import Hero from "./Hero";
import Product from "./Product";
import ProductDetailComponent from "./ProductDetail";

registerUniformComponent({
  type: "page",
  component: Page,
});

registerUniformComponent({
  type: "hero",
  component: Hero,
});

registerUniformComponent({
  type: "product",
  component: Product,
});

registerUniformComponent({
  type: "productDetailComponent",
  component: ProductDetailComponent,
});