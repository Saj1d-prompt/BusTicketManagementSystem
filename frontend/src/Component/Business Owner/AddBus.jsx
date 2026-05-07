import React, { use } from 'react'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
const AddBus = () => {
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState(null);
  const { user } = useContext(AuthContext);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/addBus`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.error('Error adding bus:', error);
      setMessage({ type: 'danger', text: 'An error occurred. Please try again.' });
      setTimeout(() => {
        setMessage(null);
      }, 3000);
    }
  }
  return (
    <Container className="py-5">
      <Card className="shadow-sm border-0 mx-auto" style={{ maxWidth: '900px' }}>
        <Card.Body className="p-4 p-md-5">
          <div className="d-flex align-items-center mb-4 border-bottom pb-3">
            <div className="bg-danger text-primary rounded-circle p-3 me-3">
              <i className="bi bi-bus-front fs-4"></i>
            </div>
            <div>
              <h3 className="fw-bold mb-0">Register New Bus</h3>
              <p className="text-muted mb-0">Enter the vehicle details to add it to your fleet.</p>
            </div>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h5 className="mb-3 text-danger">Core Information</h5>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Bus Name/Model <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" name="bus_name" {...register("bus_name", { required: true })} placeholder="e.g., Express Runner" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Brand/Manufacturer</Form.Label>
                  <Form.Control type="text" name="brand" {...register("brand")} placeholder="e.g., Scania, Hino, Volvo" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Registration Number <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" name="registration_number" {...register("registration_number", { required: true })} placeholder="e.g., DHAKA-B-11-2233" required style={{ textTransform: 'uppercase' }} />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Bus Type <span className="text-danger">*</span></Form.Label>
                  <Form.Select name="type" {...register("type", { required: true })} required >
                    <option value="Non-AC">Non-AC Coach</option>
                    <option value="AC">AC Coach</option>
                    <option value="Sleeper">AC Sleeper</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-semibold">Total Seats <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="number" name="total_seats" {...register("total_seats", { required: true })} placeholder="e.g., 40" min="10" max="60" required />
                </Form.Group>
              </Col>
            </Row>
            <div className="d-flex justify-content-center border-top pt-4">
              <Button variant="danger" type="submit" className="px-5 py-2 fw-bold shadow-sm">
                Save Bus
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default AddBus
