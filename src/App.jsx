import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import your pages
import Home from './Pages/Home';
import Gallery from './Pages/Gallery';
import About from './Pages/About';
import Contact from './Pages/Contact';

// Import the PageTransition component we created (adjust the path if needed)
import PageTransition from './components/common/PageTransition'; 

// 1. Create a separate component to handle the routes and animations
const AnimatedRoutes = () => {
  // Now useLocation works because this component is inside the <Router>
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route 
          path="/" 
          element={<PageTransition><Home /></PageTransition>} 
        />
        <Route 
          path="/gallery" 
          element={<PageTransition><Gallery /></PageTransition>} 
        />
        <Route 
          path="/about" 
          element={<PageTransition><About /></PageTransition>} 
        />
        <Route 
          path="/contact" 
          element={<PageTransition><Contact /></PageTransition>} 
        />
      </Routes>
    </AnimatePresence>
  );
};

// 2. Wrap AnimatedRoutes inside your Router
function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;