import React from 'react'
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap';

const AddBus = () => {
  return (
    <Container className="py-5">
      <Card className="shadow-sm border-0 mx-auto" style={{ maxWidth: '900px' }}>
        <Card.Body className="p-4 p-md-5">
          <div className="d-flex align-items-center mb-4 border-bottom pb-3">
            <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-3 me-3">
              <i className="bi bi-bus-front fs-4"></i>
            </div>
            <div>
              <h3 className="fw-bold mb-0">Register New Bus</h3>
              <p className="text-muted mb-0">Enter the vehicle details to add it to your fleet.</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default AddBus
