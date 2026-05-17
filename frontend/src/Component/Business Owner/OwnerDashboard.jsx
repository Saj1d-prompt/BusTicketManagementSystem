import React, { useEffect } from 'react'
import AddOperator from './AddOperator'
import { AuthContext } from '../Context/AuthContext';
import { useContext } from 'react';
import { useState } from 'react';
import CompanyDashboardNotifier from './CompanyDashboardNotifier';
import { Alert, Spinner } from 'react-bootstrap';
import OperatorList from './OperatorList';
import AddBus from './AddBus';
import BusList from './BusList';
import AddRoute from './AddRoute';
import CompanyRoute from './CompanyRoute';
import AddCounter from './AddCounter';

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
  
  if (loading) return <Spinner animation="border" className="d-block mx-auto mt-5" />;
    if (!companyInfo) return <Alert variant="warning">No company found.</Alert>;

    if (companyInfo.status === 'pending') {
        return <CompanyDashboardNotifier
            icon="bi-hourglass-split"
            title="Application Under Review"
            message={`Thank you for registering ${companyInfo.company_name}. Your application is currently under process.`}
            colorClass="text-warning"
        />;
    }

    if (companyInfo.status === 'rejected') {
        return <CompanyDashboardNotifier
            icon="bi-x-circle"
            title="Application Rejected"
            message={`Unfortunately, the application for ${companyInfo.company_name} has been rejected.`}
            colorClass="text-danger"
            footerText="Please contact the Head Office for further details."
        />;
    }

    if (companyInfo.status === 'suspended') {
        return <CompanyDashboardNotifier
            icon="bi-exclamation-triangle"
            title="Account Suspended"
            message={`The account for ${companyInfo.company_name} is currently suspended.`}
            colorClass="text-danger"
            footerText="Please contact the Head Office immediately to resolve this issue."
        />;
    }

  return (
    <div>
      {/* <OperatorList /> */}
      {/* <AddOperator /> */}
      {/* <AddBus /> */}
      {/* <BusList /> */}
      {/* <AddRoute /> */}
      {/* <CompanyRoute /> */}
      <AddCounter />
    </div>
  )
}

export default OwnerDashboard
