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
    const fetchRoutes = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_KEY}/routeList`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const result = await response.json();
            if (response.ok && result.status === 200) {
                setRoutes(result.data);
            } else {
                setMessage({ type: 'danger', text: result.message || 'Failed to load routes.' });
            }
        } catch (error) {
            console.error('Error fetching routes:', error);
            setMessage({ type: 'danger', text: 'Failed to load routes. Please try again.' });
            setTimeout(() => {
                setMessage(null);
            }, 3000);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if (user && user.role === 'company') {
            fetchRoutes();
        }
    }, [user]);
    const handleStatus = async (routeId, newStatus) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_KEY}/updateRouteStatus/${routeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({ status: newStatus }),
            });
            
        } catch (error) {
            console.error('Error updating route status:', error);
            setMessage({ type: 'danger', text: 'Failed to update route status. Please try again.' });
            setTimeout(() => {
                setMessage(null);
            }, 3000);
        }
    }
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
                                {routes && routes.map((route) => (
                                    <tr key={route.id}>
                                        <td className="ps-4 py-3">
                                            <span className="fw-semibold d-block text-primary">{route.origin_city}</span>
                                        </td>
                                        <td>
                                            <Badge bg="secondary" className="px-2 py-1 text-uppercase letter-spacing-1">
                                                {route.destination_city}
                                            </Badge>
                                        </td>
                                        <td>
                                            <span className="d-block">{route.distance_km} Km</span>
                                        </td>
                                        <td>
                                            <span className="d-block">{route.estimated_time_hours}</span>
                                        </td>
                                        <td>
                                            <Form.Select
                                                value={route.status}
                                                className={`fw-semibold ${route.status === 'active' ? 'text-success border-success' :
                                                    'text-danger border-danger'
                                                    }`}
                                                onChange={(e) => handleStatus(route.id, e.target.value)}
                                            >
                                                <option value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                            </Form.Select>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default CompanyRoute
