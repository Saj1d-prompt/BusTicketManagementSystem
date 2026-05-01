import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const AddOperator = () => {
    const { register, handleSubmit, reset } = useForm();
    const [message, setMessage] = useState(null);
    const { user } = useContext(AuthContext);
    const onSubmit = async (data) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_KEY}/registerOperator`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();
            if (result.status === 200) {
                setMessage({ type: 'success', text: result.message });
                setTimeout(() => {
                    setMessage(null);
                }, 3000);
                reset();
            } else {
                setMessage({ type: 'danger', text: result.message });
                setTimeout(() => {
                    setMessage(null);
                }, 3000);
            }
        } catch (error) {
            console.error('Error registering operator:', error);
            setMessage({ type: 'danger', text: 'An error occurred. Please try again.' });
            setTimeout(() => {
                setMessage(null);
            }, 3000);
        }
    }
    return (
        <div className="d-flex justify-content-center align-items-center"
            style={{ minHeight: "100vh", backgroundColor: "#f5f7fa" }}>
            <Card className="shadow-sm p-4" style={{
                width: "480px",
                borderRadius: "14px",
                background: "#ffffff",
                border: "1px solid #e3e6ea",
            }}>
                <h4 className="text-center mb-3 fw-bold" style={{ color: "#333" }}>
                    Add Ticket Operator
                </h4>
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
                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="fw-semibold">Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter name"
                            {...register('name', { required: true })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="fw-semibold">Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            {...register('email', { required: true })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="fw-semibold">Phone Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter phone number"
                            {...register('phone', { required: true })}
                        />
                    </Form.Group>

                    <Form.Group className="mb-4 text-start">
                        <Form.Label className="fw-semibold">Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Create password"
                            {...register('password', { required: true })}
                        />
                    </Form.Group>
                    <Button variant="danger" type="submit" className="w-100 fw-semibold"
                        style={{
                            padding: "10px",
                            borderRadius: "8px",
                        }}>
                        Register
                    </Button>

                </Form>
            </Card>
        </div>
    )
}

export default AddOperator
