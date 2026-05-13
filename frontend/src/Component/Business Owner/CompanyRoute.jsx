import React from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
            </Container>
        </div>
    )
}

export default CompanyRoute
