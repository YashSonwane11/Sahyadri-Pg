import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import Home from './pages/Home';
import About from './pages/About';
import Amenities from './pages/Amenities';
import Rooms from './pages/Rooms';
import Mess from './pages/Mess';
import Events from './pages/Events';
import Contact from './pages/Contact';

// A premium temporary page component for routes that are yet to be built
const ComingSoonPage = ({ pageName, desc }) => (
  <div className="min-h-[70vh] flex flex-col items-center justify-center bg-soft-beige px-4 pt-32 pb-16 text-center">
    <div className="max-w-md bg-white rounded-3xl border border-[#f5efeb] shadow-xl p-8 sm:p-10 flex flex-col gap-6 items-center">
      <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-sans font-extrabold text-2xl text-premium-black">{pageName} Section</h1>
        <p className="font-body text-sm text-premium-black/60 leading-relaxed">
          {desc || 'This section is fully mapped out in the implementation plan and will be built in the next step. Currently, the Home Page is active and fully functional!'}
        </p>
      </div>
      <Link
        to="/"
        className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md text-sm cursor-pointer"
      >
        Return to Home Page
      </Link>
    </div>
  </div>
);

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-soft-beige text-premium-black selection:bg-primary/20 selection:text-primary">
      {/* Dynamic Sticky Glassmorphism Header */}
      <Navbar />

      {/* Main Pages Router Viewport */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/mess" element={<Mess />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<ComingSoonPage pageName="Student Feedback" desc="Review board where students can read ratings, write reviews, and submit ratings directly." />} />
          <Route path="*" element={<ComingSoonPage pageName="404 Page Not Found" desc="Oops! The page you are looking for does not exist. Please navigate back to the home page." />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* WhatsApp, Call Dialer and Back to Top floating quick-actions */}
      <FloatingActions />
    </div>
  );
}

export default App;
