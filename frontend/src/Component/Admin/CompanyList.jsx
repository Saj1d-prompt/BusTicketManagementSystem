import React from 'react'
import { Badge, Button, Card, Container, Table } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

const CompanyList = () => {
    return (
        <div>
            <Container className="py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                        <h3 className="fw-bold mb-0">Manage Companies</h3>
                        <p className="text-muted">Suspend or activate system access for transport companies.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default CompanyList
