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
            <Form>
              <Row className="mb-4">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label className="fw-semibold">Origin City <span className="text-danger">*</span></Form.Label>
                    <Form.Select
                      {...register('origin_city', { required: "Origin city is required" })}
                      isInvalid={!!errors.origin_city}
                    >
                      <option value="">Select Starting City</option>
                      {BANGLADESH_CITIES.map(city => <option key={`origin-${city}`} value={city}>{city}</option>)}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.origin_city?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6} className="mt-3 mt-md-0">
                  <Form.Group>
                    <Form.Label className="fw-semibold">Destination City <span className="text-danger">*</span></Form.Label>
                    <Form.Select
                      {...register('destination_city', { required: "Destination city is required" })}
                      isInvalid={!!errors.destination_city}
                    >
                      <option value="">Select Destination City</option>
                      {BANGLADESH_CITIES.map(city => <option key={`dest-${city}`} value={city}>{city}</option>)}
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.destination_city?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col md={4}>
                  <Form.Group>
                    <Form.Label className="fw-semibold">Distance (in KM) <span className="text-danger">*</span></Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="e.g., 250"
                      min="1"
                      {...register('distance_km', { required: "Distance is required", min: 1 })}
                      isInvalid={!!errors.distance_km}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.distance_km?.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col md={4}>
                  <Form.Group>
                    <Form.Label className="fw-semibold">Est. Hours</Form.Label>
                    <Form.Control
                      type="number"
                      min="0"
                      max="48"
                      {...register('duration_hours', { required: true })}
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group>
                    <Form.Label className="fw-semibold">Est. Minutes</Form.Label>
                    <Form.Select {...register('duration_minutes', { required: true })}>
                      <option value="00">00 mins</option>
                      <option value="15">15 mins</option>
                      <option value="30">30 mins</option>
                      <option value="45">45 mins</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <div className="d-flex justify-content-center border-top pt-4">
                <Button variant="danger" type="submit" disabled={loading} className="px-5 py-2 fw-bold shadow-sm">
                  {loading ? <Spinner as="span" animation="border" size="sm" className="me-2" /> : <i className="bi bi-save me-2"></i>}
                  {loading ? 'Saving Route...' : 'Save Route'}
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  )
}

export default AddRoute
