import React from 'react'
import { useParams,Link } from 'react-router-dom';
import { Card,ListGroup,ListGroupItem } from 'react-bootstrap';
export default function ProductDetails({product}) {
    const params = useParams();
    console.log(product[1])
let identifiant=Number(params.id)
console.log(identifiant)
const prod = product.find((el)=>el.id ==identifiant)
console.log(prod)
  
    return (
        <Card style={{ width: '18rem' }}>
      
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Img variant="top" style={{ height: '17rem' }}

src={require("../assets/images/"+prod.img)}
/>
          <Card.Text>
          {prod.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem><div width='50%'>
    
     
</div></ListGroupItem>
         
        </ListGroup>
        <Card.Body>
         
        <Link to="/">Home</Link> 
        </Card.Body>





     









      </Card>
      
    );
}