import React from 'react'
import { Button, Card, Container, Form, Row, Col, Table, Badge } from 'react-bootstrap';

const BusList = () => {
    const buses = [
        {
            id: 1,
            bus_name: "City Express",
            registration_number: "ABC-1234",
            type: "AC Coach",
            total_seats: 40,
            status: "active",
            brand: "Volvo"
        },
        {
            id: 2,
            bus_name: "Mountain Rider",
            registration_number: "XYZ-5678",
            type: "Non-AC Coach",
            total_seats: 50,
            status: "maintenance",
            brand: "Mercedes"
        },
        {
            id: 3,
            bus_name: "Sleeper Star",
            registration_number: "LMN-9101",
            type: "AC Sleeper",
            total_seats: 30,
            status: "retired",
            brand: "Scania"
        }
    ];
  return (
    <div>
      <Container className="py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h3 className="fw-bold mb-0">Manage Fleet</h3>
                    <p className="text-muted">View, search, and manage your registered buses.</p>
                </div>
                <Button variant="primary" className="px-4 shadow-sm">
                    <i className="bi bi-plus-circle me-2"></i>Add New Bus
                </Button>
            </div>
            <Card className="shadow-sm border-0 mb-4 bg-light">
                <Card.Body>
                    <Row className="g-3">
                        <Col md={6}>
                            <Form.Control 
                                type="text" 
                                placeholder="Search by Bus Name, Reg No, or Brand..." 
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>

        </Container>
    </div>
  )
}

export default BusList
