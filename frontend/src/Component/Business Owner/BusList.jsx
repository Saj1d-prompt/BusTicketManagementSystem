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
    // const buses = [];
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
                        <Col md={3}>
                            <Form.Select>
                                <option value="">All Bus Types</option>
                                <option value="AC">AC Coach</option>
                                <option value="Non-AC">Non-AC Coach</option>
                                <option value="Sleeper">AC Sleeper</option>
                            </Form.Select>
                        </Col>
                        <Col md={3}>
                            <Form.Select>
                                <option value="">All Statuses</option>
                                <option value="active">Active</option>
                                <option value="maintenance">Maintenance</option>
                                <option value="retired">Retired</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className="shadow-sm border-0">
                <Card.Body className="p-0">
                    {buses.length === 0 ? (
                        <div className="text-center py-5">
                            <i className="bi bi-bus-front text-muted" style={{ fontSize: '3rem' }}></i>
                            <h5 className="mt-3 text-muted">No buses found</h5>
                            <p className="text-muted">You haven't added any vehicles to your fleet yet.</p>
                        </div>
                    ) : (
                        <Table responsive hover className="align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4 py-3">Bus Details</th>
                                    <th className="py-3">Reg. Number</th>
                                    <th className="py-3">Type & Seats</th>
                                    <th className="py-3" style={{ width: '200px' }}>Current Status</th>
                                    <th className="text-center pe-4 py-3">Quick Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {buses.length > 0 ? buses.map((bus) => (
                                    <tr key={bus.id}>
                                        <td className="ps-4 py-3">
                                            <span className="fw-semibold d-block text-primary">{bus.bus_name}</span>
                                            <small className="text-muted">
                                                {bus.brand ? `Brand: ${bus.brand}` : 'Brand: N/A'}
                                            </small>
                                        </td>
                                        <td>
                                            <Badge bg="secondary" className="px-2 py-1 text-uppercase letter-spacing-1">
                                                {bus.registration_number}
                                            </Badge>
                                        </td>
                                        <td>
                                            <span className="d-block">{bus.type}</span>
                                            <small className="text-muted">{bus.total_seats} Seats</small>
                                        </td>
                                        <td>
                                            <Form.Select 
                                                size="sm"
                                                className={`fw-semibold ${
                                                    bus.status === 'active' ? 'text-success border-success' : 
                                                    bus.status === 'maintenance' ? 'text-warning border-warning' : 
                                                    'text-danger border-danger'
                                                }`}
                                            >
                                                <option value="active">Active</option>
                                                <option value="maintenance">Maintenance</option>
                                                <option value="retired">Retired</option>
                                            </Form.Select>
                                        </td>
                                        <td className="text-center pe-4">
                                            <Button variant="light" size="sm" className="text-primary border">
                                                <i className="bi bi-eye"></i> Details
                                            </Button>
                                        </td>
                                    </tr>
                                )) : (
                                    <tr>
                                        <td colSpan="5" className="text-center py-4 text-muted">
                                            No buses match your search/filter criteria.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    )}
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}

export default BusList
