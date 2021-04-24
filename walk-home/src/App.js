import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Button, Alert, Form, Image} from 'react-bootstrap';
import Register from './Register';

function App() {
  return (
    //Place WayHome icon at top, replace UT symbol?
    //Need Login in button?
    <div>
      <Register/>
    </div>
    
    // <div className="App">
    //   <header className="App-header">
    //   <Container fluid = "sm">
    //   <Form action = "/url" method = "post">
    //     <Image src = "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/University_of_Texas_at_Austin_seal.svg/200px-University_of_Texas_at_Austin_seal.svg.png" rounded/>
    //     <h1>Way Home</h1>
    //     <Form.Group>
    //         <Form.Label> Full Name </Form.Label>
    //         <Form.Control placeholder="Full Name" />
    //     </Form.Group>

    //     <Form.Group controlId="formBasicEmail">
    //       <Form.Label> UTexas email</Form.Label>
    //       <Form.Control type="email" placeholder="example.utexas.edu" />
    //       <Form.Text className="text-muted">
    //         We'll never share your email with anyone else.
    //       </Form.Text>
    //     </Form.Group>

    //     <Form.Group controlId="formBasicPassword">
    //         <Form.Label> Location</Form.Label>
    //         <Form.Control placeholder="Location" />
    //     </Form.Group>

    //     <Form.Group controlId="formBasicPassword">
    //         <Form.Label> Destinatation </Form.Label>
    //         <Form.Control placeholder="Destination" />
    //     </Form.Group>

    //     <Button variant = "primary" type = "submit">Find a Buddy!</Button>
    //   </Form>
    //   </Container>
    //   </header>
    //</div>
  );
}

export default App;
