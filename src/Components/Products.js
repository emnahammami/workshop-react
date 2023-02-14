import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap';
import Product from './Product';

export default class Products extends Component {
prod;
    constructor(props){super(props);
    this.prod=props.product
console.log(this.prod)
}
  render() {
    
    return (<Container>
        <Row >
            {
               this.prod.map(product => <Product product={product} key={product.id} />)
            }
        </Row></Container>
    )
  }
}
