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
import StudyInAustralia from './pages/services/StudyInAustralia';
import MigrateToAustralia from './pages/services/MigrateToAustralia';
import CareerCounsellingServices from './pages/services/CareerCounsellingServices';
import JobReadyPrograms from './pages/services/JobReadyPrograms';
import MentorshipPrograms from './pages/services/MentorshipPrograms';
import Internship from './pages/services/Internship';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/services/study-in-australia' element={<StudyInAustralia/>}/>
          <Route path='/services/migrate-to-australia' element={<MigrateToAustralia/>}/>
          <Route path='/services/career-counselling-services' element={<CareerCounsellingServices/>}/>
          <Route path='/services/job-ready-programs' element={<JobReadyPrograms/>}/>
          <Route path='/services/mentorship-programs' element={<MentorshipPrograms/>}/>
          <Route path='/services/internship' element={<Internship/>}/>
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
