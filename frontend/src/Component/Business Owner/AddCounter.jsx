import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { Container, Card, Form, Button, Row, Col, Spinner } from 'react-bootstrap';

const BANGLADESH_CITIES = [
    'Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Jamalpur', 'Kishoreganj', 'Madaripur', 'Manikganj', 'Munshiganj', 'Mymensingh', 'Narayanganj', 'Narsingdi', 'Netrokona', 'Rajbari', 'Shariatpur', 'Sherpur', 'Tangail'
    , 'Bogra', 'Joypurhat', 'Naogaon', 'Natore', 'Nawabganj', 'Pabna', 'Rajshahi', 'Sirajganj', 'Dinajpur', 'Gaibandha', 'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Panchagarh', 'Rangpur', 'Thakurgaon', 'Barguna', 'Barisal', 'Bhola', 'Jhalokati',
    'Patuakhali', 'Pirojpur', 'Bandarban', 'Brahmanbaria', 'Chandpur', 'Chittagong', 'Comilla', 'Cox\'s Bazar', 'Feni', 'Khagrachari', 'Lakshmipur', 'Noakhali', 'Rangamati', 'Habiganj', 'Maulvibazar', 'Sunamganj', 'Sylhet',
    'Bagerhat', 'Chuadanga', 'Jessore', 'Jhenaidah', 'Khulna', 'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Satkhira'
].sort();


const AddCounter = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    return (
        <div>
            <Container className="py-5">
                <Card className="shadow-sm border-0 mx-auto" style={{ maxWidth: '800px' }}>
                    <Card.Body className="p-4 p-md-5">
                        <div className="d-flex align-items-center mb-4 border-bottom pb-3">
                            <div className="bg-danger bg-opacity-0 text-success rounded-circle p-3 me-3">
                                <i className="bi bi-geo-alt-fill fs-4"></i>
                            </div>
                            <div>
                                <h3 className="fw-bold mb-0">Register Ticket Counter</h3>
                                <p className="text-muted mb-0">Add a physical boarding/dropping point for your passengers.</p>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default AddCounter
