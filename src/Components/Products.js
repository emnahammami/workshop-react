import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap';
import Product from './Product';


export default function Products({product}) {
  
  return (
    <Container>
        <Row >
            {
               product.map(product => <Product product={product} key={product.id} />)
            }
        </Row></Container>
  )
}

