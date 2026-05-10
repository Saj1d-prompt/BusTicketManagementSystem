import React from 'react'
import { Button, Card, Container, Form, Row, Col, Table, Badge } from 'react-bootstrap';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useEffect } from 'react';
import { set } from 'react-hook-form';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const BusList = () => {
    const [buses, setBuses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const { user } = useContext(AuthContext);

    const [searchQuery, setSearchQuery] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [typeFilter, setTypeFilter] = useState('');

    const fetchBuses = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_KEY}/busList`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const result = await response.json();
            if (response.ok && result.status === 200) {
                setBuses(result.data);
            } else {
                setMessage({ type: 'danger', text: result.message || 'Failed to load buses.' });
            }
        } catch (error) {
            console.error('Error fetching buses:', error);
            setMessage({ type: 'danger', text: 'Failed to load buses. Please try again.' });
            setTimeout(() => {
                setMessage(null);
            }, 3000);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if (user && user.role === 'company') {
            fetchBuses();
        }
    }, [user]);

    const filteredBuses = buses.filter(bus => {
        const matchesSearch =
            bus.bus_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            bus.registration_number.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (bus.brand && bus.brand.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesStatus = statusFilter === '' || bus.status === statusFilter;
        const matchesType = typeFilter === '' || bus.type === typeFilter;

        return matchesSearch && matchesStatus && matchesType;
    });

    const handleStatusChange = async (busId, newStatus) => {
        try{
            
        }catch(error){
            console.error('Error updating bus status:', error);
            setMessage({ type: 'danger', text: 'Failed to update bus status. Please try again.' });
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
                        <h3 className="fw-bold mb-0">Manage Fleet</h3>
                        <p className="text-muted">View, search, and manage your registered buses.</p>
                    </div>
                    <Button variant="primary" className="px-4 shadow-sm">
                        <Link to="/addBus" className="text-white text-decoration-none">
                            Add New Bus
                        </Link>
                    </Button>
                </div>
                <Card className="shadow-sm border-0 mb-4 bg-light">
                    {message && (
                        <div style={{
                            position: "fixed",
                            top: "20px",
                            right: "20px",
                            minWidth: "250px",
                            padding: "12px 18px",
                            borderRadius: "8px",
                            color: "#fff",
                            backgroundColor: message.type === "success" ? "#28a745" : "#dc3545",
                            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                            zIndex: 9999,
                            animation: "slideIn 0.3s ease"
                        }}>
                            {message.text}
                        </div>
                    )}
                    <Card.Body>
                        <Row className="g-3">
                            <Col md={6}>
                                <Form.Control
                                    type="text"
                                    placeholder="Search by Bus Name, Reg No, or Brand..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </Col>
                            <Col md={3}>
                                <Form.Select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                                    <option value="">All Bus Types</option>
                                    <option value="AC">AC Coach</option>
                                    <option value="Non-AC">Non-AC Coach</option>
                                    <option value="Sleeper">AC Sleeper</option>
                                </Form.Select>
                            </Col>
                            <Col md={3}>
                                <Form.Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
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
                        {loading ? (
                            <div className="text-center py-5">
                                <Spinner animation="border" variant="primary" />
                            </div>
                        ) :
                            filteredBuses.length === 0 ? (
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredBuses.length > 0 ? filteredBuses.map((bus) => (
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
                                                        value={bus.status}
                                                        onChange={(e) => handleStatusChange(bus.id, e.target.value)}
                                                        className={`fw-semibold ${bus.status === 'active' ? 'text-success border-success' :
                                                                bus.status === 'maintenance' ? 'text-warning border-warning' :
                                                                    'text-danger border-danger'
                                                            }`}
                                                    >
                                                        <option value="active">Active</option>
                                                        <option value="maintenance">Maintenance</option>
                                                        <option value="retired">Retired</option>
                                                    </Form.Select>
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
