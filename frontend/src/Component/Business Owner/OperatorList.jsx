import React from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const OperatorList = () => {
    return (
        <div>
            <Container className="py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h3 className="fw-bold mb-0">Manage Operators</h3>
                        <p className="text-muted">View and manage your company's staff members.</p>
                    </div>
                    <Button variant="primary" className="px-4 shadow-sm">
                        <Link to='/addOperator' className="text-white text-decoration-none">
                            Add New Operator
                        </Link>
                    </Button>
                </div>
                <Card className="shadow-sm border-0">
                    <Card.Body className="p-0">
                        <Table responsive hover className="align-middle mb-0">
                            <thead className="table-light">
                                <tr>
                                    <th className="ps-4 py-3">Name</th>
                                    <th className="py-3">Email</th>
                                    <th className="py-3">Phone</th>
                                    <th className="text-center pe-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="ps-4 py-3">
                                        <div className="d-flex align-items-center">
                                            <div
                                                className="bg-primary text-white d-flex justify-content-center align-items-center rounded-circle me-3"
                                                style={{ width: '40px', height: '40px', fontWeight: 'bold' }}
                                            >
                                                S
                                            </div>
                                            <div>
                                                <span className="fw-semibold d-block">MR. X</span>
                                                <small className="text-muted">ID: #1</small>
                                            </div>
                                        </div>
                                    </td>
                                    <td>x@gmail.com</td>
                                    <td>0123456789</td>
                                    <td className="text-center pe-4">
                                        <Button variant="outline-primary" className="me-2">
                                            <i className="bi bi-pencil-square"></i> Edit
                                        </Button>
                                        <Button variant="outline-danger" >
                                            <i className="bi bi-trash"></i> Delete
                                        </Button>
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

export default OperatorList
