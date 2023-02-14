import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert';
export default class Alertt extends Component {
    componentDidMount() {
        setTimeout(() => {
          this.setState({ showComponent: false });
        }, 2000);
      }
    
      state = {
        showComponent: true,
      };
    
    
    
  render() {
    if (!this.state.showComponent) return null;
    return (

        <Alert variant="success">

        <p>
         you bought a product
        </p>
        <hr />
       
      </Alert>
    )
  }
}
