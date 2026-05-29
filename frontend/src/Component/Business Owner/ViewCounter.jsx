import React from 'react'
import { Container, Card, Form, Button, Row, Col, Spinner, Table, Badge } from 'react-bootstrap';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

const ViewCounter = () => {
    const [statusFilter, setStatusFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);
    const { user } = useContext(AuthContext);
    const [counters, setCounters] = useState([]);

    const fetchCounters = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_KEY}/counterList`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                    'Accept': 'application/json'
                }
            });
            const result = await response.json();
            if (result.status === 200) {
                setCounters(result.data);
            }
            else {
                setMessage({ type: 'danger', text: 'Failed to load Counters. Please try again.' });
                setTimeout(() => {
                    setMessage(null);
                }, 3000);
            }
        } catch (error) {
            console.error('Error fetching buses:', error);
            setMessage({ type: 'danger', text: 'Failed to load Counters. Please try again.' });
            setTimeout(() => {
                setMessage(null);
            }, 3000);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user && user.role === 'company') {
            fetchCounters();
        }
    }, [user]);

    const filteredCounters = counters.filter(counter => {
        const matchesStatus = statusFilter === 'all' || counter.status === statusFilter;
        const matchesSearch = counter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            counter.city.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatus && matchesSearch;
    });

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
                                    {filteredCounters.length > 0 ? (
                                    filteredCounters.map(counter => (
                                        <tr key={counter.id}>
                                            <td className="ps-4 fw-bold text-dark">{counter.name}</td>
                                            <td>
                                                <Badge bg="secondary" className="bg-opacity-10 text-dark px-2 py-1">
                                                    {counter.city}
                                                </Badge>
                                            </td>
                                            <td>{counter.contact_number || <span className="text-muted headers-font">N/A</span>}</td>
                                            <td className="text-truncate text-muted" style={{ maxWidth: '250px' }}>
                                                {counter.address || 'No landmark specified'}
                                            </td>
                                            <td className="text-center pe-4">
                                                <Badge bg={counter.status === 'active' ? 'success' : 'danger'} className="px-3 py-1">
                                                    {counter.status.toUpperCase()}
                                                </Badge>
                                            </td>
                                            <td>
                                                <Form.Select
                                                    size="sm"
                                                    value={counter.status}
                                                    onChange={(e) => handleStatusChange(counter.id, e.target.value)}
                                                    className={`fw-semibold ${counter.status === 'active' ? 'text-success border-success' :
                                                        'text-danger border-danger'
                                                        }`}
                                                    >
                                                        <option value="active">Active</option>
                                                        <option value="inactive">Inactive</option>
                                                    </Form.Select>
                                                </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center py-5 text-muted">
                                            <i className="bi bi-geo-alt fs-2 d-block mb-2 text-black-50"></i>
                                            No matching counters found.
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

export default ViewCounter
