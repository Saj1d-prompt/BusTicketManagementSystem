import React, { use, useContext, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { AuthContext } from '../Context/AuthContext';

const CompanyRoute = () => {
    const [routes, setRoutes] = useState();
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Container className="py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h3 className="fw-bold mb-0">Manage Your Bus Routes</h3>
                        <p className="text-muted">View and manage your registered routes.</p>
                    </div>
                    <Button variant="primary" className="px-4 shadow-sm">
                        <Link to="/addRoute" className="text-white text-decoration-none">
                            Add New Route
                        </Link>
                    </Button>
                </div>
                <Card className="shadow-sm border-0">
                    <Card.Body className="p-0">
                        <Table responsive hover className="align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4 py-3">Starting Destination</th>
                                    <th className="py-3">Ending Destination</th>
                                    <th className="py-3">Total Distance</th>
                                    <th className="py-3">Estimated Time of Travel</th>
                                    <th className="py-3" style={{ width: '200px' }}>Route Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="ps-4 py-3">
                                        <span className="fw-semibold d-block text-primary">Sirajganj</span>
                                    </td>
                                    <td>
                                        <Badge bg="secondary" className="px-2 py-1 text-uppercase letter-spacing-1">
                                            Dhaka
                                        </Badge>
                                    </td>
                                    <td>
                                        <span className="d-block">147 Km</span>
                                    </td>
                                    <td>
                                        <span className="d-block">3 hours 30 minutes</span>
                                    </td>
                                    <td>
                                        <Form.Select
                                            size="sm"
                                            value="Active"
                                            className={`fw-semibold ${status === 'active' ? 'text-success border-success' :
                                                'text-danger border-danger'
                                                }`}
                                        >
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                        </Form.Select>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default CompanyRoute
