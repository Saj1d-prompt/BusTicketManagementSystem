import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import { useState } from 'react';

const CompanyRoute = () => {
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
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default CompanyRoute
