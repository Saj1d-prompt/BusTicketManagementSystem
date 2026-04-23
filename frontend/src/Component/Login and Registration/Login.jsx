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
    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.status == 200) {
        const userInfo = {
          id: result.id,
          name: result.name,
          email: result.email,
          role: result.role,
          token: result.token,
        }
        login(userInfo);
        setMessage({ text: result.message, type: "success" });
        setTimeout(() => {
          setMessage(null);
          if (result.role === 'admin') {
            navigate('/superAdminDashboard');
          } else if (result.role === 'passenger') {
            navigate('/passengerDashboard');
          } else if (result.role === 'company') {
            navigate('/companyDashboard');
          } else {
            navigate('/operatorDashboard');
          }
        }, 3000);
      } else {
        setMessage({ text: result.message, type: "danger" });
        setTimeout(() => {
          setMessage(null);
        }, 3000);
      }
    } catch (error) {
      setMessage({ text: 'An error occurred while logging in. Please try again later.', type: "danger" });
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  }
  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <Heading />
      <div className="d-flex justify-content-center align-items-center">
        <Card className="shadow-lg p-4 mt-5" style={{ width: '500px', borderRadius: '15px' }}>
          <h3 className="text-center mb-4 fw-bold">Login</h3>
          {message && (
            <div style={{
              position: "fixed",
              top: "20px",
              right: "20px",
              minWidth: "250px",
              padding: "12px 18px",
              borderRadius: "8px",
              color: "#fff",
              backgroundColor: message.type === "success" ? "#28a745" : "#dc3545",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
              zIndex: 9999,
              animation: "slideIn 0.3s ease"
            }}>
              {message.text}
            </div>
          )}
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
