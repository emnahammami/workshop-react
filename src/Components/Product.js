import React,{ Component } from 'react'

import { Button,Card, Col } from "react-bootstrap";

import { useState,useEffect } from "react";
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';





export default function Product({product}) {
  const [alert, setAlert] = useState(false);
  const [name, setName] = useState(product.name);
  const [quantity, setQuantity] = useState(product.quantity);
  const [like, setLike] = useState(product.like);
  const [img, setImg] = useState(product.img);
  const [clas, setClas] = useState("");
  const [id, setId] = useState(product.id);
  const handleClick = (e) => {
    e.preventDefault();
    setAlert(true)
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  setQuantity(product.quantity--)

  };
  const handleClick2 = (e) => {
    e.preventDefault();
   setLike(product.like++)
  };
  useEffect(() => {
    // Update the document title using the browser API
if(like>5){setClas("bestProduct")}
},[like]);
const handleClose = () => {
  setAlert(false);
};
console.log(alert)
const handleAlert=()=>{
  setTimeout(() => {
    setAlert(false);
  }, 2000);
}
  return (
    <Col md={4}>
    {<Card style={{ width: '10rem' }} className={clas}>
    <Card.Img variant="top" 
 
    />
  
    <Card.Img variant="top" style={{ height: '17rem' }}

      src={require("../assets/images/"+img)}
    />
    <Card.Body>
    <Link to={`/ProductDetails/${id}`}>name{name}</Link>
      <Card.Title>quantity{quantity}</Card.Title>
      <Card.Title>nbr like{like}</Card.Title>
      <Card.Text>
          
     
      </Card.Text>
      <Button variant="danger" onClick={handleClick} disabled={quantity===0}>buy</Button>
      <Button variant="primary" onClick={handleClick2}>Like</Button>

    </Card.Body>
<div><Alert variant="success" show={alert} onClose={handleClose} dismissible>

<p>
 you bought a product
</p>
<hr />

</Alert></div>:<div></div>
  </Card>}</Col>
  )
}


