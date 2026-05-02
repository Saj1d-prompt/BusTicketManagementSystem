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
            </Container>
        </div>
    )
}

export default OperatorList
