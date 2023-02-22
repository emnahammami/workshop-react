import React from 'react'
import Alert from 'react-bootstrap/Alert';
import { useState ,useEffect} from "react";
export default function Alertt() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);
  return (
    <div>{show&&<Alert variant="success">

    <p>
     you bought a product
    </p>
    <hr />
   
  </Alert>}</div>
  )
}
