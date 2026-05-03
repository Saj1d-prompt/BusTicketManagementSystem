import React, { useEffect } from 'react'
import { Button, Card, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const OperatorList = () => {
    const { user } = useContext(AuthContext);
    const [operators, setOperators] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteOperator, setDeleteOperator] = useState(null);

    const initiateDelete = (operator) => {
        setDeleteOperator(operator);
        setShowDeleteModal(true);
    };

    const fetchOperators = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_KEY}/operatorList`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const result = await response.json();
            if (response.ok && result.status === 200) {
                setOperators(result.data);
            } else {
                setMessage({ type: 'danger', text: result.message || 'Failed to load operators.' });
            }
        } catch (error) {
            console.error('Error fetching operators:', error);
            setMessage({ type: 'danger', text: 'Failed to load operators. Please try again.' });
            setTimeout(() => {
                setMessage(null);
            }, 3000);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        if (user && user.role === 'company') {
            fetchOperators();
        }
    }, [user]);

    const confirmDelete = async () => {
        //code
    }
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
                        {loading ? (
                            <div className="text-center py-5">
                                <Spinner animation="border" variant="primary" />
                            </div>
                        ) : operators.length === 0 ? (
                            <div className="text-center py-5">
                                <i className="bi bi-people text-muted" style={{ fontSize: '3rem' }}></i>
                                <h5 className="mt-3 text-muted">No operators found</h5>
                                <p className="text-muted">You haven't added any staff members yet.</p>
                            </div>
                        ) : (
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
                                    {operators.map((operator) => (
                                        <tr key={operator.id}>
                                            <td className="ps-4 py-3">
                                                <div className="d-flex align-items-center">
                                                    <div
                                                        className="bg-primary text-white d-flex justify-content-center align-items-center rounded-circle me-3"
                                                        style={{ width: '40px', height: '40px', fontWeight: 'bold' }}
                                                    >
                                                        {operator.name.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <span className="fw-semibold d-block">{operator.name}</span>
                                                        <small className="text-muted">ID: #{operator.id}</small>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{operator.email}</td>
                                            <td>{operator.phone || <span className="text-muted fst-italic">Not provided</span>}</td>
                                            <td className="text-center pe-4">
                                                {/* <Button variant="outline-primary" className="me-2">
                                                    <i className="bi bi-pencil-square"></i> Edit
                                                </Button> */}
                                                <Button variant="outline-danger" onClick={() => initiateDelete(operator)}>
                                                    <i className="bi bi-trash"></i> Delete
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        )}
                    </Card.Body>
                </Card>

                <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-danger">
                            <i className="bi bi-exclamation-triangle-fill me-2"></i>Delete Operator
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete the operator account for <strong>{deleteOperator?.name}</strong>?
                        <p className="text-danger mt-2 mb-0" style={{ fontSize: '0.9rem' }}>
                            This action is permanent and cannot be undone. They will lose all access to the system immediately.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={confirmDelete}>
                            Yes, Delete Operator
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    )
}

export default OperatorList
