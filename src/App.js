
/*import './App.css';
import Products from './Components/Products';
import Alert from 'react-bootstrap/Alert';
import {data }from "./products"
import { useState } from "react";
import { Router ,Route, Routes} from "react-router-dom";
import ProductDetails from "./Components/ProductDetails"
import NavBar from './Components/NavBar';
import NotFound from "./Components/NotFound"
function App() {
  const [product, setProduct] = useState(data);
  return (
<>

<NavBar/>
<Routes>
 
<Route
    path='/home'
    element={<div>
   

      <Products
        product={product}
      />
    </div>} />
    
    
    <Route
    path='/'
    element={<div>
   

      <Products
        product={product}
      />
    </div>} />
      <Route path='/ProductDetails/:id' element={<ProductDetails product={product}      />} />
      <Route path="*" element={<NotFound  />} />
    </Routes></>
  );
}

export default App;
*/
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