import { Button } from '@radix-ui/themes'
import React from 'react'
import { Link } from 'react-router-dom'

const ProductListing = () => {
  const products = [
    {
      id: 'ssf-125-sd25',
      name: 'Product 1',
      price: 100
    },
    {
      id: 'sssd-122-sd22',
      name: 'Product 2',
      price: 200
    },
    {
      id: 'ssd-123-sd23',
      name: 'Product 3',
      price: 300
    }
  ]
  return (
    <div>
      <p>Remote Product Listing Page</p>
      {products.map((product, i) => {
        return (
          <div key={i}>
            <p>Item - {product.name}</p>
            <p>Price - {product.price}</p>
            {/* <Link to={`/products/${product.id}`}>View Product</Link> */}
            <Button>Bookmark</Button>
          </div>
        )
      })}
    </div>
  )
}

export default ProductListing
