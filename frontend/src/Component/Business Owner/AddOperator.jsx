import React from 'react'
import { Card } from 'react-bootstrap';
import { Form, Button } from 'react-bootstrap';

const AddOperator = () => {
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
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="fw-semibold">Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 text-start">
                        <Form.Label className="fw-semibold">Phone Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter phone number"
                        />
                    </Form.Group>

                    <Form.Group className="mb-4 text-start">
                        <Form.Label className="fw-semibold">Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Create password"
                        />
                    </Form.Group>
                </Form>
            </Card>
        </div>
    )
}

export default AddOperator
