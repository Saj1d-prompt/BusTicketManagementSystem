import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Container } from 'react-bootstrap'
import { Card } from 'react-bootstrap';
import { Form, Button, Row, Col, Spinner } from 'react-bootstrap';



const BANGLADESH_CITIES = ['Dhaka', 'Faridpur', 'Gazipur', 'Gopalganj', 'Jamalpur', 'Kishoreganj', 'Madaripur', 'Manikganj', 'Munshiganj', 'Mymensingh', 'Narayanganj', 'Narsingdi', 'Netrokona', 'Rajbari', 'Shariatpur', 'Sherpur', 'Tangail'
  , 'Bogra', 'Joypurhat', 'Naogaon', 'Natore', 'Nawabganj', 'Pabna', 'Rajshahi', 'Sirajgonj', 'Dinajpur', 'Gaibandha', 'Kurigram', 'Lalmonirhat', 'Nilphamari', 'Panchagarh', 'Rangpur', 'Thakurgaon', 'Barguna', 'Barisal', 'Bhola', 'Jhalokati',
  'Patuakhali', 'Pirojpur', 'Bandarban', 'Brahmanbaria', 'Chandpur', 'Chittagong', 'Comilla', 'Cox\'s Bazar', 'Feni', 'Khagrachari', 'Lakshmipur', 'Noakhali', 'Rangamati', 'Habiganj', 'Maulvibazar', 'Sunamganj', 'Sylhet',
  'Bagerhat', 'Chuadanga', 'Jessore', 'Jhenaidah', 'Khulna', 'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Satkhira'].sort();


const AddRoute = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      duration_hours: '0',
      duration_minutes: '00'
    }
  });
  return (
    <div>
      <Container className="py-5">
        <Card className="shadow-sm border-0 mx-auto" style={{ maxWidth: '800px' }}>
          <Card.Body className="p-4 p-md-5">
            <div className="d-flex align-items-center mb-4 border-bottom pb-3">
              <div className="bg-danger bg-opacity-9 text-primary rounded-circle p-3 me-3">
                <i className="bi bi-signpost-split fs-4"></i>
              </div>
              <div>
                <h3 className="fw-bold mb-0">Create New Route</h3>
                <p className="text-muted mb-0">Define a new path that your buses will travel.</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default AddRoute
