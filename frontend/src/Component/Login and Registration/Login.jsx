import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Heading from '../Common/Heading';
import Card from 'react-bootstrap/Card';

const Login = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Heading />
      <div className="d-flex justify-content-center align-items-center">
        <Card className="shadow-lg p-4 mt-5" style={{ width: '500px', borderRadius: '15px' }}>
          <h3 className="text-center mb-4 fw-bold">Login</h3>
          <Form>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
              <Form.Label className="fw-semibold">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" className="py-2" />
            </Form.Group>
            <Form.Group className="mb-4 text-start" controlId="formBasicPassword">
              <Form.Label className="fw-semibold">Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" className="py-2" />
            </Form.Group>
            <Button variant="danger" type="submit" className="w-100 py-2 fw-bold" style={{ borderRadius: '10px' }}>
              Login
            </Button>
          </Form>
        </Card>
      </div>
    </div>
  )
}

export default Login
