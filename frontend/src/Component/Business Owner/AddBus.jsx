import React from 'react'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap';
import { Form, Button, Row, Col } from 'react-bootstrap';

const AddBus = () => {
  return (
    <Container className="py-5">
      <Card className="shadow-sm border-0 mx-auto" style={{ maxWidth: '900px' }}>
        <Card.Body className="p-4 p-md-5">
          <div className="d-flex align-items-center mb-4 border-bottom pb-3">
            <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-3">
              <i className="bi bi-bus-front fs-4"></i>
            </div>
            <div>
              <h3 className="fw-bold mb-0">Register New Bus</h3>
              <p className="text-muted mb-0">Enter the vehicle details to add it to your fleet.</p>
            </div>
          </div>
          <Form>
            <h5 className="mb-3 text-primary">Core Information</h5>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Bus Name/Model <span className="text-danger">*</span></Form.Label>
                  <Form.Control type="text" name="bus_name" placeholder="e.g., Express Runner" required />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Brand/Manufacturer</Form.Label>
                  <Form.Control type="text" name="brand" placeholder="e.g., Scania, Hino, Volvo" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default AddBus
