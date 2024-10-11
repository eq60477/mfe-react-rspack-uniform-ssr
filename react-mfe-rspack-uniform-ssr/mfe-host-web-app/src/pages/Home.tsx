import React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <p>This is Home</p>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
      </ul>
    </div>
  )
}

export default Home;