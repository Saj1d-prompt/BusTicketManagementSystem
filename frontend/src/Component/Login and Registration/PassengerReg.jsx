import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PassengerReg = () => {
  return (
    <div>
        <h2 className="text-center mb-4">Passenger Registration</h2>
        <Form className="mx-auto" style={{ maxWidth: '600px' }}>
            <Form.Group className="mb-3 text-start" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your full name" />
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="formBasicPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" placeholder="Enter your phone number" />
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Create a password" />
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm your password" />
            </Form.Group>
            <Button variant="danger" type="submit" className="w-100">
                Register
            </Button>
        </Form>
    </div>
  )
}

export default PassengerReg
