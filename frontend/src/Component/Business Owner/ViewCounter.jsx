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
            
        </Container>
    </div>
  )
}

export default ViewCounter
