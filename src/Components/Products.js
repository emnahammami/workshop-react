import React, { Component } from 'react'
import Product from './Product';

export default class Products extends Component {
prod;
    constructor(props){super(props);
    this.prod=props.product
console.log(this.prod)
}
  render() {
    
    return (
        <div >
            {
               this.prod.map(product => <Product product={product} key={product.id} />)
            }
        </div>
    )
  }
}
