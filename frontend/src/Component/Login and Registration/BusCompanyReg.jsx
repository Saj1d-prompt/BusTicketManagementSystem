import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const BusCompanyReg = ({ onBack }) => {
    return (
        <div>
            <div className="d-flex align-items-center mb-4">
                <button onClick={onBack} className="btn btn-sm btn-outline-secondary me-3">
                    &larr; Back
                </button>
            </div>
            <h2 className="text-center mb-4">Bus Company Registration</h2>
            <Form className="mx-auto" style={{ maxWidth: '600px' }}>
                <Form.Group className="mb-3 text-start" controlId="formBasicName">
                    <Form.Label>Transport Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your company name" />
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label>Company License Number</Form.Label>
                    <Form.Control type="email" placeholder="Enter your license number" />
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formLicenseImage">
                    <Form.Label>Upload Company License or Registration Document</Form.Label>
                    <Form.Control type="file" accept="image/*,.pdf" />
                    <Form.Text className="text-muted">
                        Upload a clear image or PDF of your license (JPG, PNG, or PDF).
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicPhone">
                    <Form.Label>Owner/Admin Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Owner/Admin full name" />
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicPhone">
                    <Form.Label>Business Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your business email" />
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicPhone">
                    <Form.Label>Business Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter your business phone number" />
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Create a password" />
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm your password" />
                </Form.Group>
                <div className="alert alert-warning mt-4 small">
                    <strong>Note:</strong> Company accounts require manual verification by our Super Admin team before your dashboard is activated.
                </div>
                <Button variant="danger" type="submit" className="w-100">
                    Register
                </Button>
            </Form>
        </div>
    )
}

export default BusCompanyReg