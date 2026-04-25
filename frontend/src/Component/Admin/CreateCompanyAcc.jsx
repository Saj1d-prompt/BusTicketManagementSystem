import React from 'react'
import { Table, Button, Container, Card, Spinner, Badge } from 'react-bootstrap';
const CreateCompanyAcc = () => {
  return (
    <div>
      <Container className="py-5">
        <Card>
          <Card.Body>
            <h3>Pending Company Approvals</h3>
            <Table>
              <thead>
                <tr>
                  <th>Company Name</th>
                  <th>License</th>
                  <th>License/Registration Document</th>
                  <th>Owner/Admin Name</th>
                  <th>Contact Number</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>

              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default CreateCompanyAcc
