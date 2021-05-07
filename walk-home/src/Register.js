import 'bootstrap/dist/css/bootstrap.min.css';
import './Register.css';
import {Container, Row, Col, Button, Alert, Form, Image} from 'react-bootstrap';
import {getClosestBuddy, registerUser} from './api'
import {useState} from 'react';
import logo from './wayhome logo bl.png';


function Register(){

    const [fullName, setFullName] = useState();
    const [email, setEmail] = useState();
    const [location, setLocation] = useState();
    const [destination, setDestination] = useState();

    const onNameChange = (event) => {
        setFullName(event.target.value);
    }

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const onLocationChange = (event) => {
        setLocation(event.target.value);
    }

    const onDestinationChange = (event) => {
        setDestination(event.target.value);
    }

    const buttonClicked = (event) => {
        event.preventDefault();
        
        if('geolocation' in navigator){
            
            navigator.geolocation.getCurrentPosition(async (position) =>{
                
                let userData = {
                    [fullName]: {
                        email: email,
                        location: location,
                        destination: destination,
                        position: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude
                        }
                    } 
                }
                console.log(userData);
                console.log("sending request from:" );
                console.log(userData[fullName].position);
                const status = await registerUser(userData);
                console.log(status);
                if(status == 200){
                    console.log("finding closest buddy")
                    getClosestBuddy(userData[fullName].position.latitude, userData[fullName].position.longitude).then((response) => {
                        console.log(response);
                    });
                }
                
            });
        }
        else{
            //TODO: decide how we can display to the user that we couldn't get their location
        }
    };
    return(
        //Change the background colors back to figma later
        //TODO: Fix the weird white space at the bottom of the registration form
        //TODO: Find out how to connect form to Kushal's google firebase set up
        //"p-3 mb-2 bg-dark text-white"
        //"p-3 mb-2 bg-dark text-white"
        <div className = "FormBody">
            <Container className = "FormContainer"  fluid = "md">
                <Form onSubmit={buttonClicked}>
                <Image src = {logo} alt = "https://upload.wikimedia.org/wikipedia/en/thumb/e/e1/University_of_Texas_at_Austin_seal.svg/200px-University_of_Texas_at_Austin_seal.svg.png" width = "80%" height = "10%" rounded/>
                <Form.Group>
                    <Form.Label> Full Name </Form.Label>
                    <Form.Control value={fullName} onChange={onNameChange} type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label> UTexas Email</Form.Label>
                    <Form.Control value={email} onChange={onEmailChange} type="email" placeholder="example@utexas.edu" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
        
                <Form.Group controlId="formBasicPassword">
                    <Form.Label> Location</Form.Label>
                    <Form.Control value={location} onChange={onLocationChange} type="text" placeholder="Location" />
                </Form.Group>
        
                <Form.Group controlId="formBasicPassword">
                    <Form.Label> Destination </Form.Label>
                    <Form.Control value={destination} onChange={onDestinationChange} type="text" placeholder="Destination" />
                </Form.Group>
                <Button onClick = {buttonClicked} variant = "primary" type = "submit" className ="col-md-12 text-center">Find a Buddy!</Button>
                </Form>
            </Container>
        {/* </div> */}
    </div>
        
    )
}

export default Register;