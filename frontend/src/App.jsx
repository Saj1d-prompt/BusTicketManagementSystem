import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LandingPage from './Component/Common/LandingPage';
import SelectRegistration from './Component/Login and Registration/SelectRegistration';
import Registration from './Component/Login and Registration/Registration';
function App() {
  return (
    <>
      {/* <LandingPage/> */}
      {/* <Registration /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
