import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './assets/Pages/HomePage';
import Courses from './assets/Pages/Courses';
import ContactUs from './assets/Pages/ContactUs';
import AboutUs from './assets/Pages/AboutUs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </Router>
  )
}

export default App