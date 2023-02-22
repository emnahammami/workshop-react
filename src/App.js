
import './App.css';
import Products from './Components/Products';
import Alert from 'react-bootstrap/Alert';
import {data }from "./products"
import { useState } from "react";
function App() {
  const [product, setProduct] = useState(data);
  return (
<>


    <Alert variant="success">
    <Alert.Heading>Hey, nice to see you</Alert.Heading>
    <p>
      Aww yeah, you successfully read this important alert message. This
      example text is going to run a bit longer so that you can see how
      spacing within an alert works with this kind of content.
    </p>
    <hr />
    <p className="mb-0">
      Whenever you need to, be sure to use margin utilities to keep things
      nice and tidy.
    </p>
  </Alert>
    <div >
    
    
      <Products product={product}
        
        
        />
         
      </div></>
  );
}

export default App;
