import React from 'react'
import { Container, Card, Form, Button, Row, Col, Spinner, Table, Badge } from 'react-bootstrap';
import { useState } from 'react';

const ViewCounter = () => {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [counters, setCounters] = useState([]);

  return (
    <div>
      
    </div>
  )
}

export default ViewCounter
