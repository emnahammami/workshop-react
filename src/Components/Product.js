import React,{ Component } from 'react'

import { Button,Card, Col } from "react-bootstrap";


import Alertt from './Alertt';



export default class Product extends Component {
   nblike; 
 prod;
ok=false
    constructor(props){super(props);
    this.prod=props.product
console.log(this.prod)
this.state = {mriguel: false};
    }
    handleClick2 = () => {
      this.setState({like:this.prod.like++})
      
    };
    handleClick = () => {
        console.log("you bought a product");
this.setState({mriguel:true})
        console.log(this.ok)
        this.prod.quantity--
      };
     
  render() {
    return (<Col md={4}>
        <Card style={{ width: '10rem' }}>
        <Card.Img variant="top" 
     
        />
      
        <Card.Img variant="top" style={{ height: '17rem' }}

          src={require("../assets/images/"+this.prod.img)}
        />
        <Card.Body>
        <Card.Title>name{this.prod.name}</Card.Title>
          <Card.Title>quantity{this.prod.quantity}</Card.Title>
          <Card.Title>nbr like{this.prod.like}</Card.Title>
          <Card.Text>
              
         
          </Card.Text>
          <Button variant="danger" onClick={this.handleClick} disabled={this.prod.quantity===0}>buy</Button>
          <Button variant="primary" onClick={this.handleClick2}>Like</Button>

        </Card.Body>
        {this.state.mriguel===true?  <Alertt/>:<div></div>}
      </Card></Col>
    )
  }
}

