import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import Courses from './Pages/Courses';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App