import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LandingPage from './Component/Common/LandingPage';
function App() {
  return (
    <>
      {/* <LandingPage/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
