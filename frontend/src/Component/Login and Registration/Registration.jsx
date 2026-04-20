import React from 'react'
import { useState } from 'react';
import PassengerReg from './PassengerReg';
import BusCompanyReg from './BusCompanyReg';
import SelectRegistration from './SelectRegistration';
import Heading from '../Common/Heading';

const Registration = () => {
  const [role, setRole] = useState(null);
  const renderContent = () => {
    if (role === 'passenger') {
      return <PassengerReg onBack={() => setRole(null)} />;
    }
    if (role === 'company') {
      return <BusCompanyReg onBack={() => setRole(null)} />;
    }
    return <SelectRegistration onSelectRole={setRole} />;
  };
  return (
    <div>
      <Heading />
      {renderContent()}
    </div>
  )
}

export default Registration
