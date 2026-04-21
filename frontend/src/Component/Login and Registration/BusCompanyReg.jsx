import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const BusCompanyReg = ({ onBack }) => {
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const [message, setMessage] = useState(null);
    const onSubmit = async (data) => {
        try {
            const formData = new FormData();

            formData.append("company_name", data.company_name);
            formData.append("license_number", data.license_number);
            formData.append("document_path", data.document_path[0]);
            formData.append("name", data.owner_name);
            formData.append("email", data.business_email);
            formData.append("phone", data.business_phone);
            formData.append("password", data.password);
            formData.append("password_confirmation", data.password_confirmation);

            const response = await fetch(`${import.meta.env.VITE_API_KEY}/registerCompany`, {
                method: 'POST',
                body: formData, 
            });
        } catch (error) {
            setMessage({ text: 'An error occurred while registering. Please try again later.', type: "danger" });
            setTimeout(() => {
                setMessage(null);
            }, 3000);
            console.error('Error registering company:', error);
        }
    }

    return (
        <div>
            <div className="d-flex align-items-center mb-4">
                <button onClick={onBack} className="btn btn-sm btn-outline-secondary me-3">
                    &larr; Back
                </button>
            </div>
            <h2 className="text-center mb-4">Bus Company Registration</h2>
            <Form className="mx-auto" style={{ maxWidth: '600px' }} onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3 text-start" controlId="formBasicName">
                    <Form.Label>Transport Company Name</Form.Label>
                    <Form.Control type="text" {...register("company_name", { required: true })} placeholder="Enter your company name" />
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicEmail">
                    <Form.Label>Company License Number</Form.Label>
                    <Form.Control type="text" {...register("license_number", { required: true })} placeholder="Enter your license number" />
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formLicenseImage">
                    <Form.Label>Upload Company License or Registration Document</Form.Label>
                    <Form.Control type="file" accept="image/*,.pdf" {...register("document_path", { required: true })} />
                    <Form.Text className="text-muted">
                        Upload a clear image or PDF of your license (JPG, PNG, or PDF).
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicPhone">
                    <Form.Label>Owner/Admin Full Name</Form.Label>
                    <Form.Control type="text" {...register("name", { required: true })} placeholder="Enter your Owner/Admin full name" />
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicPhone">
                    <Form.Label>Business Email</Form.Label>
                    <Form.Control type="email" {...register("email", { required: true })} placeholder="Enter your business email" />
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicPhone">
                    <Form.Label>Business Phone Number</Form.Label>
                    <Form.Control type="text" {...register("phone", { required: true })} placeholder="Enter your business phone number" />
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" {...register("password", { required: true })} placeholder="Create a password" />
                </Form.Group>
                <Form.Group className="mb-3 text-start" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" {...register('password_confirmation', {
                        required: true,
                        validate: (value) => value === watch('password') || "Passwords do not match"
                    })}
                        isInvalid={!!errors.password_confirmation} placeholder="Confirm your password" />
                    <Form.Control.Feedback type="invalid">
                        {errors.password_confirmation?.message}
                    </Form.Control.Feedback>
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