import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LandingPage from './Component/Common/LandingPage';
import SelectRegistration from './Component/Login and Registration/SelectRegistration';
import Registration from './Component/Login and Registration/Registration';
import Login from './Component/Login and Registration/Login';
import AdminDashboard from './Component/Admin/adminDashboard';
import OwnerDashboard from './Component/Business Owner/OwnerDashboard';
import OperatorDashboard from './Component/Operator/OperatorDashboard';
import AddOperator from './Component/Business Owner/AddOperator';
function App() {
  return (
    <>
      {/* <LandingPage/> */}
      {/* <Registration /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/companyDashboard" element={<OwnerDashboard />} />
          <Route path='/operatorDashboard' element={<OperatorDashboard />} />
          <Route path='/addOperator' element={<AddOperator />}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
