

import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";


import { useDispatch } from "react-redux";
import { useSelector} from 'react-redux';
import { addItem, removeItem, adjustQuantity } from '../ReduxToolkit/slices/cartSlice';
import { Col } from "react-bootstrap";

export const Cart = () => {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
  
    const handleAddToCart = (product) => {
      dispatch(addItem(product));
    };
  
    const handleRemoveFromCart = (id) => {
      dispatch(removeItem(id));
    };
  
    const handleAdjustQuantity = (id, quantity) => {
      dispatch(adjustQuantity({ id, quantity }));
    };
  
    const calculateTotal = () => {
      const total = items.reduce((accumulator, current) => accumulator + current.price * current.quantity, 0);
      return total.toFixed(2);
    };

return (
<section className="h-100" style={{ backgroundColor: "#eee" }}>
  <MDBContainer className="py-5 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol md="10">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
            Shopping Cart
          </MDBTypography>
          <div>
            <p className="mb-0">
              <span className="text-muted">Sort by:</span>
              <a href="#!" className="text-body">
                price <i className="fas fa-angle-down mt-1"></i>
              </a>
            </p>
          </div>
        </div>
        

        

        

        {items.length === 0 && <p>Votre panier est vide</p>}
      {items.map((item) => (
        
<div key={item.id}>
        <MDBCard className="rounded-3 mb-4">
          <MDBCardBody className="p-4">
            <MDBRow className="justify-content-between align-items-center">
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage className="rounded-3" fluid
              src={require("../assets/images/" + item.img)}
              alt="Cotton T-shirt" />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3">
                <p className="lead fw-normal mb-2" >{item.name}</p>
                <p>
                  <span className="text-muted">Price: </span>{item.price}
                 
                </p>
              </MDBCol>
              <Col> 
              <button style={{"textAlign" : "center",color:"red", border :" solid red 3px", width : "50px" , "borderRadius" : "30px"}}
              onClick={(e) => handleAdjustQuantity(item.id, parseInt(item.quantity-1))} 
              >-</button>
            </Col> 
            <Col> 
            <h5>{item.quantity}</h5>
            </Col> 
            <Col> 
              <button style={{"textAlign" : "center",color:"green", border :" solid green 3px", width : "50px" , "borderRadius" : "30px"}}
              onClick={(e) => handleAdjustQuantity(item.id, parseInt(item.quantity+1))} 
              >+</button>
            </Col>
            <Col> 
              <button style={{"textAlign" : "center",color:"red", border :" solid red 3px", width : "50px" , "borderRadius" : "10px"}}
              onClick={() => handleRemoveFromCart(item.id)}
              >×</button>
            </Col>  
              <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                <MDBTypography tag="h5" className="mb-0">
                </MDBTypography>
              </MDBCol>
              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-danger">
                  <MDBIcon fas icon="trash text-danger" size="lg" />
                </a>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>

        
        </div>
        ))}<MDBCard>
          <MDBCardBody>
          <h5 style={{color :"black",float : "left"}}>Total: </h5>
       
       <h5 style={{color :"black",float : "right"}}>{calculateTotal()} DT</h5>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
);
}