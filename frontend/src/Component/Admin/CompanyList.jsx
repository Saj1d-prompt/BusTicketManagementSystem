import React from 'react'
import { Badge, Button, Card, Container, Table } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useEffect } from 'react';

const CompanyList = () => {
    const { user } = useContext(AuthContext);
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState(null);

    const [showModal, setShowModal] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [actionType, setActionType] = useState('');
    const fetchCompanies = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_KEY}/allCompanies`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const result = await response.json();
            if (response.ok && result.status === 200) {
                setCompanies(result.data);
            } else {
                setMessage({ type: 'danger', text: result.message || 'Failed to load companies.' });
            }
        } catch (error) {
            console.error('Error fetching companies:', error);
            setMessage({ type: 'danger', text: 'Failed to load companies. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user && user.role === 'admin') {
            fetchCompanies();
        }
    }, [user]);

    const initiateAction = (company, action) => {
        setSelectedCompany(company);
        setActionType(action);
        setShowModal(true);
    };

    const confirmAction = async () => {
        if (!selectedCompany) return;

        const newStatus = actionType;
        try {
            const response = await fetch(`${import.meta.env.VITE_API_KEY}/updateCompanyAccStatus/${selectedCompany.id}`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({ status: newStatus })
            });
            const result = await response.json();
            if (response.ok && result.status === 200) {
                setCompanies(companies.map(c => c.id === selectedCompany.id ? { ...c, status: newStatus } : c));
                setMessage({ type: 'success', text: 'Company status updated successfully.' });
                setShowModal(false);
            } else {
                setMessage({ type: 'danger', text: result.message || 'Failed to update company status.' });
            }
        } catch (error) {
            console.error('Error updating company status:', error);
            setMessage({ type: 'danger', text: 'Failed to update company status. Please try again later.' });
        }
    };

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
                        {loading ? (
                            <div className="text-center py-5">
                                <Spinner animation="border" variant="primary" />
                            </div>
                        ) : companies.length === 0 ? (
                            <div className="text-center py-5">
                                <h5 className="text-muted">No companies found in the system.</h5>
                            </div>
                        ) : (
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
                                <tbody>
                                    {companies.map((company) => (
                                        <tr key={company.id} className="text-center">
                                            <td className="ps-4 py-3 text-start fw-semibold">{company.company_name}</td>
                                            <td>{company.license_number}</td>
                                            <td>{company.name}</td>
                                            <td>{company.email}</td>
                                            <td>
                                                <Badge
                                                    bg={company.status === 'approved' || company.status === 'accepted' ? 'success' : company.status === 'suspended' ? 'danger' : 'warning'}
                                                    className="px-3 py-2 rounded-pill"
                                                >
                                                    {company.status.charAt(0).toUpperCase() + company.status.slice(1)}
                                                </Badge>
                                            </td>
                                            <td className="pe-4">
                                                {company.status === 'suspended' && (
                                                    <Button
                                                        variant="outline-success"
                                                        onClick={() => initiateAction(company, 'approved')}
                                                    >
                                                        <i className="bi bi-check-circle me-1"></i> Activate
                                                    </Button>
                                                )}

                                                {(company.status === 'approved' || company.status === 'accepted') && (
                                                    <Button
                                                        variant="outline-danger"
                                                        onClick={() => initiateAction(company, 'suspended')}
                                                    >
                                                        <i className="bi bi-slash-circle me-1"></i> Suspend
                                                    </Button>
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        )}
                    </Card.Body>
                </Card>
                <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title className={actionType === 'suspended' ? "text-danger" : "text-success"}>
                            {actionType === 'suspended' ? 'Suspend Company' : 'Activate Company'}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        Are you sure you want to{' '}
                        <strong>{actionType === 'suspended' ? 'suspend' : 'activate'}</strong>{' '}
                        the account for{' '}
                        <span className="fw-bold">{selectedCompany?.company_name}</span>?

                        {actionType === 'suspended' && (
                            <p className="text-danger mt-2 mb-0" style={{ fontSize: '0.9rem' }}>
                                They will immediately lose access to their owner dashboard and operations.
                            </p>
                        )}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                            Cancel
                        </Button>

                        <Button
                            variant={actionType === 'suspended' ? 'danger' : 'success'}
                            onClick={confirmAction}
                        >
                            Yes, {actionType === 'suspended' ? 'Suspend' : 'Activate'}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    )
}

export default CompanyList
