import React from 'react'
import AddOperator from './AddOperator'
import { AuthContext } from '../Context/AuthContext';

const OwnerDashboard = () => {
  const { user } = React.useContext(AuthContext);
  const [companyInfo, setCompanyInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <AddOperator />
    </div>
  )
}

export default OwnerDashboard
