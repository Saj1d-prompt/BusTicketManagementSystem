import React from 'react'
import { Badge, Button, Card, Container, Table } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const CompanyList = () => {
    const { user } = useContext(AuthContext);
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);
    return (
        <div>
            <Container className="py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h3 className="fw-bold mb-0">Manage Companies</h3>
                        <p className="text-muted">Suspend or activate system access for transport companies.</p>
                    </div>
                </div>
                <Card className="shadow-sm border-0">
                    <Card.Body className="p-0">
                        <Table responsive hover className="align-middle mb-0">
                            <thead className="table-light">
                                <tr className="text-center">
                                    <th className="ps-4 py-3 text-start">Company Name</th>
                                    <th className="py-3">License No.</th>
                                    <th className="py-3">Owner</th>
                                    <th className="py-3">Email</th>
                                    <th className="py-3">Status</th>
                                    <th className="pe-4 py-3">Action</th>
                                </tr>
                            </thead>

                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default CompanyList
