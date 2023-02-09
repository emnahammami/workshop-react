import React,{ Component } from 'react'

import { Button,Card } from "react-bootstrap";
import product1 from "../assets/images/product1.webp"
import product2 from "../assets/images/product2.jpg"
import product3 from "../assets/images/product3.jpg"
import Alert from 'react-bootstrap/Alert';



export default class Product extends Component {
    
 prod;
ok=false
    constructor(props){super(props);
    this.prod=props.product
console.log(this.prod)
this.state = {mriguel: false};
    }
    handleClick = () => {
        console.log("you bought a product");
this.setState({mriguel:true})
        console.log(this.ok)
      };
  render() {
    return (
        <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" 
     
        />
      
        <Card.Img variant="top" 

          src={require("../assets/images/"+this.prod.img)}
        />
        <Card.Body>
        <Card.Title>{this.prod.name}</Card.Title>
          <Card.Title>{this.prod.quantity}</Card.Title>
          <Card.Text>
              
         
          </Card.Text>
          <Button variant="danger" onClick={this.handleClick}>buy</Button>
          <Button variant="primary">like</Button>

        </Card.Body>
        {this.state.mriguel===true?  <Alert variant="success">

      <p>
       you bought a product
      </p>
      <hr />
     
    </Alert>:<div></div>}
      </Card>
    )
  }
}

