import React, { useContext } from 'react'
import { Table, Button, Container, Card, Spinner, Badge, Modal } from 'react-bootstrap';
import { AuthContext } from '../Context/AuthContext';
const CreateCompanyAcc = () => {
  const [applications, setApplications] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const { user } = useContext(AuthContext);
  const [message, setMessage] = React.useState(null);


  const fetchApplications = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/companyApplications`, {
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
  React.useEffect(() => {
    if (user && user.role === 'admin') {
      fetchApplications();
    }
  }, [user]);

  const handleAction = async (id, action) => {
    try{
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/updateCompanyAccStatus/${id}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({ status: action })
      });
      
    }catch(error){
      console.error(`Error ${action} application:`, error);
    }
  }
  return (
    <div>
      <Container className="py-5">
        <Card>
          <Card.Body>
            <h3>Pending Company Approvals</h3>
            {loading ? (
              <Spinner />
            ) : (
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
                  {applications.map((app) => (
                    <tr key={app.id} style={{ textAlign: 'center' }}>
                      <td>{app.company_name}</td>
                      <td>{app.license_number}</td>
                      <td><a href={`${import.meta.env.VITE_STORAGE_URL}/${app.document_path}`} target="_blank" rel="noopener noreferrer">View Document</a></td>
                      <td>{app.name}</td>
                      <td>{app.phone}</td>
                      <td>{app.email}</td>
                      <td>
                        <Button variant="success" className="me-2" onClick={()=>handleAction(app.id,'approved')}>Approve</Button>
                        <Button variant="danger" onClick={()=>handleAction(app.id,'rejected')}>Reject</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            )}
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default CreateCompanyAcc
