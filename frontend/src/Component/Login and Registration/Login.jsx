import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Heading from '../Common/Heading';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState(null);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = async (data) => {

  }
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Heading />
      <div className="d-flex justify-content-center align-items-center">
        <Card className="shadow-lg p-4 mt-5" style={{ width: '500px', borderRadius: '15px' }}>
          <h3 className="text-center mb-4 fw-bold">Login</h3>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
              <Form.Label className="fw-semibold">Email address</Form.Label>
              <Form.Control type="email" {...register('email', { required: true })} placeholder="Enter your email" className="py-2" />
            </Form.Group>
            <Form.Group className="mb-4 text-start" controlId="formBasicPassword">
              <Form.Label className="fw-semibold">Password</Form.Label>
              <Form.Control type="password" {...register('password', { required: true })} placeholder="Enter your password" className="py-2" />
            </Form.Group>
            <Button variant="danger" type="submit" className="w-100 py-2 fw-bold" style={{ borderRadius: '10px' }}>
              Login
            </Button>
          </Form>
          <p className="text-center mt-3 text-muted">
            Don't have an account? <Link to="/register" style={{ textDecoration: 'none' }}><span style={{ cursor: 'pointer', color: '#dc3545' }}>Register</span></Link>
          </p>
        </Card>
      </div>
    </div>
  )
}

export default Login
