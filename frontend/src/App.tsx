import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './pages/Services';
import FAQs from './pages/Faqs';
import ContactUs from './pages/Contactus';
import Events from './pages/Events';
import Event from './pages/Event';
import EventRegistration from './pages/EventRegistration';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/faqs' element={<FAQs/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/events' element={<Events/>}/>
          <Route path='/event/:id' element={<Event/>}/>
          <Route path='/event/:id/register/:datetime' element={<EventRegistration/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App
