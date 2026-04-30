import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import Chatbot from './components/Chatbot';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <BrowserRouter>
      <div className="font-sans text-clinic-dark dark:text-clinic-bg bg-clinic-bg dark:bg-[#00282d] selection:bg-clinic-cta selection:text-white min-h-screen transition-colors duration-300">
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/agendar" element={<BookingPage />} />
        </Routes>
        <Chatbot />
      </div>
    </BrowserRouter>
  );
}
