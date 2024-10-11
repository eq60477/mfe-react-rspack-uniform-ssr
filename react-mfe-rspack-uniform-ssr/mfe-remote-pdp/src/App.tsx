import './App.css';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <div className="content">
    <h1>MFE Remote 2</h1>
    <ProductDetail productId='1234'/>
  </div>
  );
};

export default App;
