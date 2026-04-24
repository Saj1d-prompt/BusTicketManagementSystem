import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LandingPage from './Component/Common/LandingPage';
import SelectRegistration from './Component/Login and Registration/SelectRegistration';
import Registration from './Component/Login and Registration/Registration';
import Login from './Component/Login and Registration/Login';
import AdminDashboard from './Component/Admin/adminDashboard';
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
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
