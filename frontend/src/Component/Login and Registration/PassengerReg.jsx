import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const PassengerReg = ({ onBack }) => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const [message, setMessage] = useState(null);
    
  return (
    <div>
        <div className="d-flex align-items-center mb-4">
            <button onClick={onBack} className="btn btn-sm btn-outline-secondary me-3">
                &larr; Back
            </button>
        </div>
        <h2 className="text-center mb-4">Passenger Registration</h2>
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
        <Form className="mx-auto" style={{ maxWidth: '600px' }} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3 text-start" controlId="formBasicName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" {...register('name', { required: true })} placeholder="Enter your full name" />
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" {...register('email', { required: true })} placeholder="Enter your email" />
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="formBasicPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" {...register('phone')} placeholder="Enter your phone number" />
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" {...register('password', { required: true })} placeholder="Create a password" />
            </Form.Group>
            <Form.Group className="mb-3 text-start" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" {...register('password_confirmation', { 
                        required: true,
                        validate: (value) => value === watch('password') || "Passwords do not match"
                    })}
                    isInvalid={!!errors.password_confirmation} 
                    placeholder="Confirm your password" />
                <Form.Control.Feedback type="invalid">
                    {errors.password_confirmation?.message}
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="danger" type="submit" className="w-100">
                Register
            </Button>
        </Form>
    </div>
  )
}

export default PassengerReg
