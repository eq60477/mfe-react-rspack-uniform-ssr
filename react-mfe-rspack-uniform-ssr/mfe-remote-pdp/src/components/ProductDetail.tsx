import React from "react";
import { Box, Button, Container } from "@radix-ui/themes";

const ProductDetail = ({ productId }: { productId: string }) => {
  return (
    <div>
      <p>Product Detail Page - {productId}</p>
      <Button>Bookmark</Button>

      <Box
        style={{
          background: "var(--gray-a2)",
          borderRadius: "var(--radius-3)"
        }}
      >
        <Container size="1">
          <Box py="9" />
        </Container>
      </Box>
    </div>
  );
};

export default ProductDetail;
