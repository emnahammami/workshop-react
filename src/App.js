
import './App.css';
import {Route,Routes} from 'react-router-dom';
import React,{ Suspense,useState }  from 'react';
import {data }from "./products"
import NavBar from './Components/NavBar';
const Products = React.lazy( () => import('./Components/Products'));
const ProductDetails =  React.lazy( () => import('./Components/ProductDetails'));
const NotFound  = React.lazy( () => import('./Components/NotFound'));

function App() {const [product, setProduct] = useState(data);
  return (
    <>
    
      <Suspense fallback={<p>Chargement...</p>}>
      <NavBar/>
        <Routes>
        <Route path="/"  >
            <Route index element={<Products product={product}  />} />
            <Route path=":id" element={<ProductDetails  product={product} />} />
            <Route path="*" element={<NotFound/>} />
          </Route>
          <Route path="/home"  >
            <Route index element={<Products product={product}  />} />
      
            <Route path="*" element={<NotFound/>} />
          </Route>
          <Route path="/products"  >
            <Route index element={<Products product={product}  />} />
            <Route path=":id" element={<ProductDetails  product={product} />} />
            <Route path="*" element={<NotFound/>} />
          </Route>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;