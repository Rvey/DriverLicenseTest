import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import AppBar from './AppBar';
import LicenceType from './pages/LicenceSelector';
import DLQuestions from './components/DLQuestions';
import Login from './pages/Login';
import Candidates from './components/Candidates';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LicenceType />} />
        <Route path="/carLicence" element={<DLQuestions subject="carLicence" />} />
        <Route path="/truckLicence" element={<DLQuestions subject="truckLicence" />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/candidates" element={<Candidates />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
