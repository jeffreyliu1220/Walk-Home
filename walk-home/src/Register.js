import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import {Container, Row, Col, Button, Alert, Form, Image} from 'react-bootstrap';
function Register(){
    return(
        //Change the background colors back to figma later
        //TODO: Fix the weird white space at the bottom of the registration form
        //TODO: Find out how to connect form to Kushal's google firebase set up
        <div className = "p-3 mb-2 bg-dark text-white">
            <Container className = "p-3 mb-2 bg-dark text-white" fluid = "md">
                <Form action = "/url" method = "post">
                <Image src = "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/University_of_Texas_at_Austin_seal.svg/200px-University_of_Texas_at_Austin_seal.svg.png" rounded/>
                <h1>Way Home</h1>
                <Form.Group>
                    <Form.Label> Full Name </Form.Label>
                    <Form.Control placeholder="Full Name" />
                </Form.Group>
        
                <Form.Group controlId="formBasicEmail">
                    <Form.Label> UTexas Email</Form.Label>
                    <Form.Control type="email" placeholder="example.utexas.edu" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
        
                <Form.Group controlId="formBasicPassword">
                    <Form.Label> Location</Form.Label>
                    <Form.Control placeholder="Location" />
                </Form.Group>
        
                <Form.Group controlId="formBasicPassword">
                    <Form.Label> Destination </Form.Label>
                    <Form.Control placeholder="Destination" />
                </Form.Group>
                <Button variant = "primary" type = "submit">Find a Buddy!</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Register;