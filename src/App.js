
import './App.css';
import Products from './Components/Products';
import Alert from 'react-bootstrap/Alert';
import {data }from "./products"
import { useState } from "react";
import { Router ,Route, Routes} from "react-router-dom";
import ProductDetails from "./Components/ProductDetails"
import NavBar from './Components/NavBar';
function App() {
  const [product, setProduct] = useState(data);
  return (
<>

<NavBar/>
<Routes>
 
    
    
    
    <Route
    path='/'
    element={<div>
   

      <Products
        product={product}
      />
    </div>} />
      <Route path='/ProductDetails/:id' element={<ProductDetails product={product}      />} />
    </Routes></>
  );
}

export default App;
