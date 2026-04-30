import React, { useEffect } from 'react'
import AddOperator from './AddOperator'
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';
import { useState } from 'react';

const OwnerDashboard = () => {
  const { user } = useContext(AuthContext);
  const [companyInfo, setCompanyInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchCompanyStatus = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_KEY}/companyStatus`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${user.token}`
        }
      });
      const result = await response.json();
      if (result.status === 200) {
        setCompanyInfo(result.data);
      } else {
        console.error('Failed to fetch company status:', result.message);
      }
    } catch (error) {
      console.error('Error fetching company status:', error);
    }
    setLoading(false);
  };
  useEffect(() => {
    if (user && user.role === 'company') {
      fetchCompanyStatus();
    }
  }, [user]);
  
  return (
    <div>
      <AddOperator />
    </div>
  )
}

export default OwnerDashboard
