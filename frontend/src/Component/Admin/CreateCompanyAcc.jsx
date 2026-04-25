import React, { useContext } from 'react'
import { Table, Button, Container, Card, Spinner, Badge } from 'react-bootstrap';
import { AuthContext } from '../Context/AuthContext';
const CreateCompanyAcc = () => {
  const [applications, setApplications] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { user } = useContext(AuthContext);
  const [message, setMessage] = React.useState(null);
  const fetchApplications = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/admin/companyApplications`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      });
      const result = await response.json();
      if (result.status === 200) {
        setApplications(result.data);
        setLoading(false);
      } else {
        setMessage({ text: 'failed to fetch applications', type: "danger" });
        setLoading(false);
      }
    } catch (error) {
      console.error('Error fetching applications:', error);
      setLoading(false);
    }
  }
  return (
    <div>
      <Container className="py-5">
        <Card>
          <Card.Body>
            <h3>Pending Company Approvals</h3>
            <Table>
              <thead>
                <tr style={{ backgroundColor: '#f8f9fa', textAlign: 'center' }}>
                  <th>Company Name</th>
                  <th>License</th>
                  <th>License/Reg Doc</th>
                  <th>Owner/Admin Name</th>
                  <th>Contact Number</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ textAlign: 'center' }}>
                  <td>Example Transport Co.</td>
                  <td>123456789</td>
                  <td><a href="#">View Document</a></td>
                  <td>MR. X</td>
                  <td>+1234567890</td>
                  <td>examplecompany@gmail.com</td>
                  <td>
                    <Button variant="success" className="me-2">Approve</Button>
                    <Button variant="danger">Reject</Button>
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

export default CreateCompanyAcc
