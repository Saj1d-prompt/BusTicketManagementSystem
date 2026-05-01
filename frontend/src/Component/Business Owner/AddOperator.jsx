import React from 'react'
import { Card } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const AddOperator = () => {
    const { register, handleSubmit, reset } = useForm();
    const [message, setMessage] = useState(null);
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
                <Form>
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
