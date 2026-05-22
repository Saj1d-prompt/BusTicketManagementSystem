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
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);
    const [message, setMessage] = useState('');
    const onSubmit = async (data) => {
        try{
            const response = await fetch(`${import.meta.env.VITE_API_KEY}/addCounter`, {
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
                reset();
                setTimeout(() => {
                    setMessage(null);
                }, 3000);
            } else {
                setMessage({ type: 'danger', text: result.message });
                setTimeout(() => {
                    setMessage(null);
                }, 3000);
            }
        }catch(error){
            setMessage({ type: 'danger', text: 'An error occurred while saving the counter. Please try again.' });
            setTimeout(() => {
                setMessage(null);
            }, 3000);
        }finally{
            setLoading(false);
        }
    }
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
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Row className="mb-4">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label className="fw-semibold">Located City <span className="text-danger">*</span></Form.Label>
                                        <Form.Select
                                            {...register('city', { required: 'City is required' })}
                                            isInvalid={!!errors.city}
                                        >
                                            <option value="">Select City</option>
                                            {BANGLADESH_CITIES.map(city => <option key={`counter-${city}`} value={city}>{city}</option>)}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col md={6} className="mt-3 mt-md-0">
                                    <Form.Group>
                                        <Form.Label className="fw-semibold">Counter Name <span className="text-danger">*</span></Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="e.g., Kalyanpur BRTC Counter"
                                            {...register('name', { required: 'Counter name is required' })}
                                            isInvalid={!!errors.name}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={6}>
                                    <Form.Group>
                                        <Form.Label className="fw-semibold">Contact Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="e.g., +8/017XXXXXXXX"
                                            {...register('contact_number', { required: 'Contact number is required' })}
                                            isInvalid={!!errors.contact_number}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6} className="mt-3 mt-md-0">
                                    <Form.Group>
                                        <Form.Label className="fw-semibold">Counter Status <span className="text-danger">*</span></Form.Label>
                                        <Form.Select
                                            {...register('status', { required: 'Status is required' })}
                                            isInvalid={!!errors.status}
                                        >
                                            <option value="active">Active (Open for ticketing)</option>
                                            <option value="inactive">Inactive (Temporarily closed)</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col md={12}>
                                    <Form.Group>
                                        <Form.Label className="fw-semibold">Full Address / Landmark</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={2}
                                            placeholder="e.g., Opposite to City Mall, Main Road"
                                            {...register('address', { required: 'Address is required' })}
                                            isInvalid={!!errors.address}
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <div className="d-flex justify-content-center border-top pt-4">
                                <Button variant="danger" type="submit" disabled={loading} className="px-5 py-2 fw-bold shadow-sm">
                                    {loading ? <Spinner as="span" animation="border" size="sm" className="me-2" /> : <i className="bi bi-plus-circle me-2"></i>}
                                    {loading ? 'Saving...' : 'Register Counter'}
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default AddCounter
