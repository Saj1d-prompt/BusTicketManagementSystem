import React from 'react'
import { Container, Card, Form, Button, Row, Col, Spinner, Table, Badge } from 'react-bootstrap';
import { useState } from 'react';

const ViewCounter = () => {
    const [statusFilter, setStatusFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const [counters, setCounters] = useState([]);

    return (
        <div>
            <Container className="py-5">
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
                    <div>
                        <h3 className="fw-bold mb-1">Bus Counters</h3>
                        <p className="text-muted mb-0">Overview of your current operational physical stops.</p>
                    </div>
                    <div style={{ minWidth: '350px' }}>
                        <Row className="g-2">
                            <Col sm={6}>
                                <Form.Select
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                    className="fw-semibold text-secondary"
                                >
                                    <option value="all">All Counters</option>
                                    <option value="active">Active Only</option>
                                    <option value="inactive">Inactive Only</option>
                                </Form.Select>
                            </Col>
                            <Col sm={6}>
                                <Form.Control
                                    type="text"
                                    placeholder="Search counter or city..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </div>
                </div>
                <Card className="shadow-sm border-0">
                    <Card.Body className="p-0">
                        {loading ? (
                            <div className="text-center py-5">
                                <Spinner animation="border" variant="success" />
                                <p className="text-muted mt-2 mb-0">Loading counters...</p>
                            </div>
                        ) : (
                            <Table responsive hover className="align-middle mb-0">
                                <thead className="table-light">
                                    <tr>
                                        <th className="ps-4">Counter Name</th>
                                        <th>City</th>
                                        <th>Contact Info</th>
                                        <th>Address / Landmark</th>
                                        <th className="text-center pe-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="ps-4 fw-bold text-dark">Sirajganj Counter 1</td>
                                            <td>
                                                <Badge bg="secondary" className="bg-opacity-10 text-dark px-2 py-1">
                                                    Sirajganj
                                                </Badge>
                                            </td>
                                            <td>01717123456</td>
                                            <td className="text-truncate text-muted" style={{ maxWidth: '250px' }}>
                                                Bajar station, near the bus stand, Sirajganj
                                            </td>
                                            <td className="text-center pe-4">
                                                <Badge className="px-3 py-1">
                                                    Active
                                                </Badge>
                                            </td>
                                    </tr>
                                </tbody>
                            </Table>
                        )}
                    </Card.Body>
                </Card>

            </Container>
        </div>
    )
}

export default ViewCounter
