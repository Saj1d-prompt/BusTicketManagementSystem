import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Heading from '../Common/Heading';

const Login = () => {
  return (
    <div>
      <Heading />
      <h2 className="text-center mb-4 m-4">Login Here</h2>
      <Form className="mx-auto" style={{ maxWidth: '500px' }}>
        <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
          <Form.Label className="fw-semibold">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" className="py-2" />
        </Form.Group>
        <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
          <Form.Label className="fw-semibold">Password</Form.Label>
          <Form.Control type="password" placeholder="Enter your password" className="py-2" />
        </Form.Group>
        <Button variant="danger" type="submit" className="w-100 py-2 fw-bold" style={{ borderRadius: '10px' }}>
          Login
        </Button>
      </Form>
    </div>
  )
}

export default Login
